import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemComponent } from './user-item.component';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    component.id = '1';
    component.name = 'John';
    component.last_name = 'Doe';
    component.username = 'jdoe';
    component.birthday = '2000-01-01';
    component.city_birth = 'New York';
    component.credentials = ['admin', 'user'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user information', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.user-name').textContent).toContain('John');
    expect(compiled.querySelector('.user-last-name').textContent).toContain('Doe');
    expect(compiled.querySelector('.user-username').textContent).toContain('jdoe');
    expect(compiled.querySelector('.user-birthday').textContent).toContain('2000-01-01');
    expect(compiled.querySelector('.user-city-birth').textContent).toContain('New York');
    expect(compiled.querySelector('.user-credentials').textContent).toContain('admin, user');
  });
});
