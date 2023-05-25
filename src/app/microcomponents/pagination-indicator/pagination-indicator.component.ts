import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-pagination-indicator',
  templateUrl: './pagination-indicator.component.html',
  styleUrls: ['./pagination-indicator.component.css']
})
export class PaginationIndicatorComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }

}
