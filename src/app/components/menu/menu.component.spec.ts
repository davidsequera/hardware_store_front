import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let userContextService: jasmine.SpyObj<UserContextService>;

  beforeEach(async () => {
    userContextService = jasmine.createSpyObj('UserContextService', ['logout']);
    userContextService.jwt$ = of('test-jwt');

    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: UserContextService, useValue: userContextService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set jwt correctly', () => {
    expect(component.jwt).toEqual('test-jwt');
  });

  it('should navigate to route when toPush is called', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.toPush('test-route');
    expect(navigateSpy).toHaveBeenCalledWith(['test-route']);
  });

  it('should call logout when logout is called', () => {
    component.logout();
    expect(userContextService.logout).toHaveBeenCalled();
  });
});
