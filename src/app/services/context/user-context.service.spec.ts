import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { TokenPair, TokenType } from 'src/app/graphql/domains/auth';
import { UserContextService } from './user-context.service';
import { Apollo } from 'apollo-angular';
import Cookies from 'universal-cookie';

describe('UserContextService', () => {
  let service: UserContextService;
  let cookieService: Cookies;
  let router: Router;
  let apollo: Apollo;

  beforeEach(() => {
    const apolloSpy = jasmine.createSpyObj('Apollo', ['client']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        UserContextService,
        { provide: Router, useValue: routerSpy },
        { provide: Apollo, useValue: apolloSpy }
      ],
    });

    service = TestBed.inject(UserContextService);
    cookieService = TestBed.inject(Cookies);
    router = TestBed.inject(Router);
    apollo = TestBed.inject(Apollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and clear JWT', () => {
    const jwt = 'sample_jwt_token';
    service.setTokens({accessToken: {type: TokenType.ACCESS, value: jwt, expiration: new Date().getTime()}, refreshToken: {type: TokenType.REFRESH, value: 'refresh_token', expiration: new Date().getTime()}});
    service.jwt$.subscribe((token) => {
      expect(token).toBe(jwt);
    });
    service.clearTokens();
    service.jwt$.subscribe((token) => {
      expect(token).toBeNull();
    });
  });

  it('should set and clear cookies', () => {
    const tokenPair: TokenPair = {
      accessToken: { type: TokenType.ACCESS, value: 'access_token', expiration: new Date().getTime() },
      refreshToken: { type: TokenType.REFRESH, value: 'refresh_token', expiration: new Date().getTime() },
    };

    service.setTokens(tokenPair);

    expect(cookieService.get('accessToken')).toEqual(tokenPair.accessToken.value);
    expect(cookieService.get('refreshToken')).toEqual(tokenPair.refreshToken.value);

    service.clearTokens();

    expect(cookieService.get('accessToken')).toEqual('');
    expect(cookieService.get('refreshToken')).toEqual('');
  });

  it('should clear tokens and navigate to login on logout', () => {
    service.logout();
    expect(apollo.client.resetStore).toHaveBeenCalled();
    expect(cookieService.get('accessToken')).toEqual('');
    expect(cookieService.get('refreshToken')).toEqual('');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
