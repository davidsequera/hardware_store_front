import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-filter',
  templateUrl: './tool-filter.component.html',
  styleUrls: ['./tool-filter.component.css']
})
export class ToolFilterComponent implements OnInit {
  @Input() brands?: any[];
  @Input() filterOn: boolean = false;
  // TODO: MAKE THING RIGTH
  // @Output() brandsChecked: {[key: string]: any} = {};

  @Output() filterChange = new EventEmitter<void>();

  userContext: UserContextService;

  constructor(userContext: UserContextService) { 
    this.userContext = userContext;
  }

  onFilterChange() {
    this.filterChange.emit();
  }

  toogleFilter() {
    this.filterOn = !this.filterOn;
  }

  ngOnInit(): void {

    this.brands?.forEach(brand => {
      this.userContext.brandsChecked[brand.id] = false;
    })
  }
  checked = false;
}
