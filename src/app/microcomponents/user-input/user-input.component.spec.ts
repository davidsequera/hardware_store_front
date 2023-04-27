import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UserInputComponent } from './user-input.component';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [UserInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = new FormGroup({
      [component.name]: new FormControl(),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update form value on input change', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.parentFormGroup.get(component.name)?.value).toBe('test');
  });
});
