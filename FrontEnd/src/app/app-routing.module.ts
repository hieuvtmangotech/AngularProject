import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlablaComponent } from './blabla/blabla.component';

const routes: Routes = [
  {
    path: 'property',
    loadChildren: () => import('./property/property.module').then(m => m.PropertyModule)
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',

  // khoan , cái trên đấy là đúng đấy ,em để là property vì nó truyền property vào mấy cái tag của e
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
