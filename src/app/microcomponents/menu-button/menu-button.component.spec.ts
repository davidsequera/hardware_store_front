import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuButtonComponent } from './menu-button.component';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { MenuItemComponent } from 'src/app/microcomponents/menu-item/menu-item.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { of } from 'rxjs';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;
  let userContextService: UserContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuButtonComponent, MenuComponent, MenuItemComponent],
      imports: [MatIconModule], // Include MatIconModule here
      providers: [
        { provide: UserContextService, useValue: { jwt$: of(''), logout: () => {} } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    userContextService = TestBed.inject(UserContextService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    component.MenuOn = false;

    component.toggleMenu();

    expect(component.MenuOn).toBe(true);

    component.toggleMenu();

    expect(component.MenuOn).toBe(false);
  });

  it('should update isMinWidth768px on window resize', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(800);

    window.dispatchEvent(new Event('resize'));

    expect(component.isMinWidth768px).toBe(true);

    spyOnProperty(window, 'innerWidth').and.returnValue(500);

    window.dispatchEvent(new Event('resize'));

    expect(component.isMinWidth768px).toBe(false);
  });


});
