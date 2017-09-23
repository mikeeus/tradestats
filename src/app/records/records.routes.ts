import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './records.component';

export const ROUTES: Routes = [
  { path: 'records', component: RecordsComponent },
  { path: 'records/:id', component: RecordsComponent }
];
