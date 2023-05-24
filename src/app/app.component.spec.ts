import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MenuButtonComponent } from 'src/app/microcomponents/menu-button/menu-button.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { MenuItemComponent } from 'src/app/microcomponents/menu-item/menu-item.component';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApolloTestingModule,
        MatIconModule,
      ],
      declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuButtonComponent,
        MenuComponent,
        MenuItemComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title'; // Set the component's title for testing
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeDefined();
    expect(typeof component.title).toBe('string');
  });

  it('should render the title in the template', () => {
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    console.log(titleElement); // Debug: Check the value of titleElement
    expect(titleElement).toBeTruthy(); // Verify that the <h1> element exists
    expect(titleElement.textContent).toContain(component.title);
  });

});
