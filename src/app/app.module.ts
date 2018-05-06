import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp/comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [Comp2Component]
})
export class AppModule { }
