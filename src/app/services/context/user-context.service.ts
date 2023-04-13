import { Injectable } from '@angular/core';
// import { ApolloClient } from '@apollo/client';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {
  // private client: ApolloClient<any> | undefined;
  private jwtSubject = new BehaviorSubject<string | null>(this.cookieService.get('token'));
  jwt$ = this.jwtSubject.asObservable();

  brandsChecked: {[key: string]: any} = {};



  constructor(private router: Router, private cookieService: CookieService) {
  }

  // setApolloClient(client: ApolloClient<any>): void {
  //   this.client = client;
  // }

  setJWT(jwt: string): void {
    this.cookieService.set('token', jwt);
    this.jwtSubject.next(jwt);
  }

  clearJWT(): void {
    // this.client?.resetStore();
    this.cookieService.delete('token');
    this.jwtSubject.next(null);
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.clearJWT();
    this.router.navigate(['/login']);
  }
}
