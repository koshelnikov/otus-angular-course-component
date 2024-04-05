import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  DogComponent,
  CatComponent,
  BirdComponent,
} from './components';

import * as AppRootComponents from './components'
import {UsersModule} from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    BirdComponent,
    AppRootComponents.ViewEncapsulationShadowComponent,
    AppRootComponents.ViewEncapsulationNoneComponent
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
