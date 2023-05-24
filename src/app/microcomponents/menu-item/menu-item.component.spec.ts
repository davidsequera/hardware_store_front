import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { MenuItemComponent } from './menu-item.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let router: Router;
  let userContextService: UserContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemComponent],
      providers: [
        { provide: Router, useValue: { navigate: () => {} } },
        { provide: UserContextService, useValue: { logout: () => {} } },
      ],
      imports: [RouterTestingModule, MatIconModule], // Include RouterTestingModule and MatIconModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userContextService = TestBed.inject(UserContextService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to route', () => {
    const spy = spyOn(router, 'navigate').and.callThrough();
    component.toPush('/route');
    expect(spy).toHaveBeenCalled();
  });

  it('should logout', () => {
    const spy = spyOn(userContextService, 'logout').and.callThrough();
    component.logout();
    expect(spy).toHaveBeenCalled();
  });
});
