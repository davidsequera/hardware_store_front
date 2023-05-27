import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpdateUserInput, User } from 'src/app/graphql/domains/users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements UpdateUserInput {
  @Input() id: string = '';
  @Input() name?: string;
  @Input() last_name?: string;
  @Input() username?: string;
  @Input() birthday?: string;
  @Input() city_birth?: string;
  @Input() credentials?: string[];

  @Output() updateUser: EventEmitter<UpdateUserInput> = new EventEmitter();
  @Output() deleteUser: EventEmitter<string> = new EventEmitter();


  fields = Object.keys({} as User);


  updateUserInput: UpdateUserInput = {
    id: this.id,
  };

  updateField(field: keyof UpdateUserInput) {
    this[field] = this.updateUserInput[field] ??  this[field] ?? "";
    this.updateUserInput = {
      id: this.id,
    };
  }

  cancelUpdateField() {
    this.updateUserInput = {
      id: this.id,
    };
  }

  deleteCurrentUser() {
    this.deleteUser.emit(this.id);
  }

  updateCurrentUser() {
    this.updateUserInput.id = this.id;
    this.updateUser.emit(this.updateUserInput);
  }
}
