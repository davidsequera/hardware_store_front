import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationIndicatorComponent } from './pagination-indicator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule

describe('PaginationIndicatorComponent', () => {
  let component: PaginationIndicatorComponent;
  let fixture: ComponentFixture<PaginationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationIndicatorComponent ],
      imports: [ MatIconModule, MatMenuModule ], // Include MatMenuModule here
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change page', () => {
    component.onPageChange(2);
    expect(component.page).toEqual(2);
  });
});
