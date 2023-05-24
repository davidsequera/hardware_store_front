import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular'; // Import Apollo

import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent, UserListComponent ],
      providers: [ Apollo ] // Provide Apollo
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
