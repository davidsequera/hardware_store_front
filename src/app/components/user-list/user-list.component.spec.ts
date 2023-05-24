import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { MicroLoadingComponent } from 'src/app/microcomponents/micro-loading/micro-loading.component'; // Import MicroLoadingComponent

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let apollo: Apollo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent, MicroLoadingComponent ], // Add MicroLoadingComponent here
      providers: [
        { provide: Apollo, useValue: { use: () => ({ watchQuery: () => ({ valueChanges: of({}) }) }) } },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    apollo = TestBed.inject(Apollo);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add users', () => {
    const spy = spyOn(apollo, 'use').and.callThrough();
    component.addUsers();
    expect(spy).toHaveBeenCalled();
  });
});
