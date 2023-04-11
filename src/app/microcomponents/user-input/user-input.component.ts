import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Input() parentFormGroup!: FormGroup;

  constructor(){
    this.name = '';
    this.id = '';
    this.title = '';
    this.type = '';
  }
}
