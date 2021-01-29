import { LOCALE_ID, NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import {HttpClientModule} from '@angular/common/http';
import localeEsAr from '@angular/common/locales/es-AR';
import { HeaderComponent } from './header/header.component';
import { DollarInfoComponent } from './dollar-info/dollar-info.component';
import { NewsCardComponent } from './news-top3/news-card/news-card.component';
import { NewsTop3Component } from './news-top3/news-top3.component';

registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    DollarInfoComponent,
    NewsCardComponent,
    NewsTop3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ar' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
