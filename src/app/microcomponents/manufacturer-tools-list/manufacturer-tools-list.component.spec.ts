/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { ManufacturerToolsListComponent } from './manufacturer-tools-list.component';
import { GET_TOOLS_BY_MANUFACTURER } from 'src/app/graphql/graphql.tools.queries';
import { ToolItemComponent } from '../tool-item/tool-item.component'; // Import ToolItemComponent

describe('ManufacturerToolsListComponent', () => {
  let component: ManufacturerToolsListComponent;
  let fixture: ComponentFixture<ManufacturerToolsListComponent>;
  let mockApollo: any;

  const mockManufacturer = { id: '1' };
  const mockTools = [{ id: '1', name: 'Tool 1' }, { id: '2', name: 'Tool 2' }];

  beforeEach(async () => {
    mockApollo = {
      watchQuery: () => ({
        valueChanges: of({
          data: {
            getToolsByManufacturer: mockTools,
          },
          loading: false,
          error: null
        })
      })
    };

    await TestBed.configureTestingModule({
      declarations: [ ManufacturerToolsListComponent, ToolItemComponent ],
      providers: [
        { provide: Apollo, useValue: mockApollo }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturerToolsListComponent);
    component = fixture.componentInstance;
    component.manufacturer = mockManufacturer;
    fixture.detectChanges();
  });

  it('should handle missing data', () => {
    mockApollo.watchQuery = () => ({
      valueChanges: of({ data: null, loading: true, error: null })
    });
    component.ngOnInit();
    expect(component.tools).toBeUndefined();
    expect(component.loading).toEqual(true);
    expect(component.error).toBeNull();
  });

  it('should handle error in subscription', () => {
    const mockError = { message: 'Subscription error' };
    mockApollo.watchQuery = () => ({
      valueChanges: {
        subscribe: ({ error }: { error: Function }) => {
          error(mockError);
        }
      }
    });
    component.ngOnInit();
    expect(component.loading).toEqual(false);
    expect(component.error).toEqual(mockError);
  });
});
*/
