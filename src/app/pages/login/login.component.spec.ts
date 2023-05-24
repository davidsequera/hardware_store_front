import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { LoginComponent } from './login.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { UserInputComponent } from 'src/app/microcomponents/user-input/user-input.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, SignInComponent, UserInputComponent ],
      imports: [ ReactiveFormsModule ], // Include ReactiveFormsModule
      providers: [ Apollo ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
