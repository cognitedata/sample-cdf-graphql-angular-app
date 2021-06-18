import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApolloQueryResult } from '@apollo/client/core';
import { QueryRef } from 'apollo-angular';
import { CogniteITGService } from 'src/app/itg-api.service';

@Component({
  selector: 'app-itg-groups-list',
  templateUrl: './itg-groups-list.component.html',
  styleUrls: ['./itg-groups-list.component.css'],
})
export class ItgGroupsListComponent implements OnInit, OnChanges {
  @Input() modelId: number;
  @Input() revisionId: number;
  @Input() selectedGroupId: string;
  @Output() onSelectGroup = new EventEmitter<string>();

  groupsQuery: QueryRef<any>;
  newGroupName: string;

  groups: any[] = [];

  constructor(
    private itgService: CogniteITGService,
    public dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this._refetchList();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.revisionId.currentValue !== changes.revisionId.previousValue) {
      this._refetchList();
    }
  }

  _refetchList(): void {
    this.groupsQuery = this.itgService.getGroups(
      this.modelId,
      this.revisionId,
      5000
    );
    this.groupsQuery.valueChanges.subscribe(
      (results: ApolloQueryResult<{ MyGroup: any[] }>) => {
        this.groups = results.data.MyGroup;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.newGroupName = result;

      if (result) {
        this.itgService
          .createGroup(this.modelId, this.revisionId, result)
          .subscribe(() => this.groupsQuery.refetch());
      }
    });
  }

  deleteGroup(groupId: string): void {
    this.itgService
      .deleteGroup(groupId)
      .subscribe(() => this.groupsQuery.refetch());
  }

  selectGroup(groupId: string): void {
    this.onSelectGroup.emit(groupId);
    this.selectedGroupId = groupId;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './new-group-dialog.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public name: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {}
}
