import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolsComponent } from './tools.component';
import { ToolListComponent } from 'src/app/components/tool-list/tool-list.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { PaginationIndicatorComponent } from 'src/app/microcomponents/pagination-indicator/pagination-indicator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // Import the MatMenuModule

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsComponent, ToolListComponent, PaginationIndicatorComponent ],
      imports: [ ApolloTestingModule, MatIconModule, MatMenuModule ], // Include the MatIconModule and MatMenuModule
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
