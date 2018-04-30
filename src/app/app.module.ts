import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { Comp2Component } from './comp/comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [Comp2Component]
})
export class AppModule { }
