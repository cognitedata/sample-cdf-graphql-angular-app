import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Model3D } from '@cognite/sdk';
import { CogniteApiService } from '../../cognite-api.service';

@Component({
  selector: 'app-cognite-models-list',
  templateUrl: './cognite-models-list.component.html',
  styleUrls: ['./cognite-models-list.component.css'],
})
export class CogniteModelsListComponent implements OnInit {
  models: Model3D[];
  loading = true;
  error: any;

  selectedModel: number;
  selectedRevision: number;

  @Output() onModelAndRevision = new EventEmitter<
    { modelId: number; revisionId: number } | undefined
  >();

  constructor(private cogniteApiService: CogniteApiService) {
    this.models = [];
  }

  ngOnInit(): void {
    this.cogniteApiService.get3DModels().subscribe((result) => {
      this.models = result;
    });
  }

  onModelSelected(newSelectedModelId: number): void {
    if (newSelectedModelId === this.selectedModel) {
      this.selectedModel = undefined;
      this.selectedRevision = undefined;
    } else {
      this.selectedModel = newSelectedModelId;
      this.selectedRevision = undefined;
    }
  }

  onRevisionSelected(newRevisionId: number): void {
    if (newRevisionId === this.selectedRevision) {
      this.selectedRevision = undefined;
      this.onModelAndRevision.emit(undefined);
    } else {
      this.selectedRevision = newRevisionId;
      this.onModelAndRevision.emit({
        modelId: this.selectedModel,
        revisionId: this.selectedRevision,
      });
    }
  }
}
