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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct font size for title', () => {
    component.title = 'This is a very long title that should return a smaller font size';
    expect(component.getTitleFontSize()).toEqual('1.2em');
  });

  it('should return correct font size for description', () => {
    component.description = 'This is a very long description that should return a smaller font size. This is a very long description that should return a smaller font size.';
    expect(component.getDescriptionFontSize()).toEqual('0.85em');
  });
});
