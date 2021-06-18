import { Component } from "@angular/core";
import { CogniteAuthService } from "./cognite-auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isLoggedIn = false;

  constructor(cogniteAuthService: CogniteAuthService) {
    cogniteAuthService.loggedIn.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
