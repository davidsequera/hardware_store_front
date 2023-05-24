import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      imports: [ MatIconModule ], // Include MatIconModule here
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search text', () => {
    spyOn(component.searchText, 'emit');
    component.onSearchInput({ target: { value: 'test' } });
    expect(component.searchText.emit).toHaveBeenCalledWith('test');
  });
});
