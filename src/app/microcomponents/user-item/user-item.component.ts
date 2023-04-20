import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() id? : string;
  @Input() name? : string;
  @Input() last_name? : string;
  @Input() username? : string;
  @Input() birthday? : string;
  @Input() city_birth? : string;
  @Input() credentials? : string[];
}
