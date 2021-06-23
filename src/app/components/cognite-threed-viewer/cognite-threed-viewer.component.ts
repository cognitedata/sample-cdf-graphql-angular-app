import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  TreeIndexNodeCollection,
  Cognite3DModel,
  Cognite3DViewer,
  CognitePointCloudModel,
  InvertedNodeCollection,
  NodeOutlineColor,
  DefaultNodeAppearance,
} from '@cognite/reveal';
import { CogniteClient } from '@cognite/sdk';
import { CogniteAuthService } from 'src/app/cognite-auth.service';
import { CogniteITGService } from 'src/app/itg-api.service';
// UPDATES TO FILE PLEASE REMEMBER TO UPDATE README
@Component({
  selector: 'app-cognite-threed-viewer',
  templateUrl: './cognite-threed-viewer.component.html',
  styleUrls: ['./cognite-threed-viewer.component.css'],
})
export class CogniteThreedViewerComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() modelId: number;
  @Input() revisionId: number;
  @Input() selectedNodeId: number;
  @Output() onNodeSelect = new EventEmitter<number>();

  viewer: Cognite3DViewer;
  sdk: CogniteClient;

  model: Cognite3DModel | CognitePointCloudModel;

  @Input() visibleGroupId: string | undefined;
  visibleNodeIds: number[] | undefined = undefined;

  constructor(
    private cogniteAuthService: CogniteAuthService,
    // Not needed to load just the model.
    private itgService: CogniteITGService
  ) {
    this.sdk = this.cogniteAuthService.getSdk();
  }

  /**
   * Runs when the component is initialized.
   *
   * Loads in the model and and sets a `onClick` that detects the location a click event has happened.
   */
  async ngOnInit(): Promise<void> {
    const domElement = document.getElementById('viewer');

    // Instantiates the viewer
    this.viewer = new Cognite3DViewer({
      sdk: this.sdk,
      domElement,
    });

    // Setup a click handler
    this.viewer.on('click', this._onClick.bind(this));

    // Add the model to the viewer.
    this._addModelToViewer(this.modelId, this.revisionId);
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.revisionId && this.model) {
      this._addModelToViewer(this.modelId, this.revisionId);
    }
    if (changes.selectedNodeId) {
      this._highlightNodes(this.selectedNodeId, this.visibleNodeIds);
    }
    if (changes.visibleGroupId) {
      if (this.visibleGroupId) {
        this.itgService
          .getGroup(this.visibleGroupId)
          .valueChanges.subscribe((res) => {
            this.visibleNodeIds = res.data.MyGroup[0].nodes.map(
              (el) => el.nodeId
            );
            if (this.visibleGroupId) {
              this._highlightNodes(this.selectedNodeId, this.visibleNodeIds);
            }
          });
      } else {
        this.visibleNodeIds = undefined;
        this._highlightNodes(this.selectedNodeId, this.visibleNodeIds);
      }
    }
  }

  ngOnDestroy(): void {
    this.viewer.dispose();
  }

  /**
   * Adds a model to the viewer
   *
   * @param modelId id of the model from CDF
   * @param revisionId id of the revision that you want for the model from CDF
   */
  async _addModelToViewer(modelId: number, revisionId: number) {
    // Remove any of the existing model
    if (this.model) {
      await this.viewer.removeModel(this.model);
    }
    // Add the model to the 3d viewer
    this.model = await this.viewer.addModel({
      modelId: modelId,
      revisionId: revisionId,
    });
    // Load and use the initial camera associated with the model
    this.viewer.loadCameraFromModel(this.model);
  }

  /**
   * When a click occured in the viewer, this should be what handles it.
   *
   * @param param0 { offsetX, offsetY }
   */
  async _onClick({ offsetX, offsetY }: { offsetX: number; offsetY: number }) {
    if (this.viewer) {
      // Get the location of the "click" event.
      const intersection = await this.viewer.getIntersectionFromPixel(
        offsetX,
        offsetY
      );

      // If the "click" has a valid intersection with an object on screen
      if (intersection) {
        const currentModel = intersection.model as Cognite3DModel;
        // Get the treeIndex, which is the identifier for a node in a 3D tree
        const treeIndex = (intersection as any).treeIndex;

        // Sadly the treeIndex is only used internally for the viewer - we need to next get the nodeId
        const nodeId = await currentModel.mapTreeIndexToNodeId(treeIndex);

        // Great, we have found the nodeId, lets use this
        this.onNodeSelect.emit(nodeId);
        this.selectedNodeId = nodeId;
      }
    }
  }

  async _highlightNodes(selectedNodeId?: number, visibleNodeIds?: number[]) {
    if (this.model) {
      const currentModel = this.model as Cognite3DModel;

      // Clear all existing node styles
      currentModel.removeAllStyledNodeCollections();

      // If theres a selection, draw pink box and make all colors for other nodes grey
      if (selectedNodeId) {
        // Since the viewer speaks in treeIndex, we need to convert the selected node to treeIndex
        const selectedTreeIndex = await currentModel.mapNodeIdToTreeIndex(
          selectedNodeId
        );

        // In the new viewer, we have to set up a node set and apply a rule on it.
        // Node set created
        const newNodeSet = new TreeIndexNodeCollection([selectedTreeIndex]);

        // Adding style to everything NOT in the node set to make them grey
        await currentModel.assignStyledNodeCollection(
          new InvertedNodeCollection(currentModel, newNodeSet),
          { color: [100, 100, 100] }
        );

        // Adding style to everything in the node set to make them have a red outline
        await currentModel.assignStyledNodeCollection(newNodeSet, {
          outlineColor: NodeOutlineColor.Red,
        });
      }

      // If theres a visibility filter, ghost all other nodes
      if (visibleNodeIds) {
        // Since the viewer speaks in treeIndex, we need to convert the visible nodes to treeIndexes
        const visibleTreeIndexes = await Promise.all(
          visibleNodeIds.map((id) => currentModel.mapNodeIdToTreeIndex(id))
        );

        // In the new viewer, we have to set up a node set and apply a rule on it.
        // Node set created
        const newNodeSet = new TreeIndexNodeCollection(visibleTreeIndexes);

        // Adding style to everything NOT in the node set to make them ghosted (translucent)
        currentModel.setDefaultNodeAppearance(DefaultNodeAppearance.Ghosted);
        currentModel.assignStyledNodeCollection(newNodeSet, DefaultNodeAppearance.Default);
      }
    }
  }
}
