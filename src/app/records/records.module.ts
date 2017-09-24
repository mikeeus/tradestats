import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecordsComponent } from './records.component';
import { ROUTES } from './records.routes';
import { DetailComponent } from './detail';

import { RecordResolver } from './record.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RecordsComponent,
    DetailComponent
  ],
  providers: [
    RecordResolver
  ]
})
export class RecordsModule { }
