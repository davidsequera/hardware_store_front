import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserInput } from 'src/app/graphql/domains/users';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent  implements OnInit {

  @Input() showCreateForm!: boolean; // Flag to control the visibility of the create form

  @Output() createButtonEvent: EventEmitter<CreateUserInput> = new EventEmitter();


  createUserForms!: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  initializeForm() {
    this.createUserForms = this.fb.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      birthday: ['', Validators.required],
      city_birth: ['', Validators.required],
      credentials: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.initializeForm();
  }


  sendUserInput(){
    const newUser: CreateUserInput = {
      ...this.createUserForms.value
    }
    this.createButtonEvent.emit(newUser);
  }
  cancelCreateForm() {
    this.showCreateForm = false; // Close the create form
  }
}
