import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { SideNavComponent }  from './sidenav/sidenav.component';
import { AppComponent }  from './app.component';
import { DataComponent }  from './data/data.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpModule} from '@angular/http';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)],
  declarations: [ SideNavComponent, AppComponent, DataComponent, AboutUsComponent, ProductsComponent, HeaderComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
