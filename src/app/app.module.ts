import { AppGlobalErrorHandler } from './../services/errorhandlers/appGlobalErrorHandler';
import { ErrorHandler } from '@angular/core';
import { Global } from './models/global';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainnavComponent } from './shared/mainnav/mainnav.component';
import { CoursenavComponent } from './lections/coursenav/coursenav.component';
import { CookieLawModule } from 'angular2-cookie-law';
import { MainfooterComponent } from './shared/mainfooter/mainfooter.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageHandler } from './models/localstorageHandler';
import { redirectHandler } from './models/redirecthandler';
import { GenericLectionsComponent } from './lections/generic-lections/generic-lections.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    CoursenavComponent,
    MainfooterComponent,
    GenericLectionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CookieLawModule,
    HttpClientModule
  ],
  providers: [
    Global,
    LocalStorageHandler,
    redirectHandler,
    {provide: ErrorHandler, useClass: AppGlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
