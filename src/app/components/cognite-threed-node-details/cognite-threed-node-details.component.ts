import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RevealNode3D } from '@cognite/sdk/dist/src';
import { CogniteApiService } from 'src/app/cognite-api.service';
import { CogniteITGService } from 'src/app/itg-api.service';

@Component({
  selector: 'app-cognite-threed-node-details',
  templateUrl: './cognite-threed-node-details.component.html',
  styleUrls: ['./cognite-threed-node-details.component.css'],
})
export class CogniteThreedNodeDetailsComponent implements OnInit, OnChanges {
  @Input() modelId: number;
  @Input() revisionId: number;
  @Input() nodeId: number;
  @Input() groupId: string | undefined;
  @Output() onClearSelection = new EventEmitter();
  group: any;

  node: RevealNode3D | undefined;

  constructor(
    private itgService: CogniteITGService,
    private apiService: CogniteApiService
  ) {}

  ngOnInit(): void {
    this.apiService
      .get3DModelNode(this.modelId, this.revisionId, this.nodeId)
      .subscribe((nodes) => (this.node = nodes[0]));
    if (this.groupId) {
      this.itgService
        .getGroup(this.groupId)
        .valueChanges.subscribe((res) => (this.group = res.data.MyGroup[0]));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.nodeId &&
      changes.nodeId.previousValue !== changes.nodeId.currentValue
    ) {
      this.apiService
        .get3DModelNode(this.modelId, this.revisionId, this.nodeId)
        .subscribe((nodes) => (this.node = nodes[0]));
    }
    if (changes.groupId && this.groupId) {
      this.itgService
        .getGroup(this.groupId)
        .valueChanges.subscribe((res) => (this.group = res.data.MyGroup[0]));
    }
  }

  get properties() {
    return unflattenList(this.node.properties);
  }
  get isInGroup() {
    if (!this.group) {
      return false;
    }
    return this.group.nodes.some((el) => el.nodeId === `${this.nodeId}`);
  }

  addNodeToGroup() {
    if (this.groupId) {
      this.itgService.addNodeToGroup(this.nodeId, this.groupId);
    }
  }
  deleteNodeFromGroup() {
    if (this.groupId) {
      this.itgService.removeNodeFromGroup(this.nodeId, this.groupId);
    }
  }
}

const unflattenList = (obj: any, key?: string) => {
  return Object.entries(obj).reduce((prev, [innerKey, value]) => {
    const visibleKey = key ? `${key}.` : '';
    if (typeof value === 'object') {
      return prev.concat(unflattenList(value, `${visibleKey}${innerKey}`));
    }
    return prev.concat([[`${visibleKey}${innerKey}`, value]]);
  }, []);
};
