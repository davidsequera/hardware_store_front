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

    fixture = TestBed.createComponent(PaginationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
