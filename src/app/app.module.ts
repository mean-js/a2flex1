import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp/comp1/comp1.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Comp1Component]
})
export class AppModule { }
