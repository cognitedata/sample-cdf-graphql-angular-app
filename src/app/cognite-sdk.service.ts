import { Injectable } from "@angular/core";
import { CogniteClient } from "@cognite/sdk/dist/src";
import axios from "axios";
import { request } from "http";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  sdk: CogniteClient | undefined;
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
      project: response.data.project,
    });
  }
}
