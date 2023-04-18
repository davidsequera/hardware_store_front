import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedElementComponent } from './curved-element.component';

describe('CurvedElementComponent', () => {
  let component: CurvedElementComponent;
  let fixture: ComponentFixture<CurvedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurvedElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurvedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
