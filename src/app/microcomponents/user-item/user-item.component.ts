import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() last_name?: string;
  @Input() username?: string;
  @Input() birthday?: string;
  @Input() city_birth?: string;
  @Input() credentials?: string[];

  @Output() updateUser: EventEmitter<any> = new EventEmitter();
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();

  isEditMode = false;
  updatedUser: any = {};

  doubleClickField(field: keyof UserItemComponent) {
    this.isEditMode = true;
    this.updatedUser[field] = this[field];
  }

  updateField(field: keyof UserItemComponent) {
    this[field] = this.updatedUser[field];
    this.isEditMode = false;
    this.updatedUser = {};
  }

  cancelUpdateField() {
    this.isEditMode = false;
    this.updatedUser = {};
  }

  deleteCurrentUser() {
    this.deleteUser.emit(this.id);
  }
}
