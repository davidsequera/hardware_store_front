/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { CREATE_CREDENTIALS } from 'src/app/graphql/graphql.auth.queries';
import { SignUpComponent } from './sign-up.component';
import { UserInputComponent } from 'src/app/microcomponents/user-input/user-input.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let apollo: Apollo;
  let router: Router;
  let userContextService: UserContextService;
  let fb: FormBuilder;
/*
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [SignUpComponent, UserInputComponent], // Add SignUpComponent and UserInputComponent to declarations
      providers: [
        // providers configuration
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    apollo = TestBed.inject(Apollo);
    router = TestBed.inject(Router);
    userContextService = TestBed.inject(UserContextService);
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form', () => {
    expect(component.validateForm()).toBeTrue();
  });

  it('should submit form', () => {
    component.onSubmit();
    expect(apollo.mutate).toHaveBeenCalledWith({
      mutation: CREATE_CREDENTIALS,
      variables: { credential: { email: 'test@test.com', password: 'test_password' } }
    });
    expect(apollo.client.resetStore).toHaveBeenCalled();
    expect(userContextService.clearTokens).toHaveBeenCalled();
    //expect(userContextService.setTokens).toHaveBeenCalledWith({ accessToken: 'test_token', refreshToken: 'test_refresh_token' });
    expect(router.navigate).toHaveBeenCalledWith(['/tools']);
  });

  it('should set error message when submit fails', () => {
    (apollo.mutate as jasmine.Spy).and.returnValue(of({}));
    component.onSubmit();
    expect(component.errorMessage).toBe('El correo electrónico o la contraseña ingresados no son válidos.');
  });

  it('should set error when there is an error in mutation', () => {
    const testError = new Error('Test error');
    (apollo.mutate as jasmine.Spy).and.returnValue(of({ error: testError }));
    component.onSubmit();
    expect(component.error).toBe(testError);
  });


});*/
