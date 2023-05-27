import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_ALL_TOOLS, GET_TOOL_BY_FILTER, GET_TOOL_BY_NAME } from 'src/app/graphql/graphql.tools.queries';
import { UserContextService } from 'src/app/services/context/user-context.service';
import { FilterInput, ToolPage, ToolPageInput } from 'src/app/graphql/domains/tools';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit, OnDestroy {
  toolPageInput: ToolPageInput ={
    page: 0,
    size: 10
  }

  toolPage?: ToolPage
  search = '';

  brands?: any[];
  loading = true;
  filterOn = false;
  error: any;
  querySubscriptions: Subscription[] = [];

  constructor(private apollo: Apollo, private userContext: UserContextService) {}

  ngOnInit(): void {
    this.getTools();
  }

  ngOnDestroy(): void {
    this.cancelPendingRequests();
  }

  openFilter() {
    this.filterOn = !this.filterOn;
  }

  getTools() {

    this.loading = true;
    this.cancelPendingRequests();

    const variables = {
      toolPageInput: this.toolPageInput,
      filters: this.getFilters()      
    };

    this.querySubscriptions.push(
      this.apollo
      .use('tools')
      .watchQuery({
        query: GET_TOOL_BY_FILTER,
        variables
      })
      .valueChanges.subscribe({
      next: ({ data, loading }: any) => {
        this.toolPage = data?.getToolsByFilter;
        this.brands = data?.getBrands;
        this.loading = loading;
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error sending the query', error);
        this.loading = false;
        this.error = error;
      }
    })
    
    )

    
  }

  // isToolfromBrand(tool: any): boolean {
  //   if (Object.values(this.userContext.brandsChecked).includes(true)) {
  //     return this.userContext.brandsChecked[tool.brand.id];
  //   }
  //   return true;
  // }

  cancelPendingRequests() {
    this.querySubscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSeachbarChange(name: string) {
    this.search = name;
    this.toolPageInput.page = 0;
    this.getTools();
  }

  onPageChange(page: number) {
    this.toolPageInput.page = page;
    this.getTools();
  }

  onFilterChange() {
    this.toolPageInput.page = 0;
    this.getTools();
  }

  getFilters(): FilterInput[]{
    const filters: FilterInput[] = [];

    if(this.search !== ''){
      filters.push({
        "field": "name",
        "values": [this.search]
      })
    }
    if (Object.values(this.userContext.brandsChecked).includes(true)) {
      const brand_ids = Object.keys(this.userContext.brandsChecked).filter((key) => this.userContext.brandsChecked[key]);
      if(brand_ids.length > 0){
        filters.push({
          "field": "brand_id",
          "values": brand_ids
        })
      }
    }
    return filters;
  }

  
}
