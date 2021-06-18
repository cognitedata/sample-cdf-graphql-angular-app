import { Injectable } from '@angular/core';
import { ListResponse, Model3D, RevealNode3D, Revision3D } from '@cognite/sdk';
import { from, Observable } from 'rxjs';
import { CogniteAuthService } from './cognite-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CogniteApiService {
  constructor(private cogniteAuthService: CogniteAuthService) {}

  get3DModels(): Observable<Model3D[]> {
    return from(
      this.cogniteAuthService
        .getSdk()
        .models3D.list({ limit: 1000 })
        .autoPagingToArray()
    );
  }

  get3DModelRevisions(modelId: number): Observable<Revision3D[]> {
    return from(
      this.cogniteAuthService
        .getSdk()
        .revisions3D.list(modelId, { limit: 1000 })
        .autoPagingToArray()
    );
  }

  get3DModelNode(
    modelId: number,
    revisionId: number,
    nodeId: number
  ): Observable<RevealNode3D[]> {
    return from(
      this.cogniteAuthService
        .getSdk()
        .viewer3D.listRevealNodes3D(modelId, revisionId, { nodeId, limit: 1 })
        .autoPagingToArray()
    );
  }
}
