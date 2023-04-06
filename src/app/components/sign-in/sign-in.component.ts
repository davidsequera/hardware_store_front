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
  signInForm: FormGroup;
  errorMessage: string | null = null;
  logo: string = '../../assets/logo/512logoCir.png';
  //TODO: Change this to false
  error: boolean = false;
  email: string = '';
  password: string = '';
  
  constructor(private apollo: Apollo, 
              private router: Router, 
              private userContextService: UserContextService,
              private cookiesService: CookieService,
              private fb: FormBuilder) {
                this.signInForm = this.fb.group({})
              }

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
      variables: { type: { email, password } }
    })
    .pipe(
      catchError((err) => {
        console.log('Not match', err);
        this.errorMessage = 'El correo electrónico o la contraseña ingresados no son válidos.';
        return throwError(err);
      })
    )
    .subscribe(({data}: any) => {
      if(data.signIn.auth){
        this.apollo.client.resetStore();
        const token = data.signIn.body;
        this.cookiesService.delete('token');
        this.cookiesService.set('token', token);
        this.userContextService.setJWT(this.cookiesService.get('token'));
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'El correo electrónico o la contraseña ingresados no son válidos.';
      }
    });
  }
}
