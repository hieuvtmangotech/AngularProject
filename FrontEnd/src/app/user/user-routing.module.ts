import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { UserComponent } from '../user/user.component';

const userRouter: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'user-login',
        component: UserLoginComponent
      },
      {
        path: 'user-register',
        component: UserRegisterComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRouter)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
