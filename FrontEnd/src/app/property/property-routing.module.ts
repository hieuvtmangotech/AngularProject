import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent } from '.././property/property-list/property-list.component';
import { AddPropertyComponent } from '.././property/add-property/add-property.component';
import { PropertyDetailComponent } from '.././property/property-detail/property-detail.component';
import { PropertyComponent } from '../property/property.component';

const propertyRouter: Routes = [
  {
    path: '',
    component: PropertyComponent,
    children : [
      {
        path: '',
        component: PropertyListComponent
      },
      {
        path: 'add',
        component: AddPropertyComponent
      },
      {
        path: 'rent',
        component: PropertyListComponent
      },
      {
        path: ':id',
        component: PropertyDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(propertyRouter)
  ],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
