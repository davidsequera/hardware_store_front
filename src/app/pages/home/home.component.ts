import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_MANUFACTURERS } from 'src/app/graphql/graphql.tools.queries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  manufacturers: any[] | undefined;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getManufacturers();
  }

  getManufacturers() {
    this.apollo
      .watchQuery({
        query: GET_ALL_MANUFACTURERS,
      })
      .valueChanges.subscribe({
      next: ({ data }: any) => {
        this.manufacturers = data?.getAllManufacturers;
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
