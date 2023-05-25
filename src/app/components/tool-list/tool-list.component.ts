import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_ALL_TOOLS, GET_TOOL_BY_NAME } from 'src/app/graphql/graphql.tools.queries';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit, OnDestroy {
  tools?: any[];
  brands?: any[];
  loading = true;
  search = '';
  filterOn = false;
  error: any;
  searchRequestSubscriptions: Subscription[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 20;

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
    const variables = {
      page: this.currentPage,
      size: this.pageSize
    };

    this.apollo
      .use('tools')
      .watchQuery({
        query: GET_ALL_TOOLS,
        variables
      })
      .valueChanges.subscribe({
      next: ({ data }: any) => {
        this.tools = data?.getAllTools;
        this.brands = data.getBrands;
        this.loading = data.loading;
        this.error = data.error;
        this.totalPages = Math.ceil(data.totalCount / this.pageSize);
      },
      error: (error) => {
        console.error('There was an error sending the query', error);
        this.loading = false;
        this.error = error;
      }
    });
  }

  isToolfromBrand(tool: any): boolean {
    if (Object.values(this.userContext.brandsChecked).includes(true)) {
      return this.userContext.brandsChecked[tool.brand.id];
    }
    return true;
  }

  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSeachbarChange(name: string) {
    this.search = name;
    this.currentPage = 1;
    this.cancelPendingRequests();

    if (this.search === '') {
      this.getTools();
      return;
    }

    const variables = {
      toolPageInput: {
        page: this.currentPage,
        size: this.pageSize
      },
      search: this.search
    };

    const apiSubscription = this.apollo
      .use('tools')
      .watchQuery({
        query: GET_TOOL_BY_NAME,
        variables
      })
      .valueChanges.subscribe({
        next: ({ data }: any) => {
          this.tools = data?.getToolsByName;
          this.loading = data.loading;
          this.error = data.error;
          this.totalPages = Math.ceil(data.totalCount / this.pageSize);
        },
        error: (error) => {
          console.error('There was an error sending the query', error);
          this.loading = false;
          this.error = error;
        }
      });

    this.searchRequestSubscriptions.push(apiSubscription);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getTools();
  }
}
