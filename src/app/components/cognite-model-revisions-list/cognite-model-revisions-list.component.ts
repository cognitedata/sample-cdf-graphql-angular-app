import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Revision3D } from '@cognite/sdk/dist/src';
import { CogniteApiService } from '../../cognite-api.service';

@Component({
  selector: 'app-cognite-model-revisions-list',
  templateUrl: './cognite-model-revisions-list.component.html',
  styleUrls: ['./cognite-model-revisions-list.component.css'],
})
export class CogniteModelRevisionsListComponent implements OnInit, OnChanges {
  @Input() modelId: number;
  @Output() newRevisionId = new EventEmitter<number>();

  revisions: Revision3D[];
  loading = true;
  error: any;

  selectedRevision: number;

  constructor(private cogniteApiService: CogniteApiService) {
    this.revisions = [];
  }

  ngOnInit(): void {
    this.cogniteApiService
      .get3DModelRevisions(this.modelId)
      .subscribe((result) => {
        this.revisions = result;
      });
  }

  ngOnChanges(): void {
    this.cogniteApiService
      .get3DModelRevisions(this.modelId)
      .subscribe((result) => {
        this.revisions = result;
      });
  }

  onRevisionSelected(newSelectedRevisionId: number): void {
    this.selectedRevision = newSelectedRevisionId;
    this.newRevisionId.emit(newSelectedRevisionId);
  }
}
