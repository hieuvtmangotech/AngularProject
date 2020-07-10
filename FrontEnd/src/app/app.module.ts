import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
// import { HouseingService } from './services/houseing.service';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlablaComponent } from './blabla/blabla.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlablaComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    // HouseingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
