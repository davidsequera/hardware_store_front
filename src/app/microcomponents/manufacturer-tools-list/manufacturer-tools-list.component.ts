import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TOOLS_BY_MANUFACTURER } from 'src/app/graphql/graphql.tools.queries';

@Component({
  selector: 'app-manufacturer-tools-list',
  templateUrl: './manufacturer-tools-list.component.html',
  styleUrls: ['./manufacturer-tools-list.component.css']
})
export class ManufacturerToolsListComponent implements OnInit {
  @Input() manufacturer: any;
  tools: any[] | undefined;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getToolsByManufacturer();
  }

  getToolsByManufacturer() {
    this.apollo
      .watchQuery({
        query: GET_TOOLS_BY_MANUFACTURER,
        variables: {
          manufacturerId: this.manufacturer.id,
        },
      })
      .valueChanges.subscribe({
      next: ({ data }: any) => {
        this.tools = data?.getToolsByManufacturer;
        this.loading = data.loading;
        this.error = data.error;
      },
      error: (error) => {
        console.error('There was an error sending the query', error);
        this.loading = false;
        this.error = error;
      },
    });
  }
}
