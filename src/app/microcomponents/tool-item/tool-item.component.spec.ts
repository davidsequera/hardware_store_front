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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolItemComponent);
    component = fixture.componentInstance;
    component.name = 'Hammer';
    component.description = 'A tool used for driving nails into wood or other materials';
    component.brand = 'Stanley';
    component.cities = ['New York', 'Los Angeles'];
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tool information', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.tool-name').textContent).toContain('Hammer');
    expect(compiled.querySelector('.tool-description').textContent).toContain('A tool used for driving nails into wood or other materials');
    expect(compiled.querySelector('.tool-brand').textContent).toContain('Stanley');
    expect(compiled.querySelector('.tool-cities').textContent).toContain('New York, Los Angeles');
  });
});
