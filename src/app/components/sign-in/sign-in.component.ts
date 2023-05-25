import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { AUTHENTICATE } from 'src/app/graphql/graphql.auth.queries';
import { CredentialType, TokenPair } from 'src/app/graphql/domains/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;  // Almacena los datos del formulario
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
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * Valida el formulario
   */
  validateForm(): boolean {
    return this.signInForm.valid;
  }

  /**
   * Envia el formulario
   */
  onSubmit(): void {
    const credential: CredentialType = { // Crea el objeto de credenciales
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }

    this.apollo.use('auth').mutate({ // Realiza la consulta de autenticación
      mutation: AUTHENTICATE,
      variables: { credential },
    })
    .subscribe({ // Suscribe a los resultados de la consulta
      next: ({ data }: any ) => { // Si la consulta es exitosa
        console.log('Match', data);
        const TokenPair: TokenPair = data.authenticate;
        if(TokenPair){ // Si el token es válido
          this.userContextService.clearTokens();
          this.userContextService.setTokens(TokenPair);
          this.router.navigate(['/tools']);
        } else { // Si el token no es válido
          this.errorMessage = 'El correo electrónico o la contraseña ingresados no son válidos.';
        }
      },
      error: (error) => { // Si la consulta falla
        console.error('There was an error sending the query', error);
        this.error = error;
      }
    })
  }

}

