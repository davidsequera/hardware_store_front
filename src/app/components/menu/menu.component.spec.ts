import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from 'src/app/microcomponents/menu-item/menu-item.component';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';
import { Apollo } from 'apollo-angular';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;
  let userContextService: UserContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent, MenuItemComponent], // Add MenuItemComponent here
      imports: [MatIconModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
        {
          provide: UserContextService,
          useValue: {
            jwt$: of('jwt_token'),
            logout: jasmine.createSpy('logout'),
          },
        },
        // Add the Apollo provider
        {
          provide: Apollo,
          useValue: {}, // You can use an empty object or a mock/stub for Apollo
        },
      ],
    }).compileComponents();
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

  it('should navigate to route', () => {
    component.toPush('/route');
    expect(router.navigate).toHaveBeenCalledWith(['/route']);
  });

  it('should logout', () => {
    component.logout();
    expect(userContextService.logout).toHaveBeenCalled();
  });

  it('should update jwt on ngOnInit', () => {
    component.ngOnInit();
    expect(component.jwt).toEqual('jwt_token');
  });

  it('should handle MenuOn input', () => {
    component.MenuOn = true;
    expect(component.MenuOn).toEqual(true);
  });
});

