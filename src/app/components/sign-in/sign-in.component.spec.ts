  /*import { ComponentFixture, TestBed } from '@angular/core/testing';
  import { ReactiveFormsModule } from '@angular/forms';
  import { Apollo } from 'apollo-angular';
  import { Router } from '@angular/router';
  import { UserContextService } from 'src/app/services/context/user-context.service';
  import { CookieService } from 'ngx-cookie-service';
  import { FormBuilder, Validators } from '@angular/forms';
  import { of } from 'rxjs';
  import { UserInputComponent } from 'src/app/microcomponents/user-input/user-input.component';
  import { HttpClientModule } from '@angular/common/http';
  import {SignInComponent} from "./sign-in.component"; // Import HttpClientModule

  describe('SignInComponent', () => {
    let component: SignInComponent;
    let fixture: ComponentFixture<SignInComponent>;
    let apollo: Apollo;
    let router: Router;
    let userContextService: UserContextService;
    let cookiesService: CookieService;
    let fb: FormBuilder;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [SignInComponent, UserInputComponent],
        imports: [ReactiveFormsModule, HttpClientModule], // Add HttpClientModule to imports
        providers: [
          { provide: Apollo, useValue: { use: () => ({ mutate: () => of({}) }) } },
          { provide: Router, useValue: { navigate: () => {} } },
          { provide: UserContextService, useValue: { clearTokens: () => {}, setTokens: () => {} } },
          { provide: CookieService, useClass: CookieService }, // Replace empty provider with CookieService instance
          { provide: FormBuilder, useClass: FormBuilder },
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(SignInComponent);
      component = fixture.componentInstance;
      apollo = TestBed.inject(Apollo);
      router = TestBed.inject(Router);
      userContextService = TestBed.inject(UserContextService);
      cookiesService = TestBed.inject(CookieService);
      fb = TestBed.inject(FormBuilder);

      // Create the form group using the mocked FormBuilder
      component.signInForm = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });

      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
/*
    it('should validate form', () => {
      expect(component.validateForm()).toBeTrue();
    });

    it('should submit form', () => {
      const spy = spyOn(apollo, 'use').and.callThrough();
      component.onSubmit();
      expect(spy).toHaveBeenCalled();
    });

    it('should initialize form on ngOnInit', () => {
      const formGroupSpy = spyOn(fb, 'group');
      component.ngOnInit();
      expect(formGroupSpy).toHaveBeenCalled();
    });

    it('should return true when form is valid', () => {
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['password', Validators.required],
      });
      expect(component.validateForm()).toBeTrue();
    });

    it('should return false when form is invalid', () => {
      component.signInForm = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });

      const mockResponse = {
        data: { authenticate: null },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      };

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });

      expect(component.validateForm()).toBeFalse();
    });


    it('should submit form and navigate to /tools if successful', () => {
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['password', Validators.required],
      });

      const routerSpy = spyOn(router, 'navigate');
      const userContextServiceClearTokensSpy = spyOn(userContextService, 'clearTokens');
      const userContextServiceSetTokensSpy = spyOn(userContextService, 'setTokens');
      const mockResponse = {
        data: { authenticate: { accessToken: 'token', refreshToken: 'refreshToken' } },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      };

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });
      component.onSubmit();

      expect(userContextServiceClearTokensSpy).toHaveBeenCalled();
      expect(userContextServiceSetTokensSpy).toHaveBeenCalled();
      expect(routerSpy).toHaveBeenCalledWith(['/tools']);
    });

    it('should submit form and set errorMessage if unsuccessful', () => {
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['wrongpassword', Validators.required],
      });

      const mockResponse = {
        data: { authenticate: null },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      } as any;

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });

      component.onSubmit();

      expect(component.errorMessage).toBe('El correo electrónico o la contraseña ingresados no son válidos.');
    });

    it('should set error if mutate throws an error', () => {
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['password', Validators.required],
      });

      const mockError = { message: 'error' };
      // @ts-ignore
      apollo.use = () => ({ mutate: () => { throw mockError; } });
      component.onSubmit();

      expect(component.error).toBe(mockError);
    });

    it('should clear tokens when form is successfully submitted', () => {
      const clearTokensSpy = spyOn(userContextService, 'clearTokens');
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['password', Validators.required],
      });

      const mockResponse = {
        data: { authenticate: { accessToken: 'token', refreshToken: 'refreshToken' } },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      };

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });

      component.onSubmit();

      expect(clearTokensSpy).toHaveBeenCalled();
    });

    it('should set tokens when form is successfully submitted', () => {
      const setTokensSpy = spyOn(userContextService, 'setTokens');
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['password', Validators.required],
      });

      const mockResponse = {
        data: { authenticate: { accessToken: 'token', refreshToken: 'refreshToken' } },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      };

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });

      component.onSubmit();

      expect(setTokensSpy).toHaveBeenCalled();
    });

    it('should set an error message when authentication fails', () => {
      component.signInForm = fb.group({
        email: ['test@example.com', [Validators.required, Validators.email]],
        password: ['wrongpassword', Validators.required],
      });

      const mockResponse = {
        data: { authenticate: null },
        errors: [],
        loading: false,
        context: {},
        extensions: {}
      };

      apollo.use = jasmine.createSpy().and.returnValue({
        mutate: () => of(mockResponse)
      });

      component.onSubmit();

      expect(component.errorMessage).toBe('El correo electrónico o la contraseña ingresados no son válidos.');
    });

    it('should validate email and password fields', () => {
      component.signInForm = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });

      expect(component.signInForm.controls['email'].errors?.['required']).toBeTruthy();
      expect(component.signInForm.controls['password'].errors?.['required']).toBeTruthy();

      component.signInForm.controls['email'].setValue('test');
      component.signInForm.controls['password'].setValue('password');

      expect(component.signInForm.controls['email'].errors?.['email']).toBeTruthy();
      expect(component.signInForm.controls['password'].errors).toBeFalsy();

      component.signInForm.controls['email'].setValue('test@example.com');
      component.signInForm.controls['password'].setValue('password');

      expect(component.signInForm.controls['email'].errors).toBeFalsy();
      expect(component.signInForm.controls['password'].errors).toBeFalsy();
    });


  });*/
