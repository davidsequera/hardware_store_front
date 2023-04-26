import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_USERS } from 'src/app/graphql/graphql.users.queries';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{
    users?: any[];
    brands?: any[];
    loading = true;
    error: any;

    constructor(private apollo: Apollo){

    }
    ngOnInit(): void {
        this.addUsers()
    }

    addUsers(){
        this.apollo.use('users').watchQuery({
            query: GET_ALL_USERS
        }).valueChanges
        .subscribe({
            next: ({ data }: any ) => { // Si la consulta es exitosa
                console.log(data);
                this.users = data?.getAllUsers;
                this.loading = data.loading;
                this.error = data.error;
              },
              error: (error) => { // Si la consulta falla
                console.error('There was an error sending the query', error);
                this.loading = false;
                this.error = error;
              }
        })
    }
}
