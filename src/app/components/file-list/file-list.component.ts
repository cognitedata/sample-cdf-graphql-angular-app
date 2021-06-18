import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"],
})
export class FileListComponent implements OnInit {
  favourites: { fileId: string }[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<{ MyFavorite: { fileId: string }[] }>({
        query: gql`
          {
            MyFavorite {
              fileId
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        this.loading = result.loading;
        this.error = result.error;
        this.favourites = result.data.MyFavorite;
      });
  }
}
