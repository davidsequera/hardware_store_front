import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { AUTHENTICATE } from 'src/app/graphql/graphql.auth.queries';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  errorMessage: string | null = null;
  logo: string = '../../assets/logo/512logoCir.png';
  //TODO: Change this to false
  error: any;
  email: string = '';
  password: string = '';
  
  constructor(private apollo: Apollo, 
              private router: Router, 
              private userContextService: UserContextService,
              private cookiesService: CookieService,
              private fb: FormBuilder,
              ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  validateForm(): boolean {
    return true;
    // return this.signInForm.valid;
  }

  onSubmit(): void {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;  

    this.apollo.mutate({
      mutation: AUTHENTICATE,
      variables: { credential: { email, password } }
    }).subscribe({
      next: ({ data }: any) => {
        console.log('Match', data);
        if(data.authenticate.type === 'REFRESH'){
          this.apollo.client.resetStore();
          const token: string = data.authenticate.value;
          this.cookiesService.delete('token');
          this.cookiesService.set('token', token);
          this.userContextService.setJWT(this.cookiesService.get('token'));
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'El correo electrónico o la contraseña ingresados no son válidos.';
        }
      },
      error: (error) => {
        console.log('There was an error sending the query', error);
        this.error = error;
      }
    })
  }



/// TEMPORAL


  // todos: any[] = [];
  // error: any;

  // todoForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   description: new FormControl('', Validators.required)
  // });

  // addTodo() {
  //   // apollo graphql query to add todo
  //   this.apollo.mutate({
  //     mutation: ADD_TODO,
  //     variables: {
  //       name: this.todoForm.value.name,
  //       description: this.todoForm.value.description,
  //     },
  //     refetchQueries: [{
  //       query: GET_TODOS
  //     }]
  //   }).subscribe(({data}: any) => {
  //     this.todos = data.addTodo;
  //     this.todoForm.reset();
  //   }
  //   , (error) => {
  //     this.error = error;
  //   }
  //   );

  // }

  // deleteTodo(id: string) {
  //   // apollo graphql query to delete todo
  //   this.apollo.mutate({
  //     mutation: DELETE_TODO,
  //     variables: {
  //       id: id,
  //     },
  //     refetchQueries: [{
  //       query: GET_TODOS
  //     }]
  //   }).subscribe(({data}: any) => {
  //     this.todos = data.deleteTodo;
  //   }
  //   , (error) => {
  //     this.error = error;
  //   }
  //   );
  // }


  // ngOnInit(): void {
  //   this.apollo.watchQuery({
  //     query: GET_TODOS
  //   }).valueChanges.subscribe(({ data, error }: any) => {
  //     this.todos = data.todos;
  //     this.error = error;
  // }
  // );
  // }





}

