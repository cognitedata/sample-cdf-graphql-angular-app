import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { CogniteITGService } from 'src/app/itg-api.service';

@Component({
  selector: 'app-itg-group-details',
  templateUrl: './itg-group-details.component.html',
  styleUrls: ['./itg-group-details.component.css'],
})
export class ItgGroupDetailsComponent implements OnInit {
  @Input() groupId: string;
  @Output() onBackClicked = new EventEmitter<boolean>();
  @Output() onNodeClicked = new EventEmitter<number>();
  @Output() onHighlightGroup = new EventEmitter<boolean>();

  groupQuery: QueryRef<any>;
  group: any;

  constructor(private itgService: CogniteITGService) {}

  ngOnInit(): void {
    this.groupQuery = this.itgService.getGroup(this.groupId, 3000);

    this.groupQuery.valueChanges.subscribe(
      (res) => (this.group = res.data.MyGroup[0])
    );
  }

  goBack(): void {
    this.onBackClicked.emit(true);
  }

  selectNode(nodeId: string): void {
    this.onNodeClicked.emit(Number(nodeId));
  }
}
