import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const productRouter: Routes = [
  {
    path: 'productdetail',
    component: ProductdetailsComponent,
  }
];

@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRouter)
  ],
})
export class ProductModule { }
