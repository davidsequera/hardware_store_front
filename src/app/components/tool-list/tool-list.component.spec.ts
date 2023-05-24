import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { ToolListComponent } from './tool-list.component';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {MenuComponent} from "../menu/menu.component";
import {Router} from "@angular/router";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;
  let userContextService: UserContextService;
  let mockJwt$: BehaviorSubject<string | null>;

  beforeEach(async () => {
    mockJwt$ = new BehaviorSubject<string | null>(null);
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: UserContextService, useValue: { jwt$: mockJwt$, logout: jasmine.createSpy('logout') } },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userContextService = TestBed.inject(UserContextService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to jwt$', () => {
    const jwt = 'mockJwtToken';
    mockJwt$.next(jwt);
    expect(component.jwt).toBe(jwt);
  });

  it('should navigate to route', () => {
    const route = '/test';
    component.toPush(route);
    expect(router.navigate).toHaveBeenCalledWith([route]);
  });

  it('should logout', () => {
    component.logout();
    expect(userContextService.logout).toHaveBeenCalled();
  });

  it('should set MenuOn correctly', () => {
    component.MenuOn = true;
    expect(component.MenuOn).toBeTrue();
  });

});
