import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl()
    });
  }
  onSubmit(){
    console.log(this.registerForm);
  }

}
