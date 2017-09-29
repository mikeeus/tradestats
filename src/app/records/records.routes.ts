import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records.component';
import { DetailComponent } from './detail';
import { RecordResolver } from './record.resolver';

export const ROUTES: Routes = [
  { path: 'records', component: RecordsComponent },
  { path: 'records/:id',
    component: DetailComponent,
    resolve: { record: RecordResolver }
  }
];
