import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// App Modules
import { LayoutModule } from './common';

// Other
import { TimeoutInterceptor } from './_interceptors';

const APP_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }
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
