import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CookieService} from 'ngx-cookie-service';
import {UserContextService} from './user-context.service';
import {TokenPair, TokenType} from 'src/app/graphql/domains/auth';


describe('Pruebas para UserContextService', () => {
  let service: UserContextService;
  let cookieService: CookieService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CookieService],
    });
    service = TestBed.inject(UserContextService);
    cookieService = TestBed.inject(CookieService);
  });

  it('deberia crearse', () => {
    expect(service).toBeTruthy();
  });

  it('should set and clear JWT', () => {
    const jwt = 'sample_jwt_token';
    service.jwt$.subscribe((token) => {
      expect(token).toBe(jwt);
    })
    service.jwt$.subscribe((token) => {
      expect(token).toBeNull();
    });
  });

  it('should set and clear cookies', () => {
    const tokenPair: TokenPair = {
      accessToken: { type: TokenType.ACCESS, value: 'access_token' },
      refreshToken: { type: TokenType.REFRESH, value: 'refresh_token' },
    };

    service.setTokens(tokenPair);

    expect(cookieService.get('accessToken')).toEqual(tokenPair.accessToken.value);
    expect(cookieService.get('refreshToken')).toEqual(tokenPair.refreshToken.value);

    service.clearTokens();

    expect(cookieService.get('accessToken')).toEqual('');
    expect(cookieService.get('refreshToken')).toEqual('');
  });
});

