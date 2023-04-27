import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit search text when onSearchInput is called', () => {
    spyOn(component.searchText, 'emit');
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchText.emit).toHaveBeenCalledWith('test');
  });
});
