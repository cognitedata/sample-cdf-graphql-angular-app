import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { CogniteModelsListComponent } from './components/cognite-models-list/cognite-models-list.component';
import { CogniteModelRevisionsListComponent } from './components/cognite-model-revisions-list/cognite-model-revisions-list.component';
import { ThreedPageComponent } from './page/threed-page/threed-page.component';
import { LoginComponent } from './page/login-page/login.component';
import { CogniteThreedViewerComponent } from './components/cognite-threed-viewer/cognite-threed-viewer.component';
import {
  ItgGroupsListComponent,
  DialogOverviewExampleDialog,
} from './components/itg-groups-list/itg-groups-list.component';
import { ItgGroupDetailsComponent } from './components/itg-group-details/itg-group-details.component';
import { CogniteThreedNodeDetailsComponent } from './components/cognite-threed-node-details/cognite-threed-node-details.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ThreedPageComponent }]),
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    GraphQLModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    FileListComponent,
    CogniteModelsListComponent,
    CogniteModelRevisionsListComponent,
    ThreedPageComponent,
    CogniteThreedViewerComponent,
    ItgGroupsListComponent,
    DialogOverviewExampleDialog,
    ItgGroupDetailsComponent,
    CogniteThreedNodeDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
