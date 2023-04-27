import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationIndicatorComponent } from './pagination-indicator.component';

describe('PaginationIndicatorComponent', () => {
  let component: PaginationIndicatorComponent;
  let fixture: ComponentFixture<PaginationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set page to the specified value when onPageChange is called', () => {
    component.onPageChange(5);
    expect(component.page).toEqual(5);
  });
});
