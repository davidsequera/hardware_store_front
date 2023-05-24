import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolFilterComponent } from './tool-filter.component';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { MatIconModule } from '@angular/material/icon';

import { of } from 'rxjs';

describe('ToolFilterComponent', () => {
  let component: ToolFilterComponent;
  let fixture: ComponentFixture<ToolFilterComponent>;
  let userContextService: UserContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule], // Add MatIconModule here
      declarations: [ToolFilterComponent],
      providers: [
        { provide: UserContextService, useValue: { brandsChecked: {} } },
      ]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFilterComponent);
    component = fixture.componentInstance;
    userContextService = TestBed.inject(UserContextService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle filter', () => {
    component.toogleFilter();
    expect(component.filterOn).toBeTrue();
  });
});
