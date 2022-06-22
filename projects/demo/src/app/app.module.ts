import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgClickOutsideDirective} from "../../../ng-click-outside2/src/lib/ng-click-outside.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgClickOutsideDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
