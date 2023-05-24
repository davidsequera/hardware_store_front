import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MenuButtonComponent } from 'src/app/microcomponents/menu-button/menu-button.component';
import { ApolloTestingModule } from 'apollo-angular/testing'; // Import ApolloTestingModule
import { MenuComponent } from 'src/app/components/menu/menu.component'; // Import the MenuComponent
import { MenuItemComponent } from 'src/app/microcomponents/menu-item/menu-item.component'; // Import the MenuItemComponent
import { MatIconModule } from '@angular/material/icon'; // Import the MatIconModule

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule, // Add ApolloTestingModule to the imports
        MatIconModule, // Add the MatIconModule to the imports
      ],
      declarations: [
        HeaderComponent,
        MenuButtonComponent,
        MenuComponent, // Add the MenuComponent to the declarations
        MenuItemComponent, // Add the MenuItemComponent to the declarations
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
