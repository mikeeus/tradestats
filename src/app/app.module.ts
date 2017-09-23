import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MdProgressBarModule, MdIconModule, MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

// Vendor
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SimpleNotificationsModule } from 'angular2-notifications';

// State
import { EffectsModule } from '@ngrx/effects';
import { AppEffectsModule } from './store/app-effects.module';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
// App Modules
import { LayoutModule } from './common';

// Other
import { TimeoutInterceptor } from './_interceptors';

// Vendor Configuration
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1
};

// App Providers
const APP_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
  {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' }}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MdProgressBarModule,
    MdIconModule,

    // Vendor
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    SimpleNotificationsModule.forRoot(),

    // Store
    StoreModule.forRoot(reducers),
    AppEffectsModule,
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 20 }) : [],

    LayoutModule
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
