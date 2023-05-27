import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
  selector: 'app-pagination-indicator',
  templateUrl: './pagination-indicator.component.html',
  styleUrls: ['./pagination-indicator.component.css']
})
export class PaginationIndicatorComponent implements OnChanges  {
  @Input() page = 1;
  @Input() totalPages = 0;
  @Output() pageChange = new EventEmitter<number>();



  pageTitle = 'Page';
  
  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

  ngOnChanges(): void {
    this.pageTitle = `Page ${this.page+1} of ${this.totalPages}`;
  }
}
