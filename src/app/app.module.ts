import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { CoursenavComponent } from './coursenav/coursenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    CoursenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
