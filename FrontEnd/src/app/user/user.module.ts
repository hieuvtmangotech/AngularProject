import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../user/user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { UserComponent } from '../user/user.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule
  ]
})
export class UserModule { }
