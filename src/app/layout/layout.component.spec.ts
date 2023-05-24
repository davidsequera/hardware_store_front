import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MenuButtonComponent } from 'src/app/microcomponents/menu-button/menu-button.component'; // Import MenuButtonComponent
import { MenuComponent } from 'src/app/components/menu/menu.component'; // Import MenuComponent
import { Apollo } from 'apollo-angular';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuButtonComponent, MenuComponent], // Include MenuButtonComponent and MenuComponent here
      providers: [Apollo], // Include Apollo provider here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
