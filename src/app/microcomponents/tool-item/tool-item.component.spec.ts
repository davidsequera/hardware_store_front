import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolItemComponent } from './tool-item.component';

describe('ToolItemComponent', () => {
  let component: ToolItemComponent;
  let fixture: ComponentFixture<ToolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
