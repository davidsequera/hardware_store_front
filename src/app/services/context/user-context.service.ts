import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import Coookies from 'universal-cookie';
import { BehaviorSubject } from 'rxjs';
import { TokenPair } from 'src/app/graphql/domains/auth';

/**
 * Servicio que se encarga de gestionar el contexto del usuario en la aplicación
 */
@Injectable({
  providedIn: 'root' // indica que este servicio está disponible en toda la aplicación
})
export class UserContextService {

  cookieService = new Coookies(); // servicio de cookies
  private jwtSubject = new BehaviorSubject<string | null>(this.cookieService.get('accessToken'));
  jwt$ = this.jwtSubject.asObservable(); // observable que emite el token JWT actual


  brandsChecked: {[key: string]: boolean} = {}; // objeto que almacena las marcas que han sido seleccionadas en la lista de herramientas

  constructor(private router: Router, private apollo: Apollo) {}

  /**
   * Borra las cookies de acceso y refresco de la autenticación del usuario
   */
  clearTokens(): void {
    this.cookieService.remove('accessToken');
    this.cookieService.remove('refreshToken');
    this.apollo.client.resetStore();
    this.jwtSubject.next(null);
  }

  /**
   * Establece las cookies de acceso y refresco de la autenticación del usuario
   * @param tokenPair objeto que contiene el token de acceso y el token de refresco
   */
  setTokens(tokenPair: TokenPair): void {
    this.cookieService.set('accessToken', tokenPair.accessToken.value.replace("Bearer ", ""), {expires: new Date(tokenPair.accessToken.expiration)} );
    this.cookieService.set('refreshToken', tokenPair.refreshToken.value.replace("Bearer ", ""), {expires: new Date(tokenPair.refreshToken.expiration)});
    this.jwtSubject.next(tokenPair.accessToken.value.replace("Bearer ", ""));
  }



  /**
   * Cierra la sesión del usuario borrando el token JWT actual y redirigiendo a la página de inicio de sesión
  */
 logout(): void {
    this.clearTokens();
    this.router.navigate(['/login']);
  }
}
