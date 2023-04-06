import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() type: string;
  @Input() name: string;

  constructor(){
    this.name = '';
    this.id = '';
    this.title = '';
    this.type = '';
  }
}
