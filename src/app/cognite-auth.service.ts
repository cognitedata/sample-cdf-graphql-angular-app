import { Injectable, OnInit } from "@angular/core";
import { CogniteClient } from "@cognite/sdk";
import axios from "axios";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CogniteAuthService {
  constructor() {}

  loggedIn = new BehaviorSubject(false);

  sdk: CogniteClient = new CogniteClient({
    appId: "sample-cdf-graphql-angular-app",
  });

  getSdk() {
    return this.sdk;
  }

  async login(apikey: string) {
    const response = await axios.get(
      "https://api.cognitedata.com/login/status",
      {
        headers: {
          "api-key": apikey,
        },
      }
    );

    this.sdk.loginWithApiKey({
      apiKey: apikey,
      project: response.data.data.project,
    });

    this.loggedIn.next(true);
  }

  async logout() {
    this.sdk = new CogniteClient({
      appId: "sample-cdf-graphql-angular-app",
    });
  }
}
