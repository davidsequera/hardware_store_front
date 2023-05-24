/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { HomeComponent } from './home.component';

// Mock Apollo Service
class MockApollo {
  watchQuery = () => {
    return {
      valueChanges: of({
        data: {
          getAllManufacturers: ['Manufacturer 1', 'Manufacturer 2']
        },
        loading: false,
        error: null
      })
    }
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apolloService: Apollo;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: Apollo, useClass: MockApollo }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    apolloService = TestBed.inject(Apollo);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getManufacturers on init', () => {
    spyOn(component, 'getManufacturers');
    component.ngOnInit();
    expect(component.getManufacturers).toHaveBeenCalled();
  });

  it('should set manufacturers after getManufacturers', () => {
    component.ngOnInit();
    expect(component.manufacturers).toEqual(['Manufacturer 1', 'Manufacturer 2']);
    expect(component.loading).toBeFalse();
    expect(component.error).toBeNull();
  });
/*
  it('should handle error in getManufacturers', () => {
    /*spyOn(apolloService, 'watchQuery').and.returnValue({
      valueChanges: throwError('Error')
    });
    component.ngOnInit();
    expect(component.loading).toBeFalse();
    expect(component.error).toBeTruthy();
  });

  it('should initialize the component', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should set manufacturers, loading to false, and error to null after successful data retrieval', () => {
    component.ngOnInit();
    expect(component.manufacturers).toEqual(['Manufacturer 1', 'Manufacturer 2']);
    expect(component.loading).toBeFalse();
    expect(component.error).toBeNull();
  });



});

 */


