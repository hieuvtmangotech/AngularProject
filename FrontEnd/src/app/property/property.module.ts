import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyRoutingModule } from './property-routing.module';

import { PropertyListComponent } from '.././property/property-list/property-list.component';
import { AddPropertyComponent } from '.././property/add-property/add-property.component';
import { PropertyDetailComponent } from '.././property/property-detail/property-detail.component';
import { PropertyCardComponent } from '../property/property-card/property-card.component';
import { PropertyComponent } from './property.component';



@NgModule({
  declarations: [
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyCardComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PropertyRoutingModule

  ],
  providers: [

  ],
})
export class PropertyModule { }
