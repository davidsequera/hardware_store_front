import { Component } from '@angular/core';


@Component({
  selector: 'app-pagination-indicator',
  templateUrl: './pagination-indicator.component.html',
  styleUrls: ['./pagination-indicator.component.css']
})
export class PaginationIndicatorComponent {
  page = 1;
  pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  onPageChange(page: number) {
    this.page = page;
  }
}
