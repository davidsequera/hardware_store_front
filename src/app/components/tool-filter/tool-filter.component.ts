import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-filter',
  templateUrl: './tool-filter.component.html',
  styleUrls: ['./tool-filter.component.css']
})
export class ToolFilterComponent implements OnInit {
  @Input() brands?: any[];
  // TODO: MAKE THING RIGTH
  // @Output() brandsChecked: {[key: string]: any} = {};
  userContext: UserContextService;

  constructor(userContext: UserContextService) { 
    this.userContext = userContext;
  }

  ngOnInit(): void {

    this.brands?.forEach(brand => {
      this.userContext.brandsChecked[brand.id] = false;
    })
  }
  checked = false;
}
