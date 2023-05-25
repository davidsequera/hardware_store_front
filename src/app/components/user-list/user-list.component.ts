import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_USERS, UPDATE_USER, DELETE_USER, CREATE_USER } from 'src/app/graphql/graphql.users.queries';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: any[];
  brands?: any[];
  loading = true;
  error: any;

  showCreateForm = false; // Flag to control the visibility of the create form
  newUser: any = {}; // Object to store the data of the new user

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.addUsers();
  }

  addUsers() {
    this.apollo
      .use('users')
      .watchQuery({
        query: GET_ALL_USERS
      })
      .valueChanges.subscribe({
      next: ({ data }: any) => {
        console.log(data);
        this.users = data?.getAllUsers;
        this.loading = data.loading;
        this.error = data.error;
      },
      error: (error) => {
        console.error('There was an error sending the query', error);
        this.loading = false;
        this.error = error;
      }
    });
  }

  updateUser(userInput: any) {
    this.apollo
      .use('users')
      .mutate({
        mutation: UPDATE_USER,
        variables: { userInput }
      })
      .subscribe({
        next: (result) => {
          console.log(result);
          // Handle success
        },
        error: (error) => {
          console.error('There was an error updating the user', error);
          // Handle error
        }
      });
  }

  deleteUser(userId: string) {
    this.apollo
      .use('users')
      .mutate({
        mutation: DELETE_USER,
        variables: { id: userId }
      })
      .subscribe({
        next: (result) => {
          console.log(result);
          // Handle success
        },
        error: (error) => {
          console.error('There was an error deleting the user', error);
          // Handle error
        }
      });
  }

  createUser(userInput: any) {
    this.apollo
      .use('users')
      .mutate({
        mutation: CREATE_USER,
        variables: { userInput }
      })
      .subscribe({
        next: (result) => {
          console.log(result);
          // Handle success
          this.showCreateForm = false; // Close the create form after successful creation
          this.newUser = {}; // Reset the new user object
        },
        error: (error) => {
          console.error('There was an error creating the user', error);
          // Handle error
        }
      });
  }

  cancelCreateForm() {
    this.showCreateForm = false; // Close the create form
    this.newUser = {}; // Reset the new user object
  }
}
