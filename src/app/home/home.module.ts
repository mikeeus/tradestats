import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HomeComponent } from './home.component';
import { ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),

    NgxChartsModule,
    ChartsModule,

    MdListModule,
    FlexLayoutModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
