import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CogniteITGService } from 'src/app/itg-api.service';

@Component({
  selector: 'app-threed-page',
  templateUrl: './threed-page.component.html',
  styleUrls: ['./threed-page.component.css'],
})
export class ThreedPageComponent implements OnInit {
  @Input() activeRevision: { modelId: number; revisionId: number } | undefined;
  @Input() activeNodeId: number | undefined;
  @Input() activeGroupId: string | undefined;
  @Input() isGroupHightlighted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { queryParams } = this.router.parseUrl(this.router.url);
    if (queryParams.modelId && queryParams.revisionId) {
      this.activeRevision = {
        modelId: Number(queryParams.modelId),
        revisionId: Number(queryParams.revisionId),
      };
    }
    this.route.queryParamMap.pipe(
      map((params: ParamMap) => {
        if (params.get('revisionId')) {
          this.activeRevision = {
            revisionId: Number(params.get('revisionId')),
            modelId: Number(params.get('modelId')),
          };
        }
      })
    );
  }

  setActiveRevision(
    newRevision: { modelId: number; revisionId: number } | undefined
  ) {
    this.activeRevision = newRevision;
    this.router.navigate([], {
      queryParams: newRevision,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
    this.activeGroupId = undefined;
    this.activeNodeId = undefined;
  }

  setActiveGroup(newGroupId: string) {
    this.activeGroupId = newGroupId;
  }

  setActiveNode(nodeId: number | undefined) {
    this.activeNodeId = nodeId;
  }

  toggleShowVisibleNodes() {
    this.isGroupHightlighted = !this.isGroupHightlighted;
  }
}
