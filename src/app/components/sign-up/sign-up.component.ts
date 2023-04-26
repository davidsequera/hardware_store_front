import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { CredentialType, TokenPair } from 'src/app/graphql/domains/auth';
import { CREATE_CREDENTIALS } from 'src/app/graphql/graphql.auth.queries';
import { CREATE_USER } from 'src/app/graphql/graphql.users.queries';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signUpForm!: FormGroup;  // Almacena los datos del formulario
errorMessage: string | null = null; // Almacena el mensaje de error
logo: string = '../../assets/logo/512logoCir.png';  // Almacena la ruta de la imagen del logo
error: any; // Almacena el error de la consulta
email: string = '';  // Almacena el email del usuario
password: string = '';  // Almacena la contraseña del usuario
/**
 * Constructor
 * @param apollo El cliente de Apollo
 * @param router El router de Angular
 * @param userContextService El servicio de contexto de usuario
 * @param cookiesService El servicio de cookies
 * @param fb El servicio de formularios
 */
constructor(private apollo: Apollo,
            private router: Router,
            private userContextService: UserContextService,
            private cookiesService: CookieService,
            private fb: FormBuilder,
            ) {}

/**
 * Inicializa el componente
 */
ngOnInit(): void {
  this.signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    username: ['', Validators.required],
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    birthday : ['', Validators.required],
    city_birth: ['', Validators.required],
    
  });
}

/**
 * Valida el formulario
 */
  validateForm(): boolean {
    return true;
    // return this.signUpForm.valid;
  }

/**
 * Envia el formulario
 */
  onSubmit(): void {
    const credential: CredentialType = { // Crea el objeto de credenciales
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    }

    this.apollo.mutate({ // Realiza la consulta de autenticación
      mutation: CREATE_CREDENTIALS,
      variables: { credential }
    })
    .subscribe({ // Suscribe a los resultados de la consulta
      next: ({ data }: any ) => { // Si la consulta es exitosa
        console.log('Match', data);
        const tokenPair: TokenPair = data.createAccount;
        if(tokenPair){ // Si el token es válido
          this.apollo.client.resetStore();
          this.userContextService.clearTokens();
          this.userContextService.setTokens(tokenPair);
          this.router.navigate(['/tools']);
        } else { // Si el token no es válido
          this.errorMessage = 'El correo electrónico o la contraseña ingresados no son válidos.';
        }
      },
      error: (error) => { // Si la consulta falla
        console.log('There was an error sending the query', error);
        this.error = error;
      }
    })
  }
}
