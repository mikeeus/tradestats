import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
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

// Services
import { SERVICE_PROVIDERS } from './_services';

// App Component and Routes
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

// App Modules
import { LayoutModule } from './common';
import { HomeModule } from './home';
import { RecordsModule } from './records';

// Other
import { TimeoutInterceptor } from './_interceptors';

// Vendor Configuration
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1
};

// App Providers
const APP_PROVIDERS = [
  ...SERVICE_PROVIDERS,
  { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
  {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'never' }}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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

    // App Modules
    LayoutModule,
    HomeModule,
    RecordsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
