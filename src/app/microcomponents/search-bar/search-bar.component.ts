import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output () searchText: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  onSearchInput(event: any){
    this.searchText.emit(event.target.value);
  }
}
