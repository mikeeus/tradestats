import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot,
  Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import { Hscode } from '../models';
import * as RecordsActions from '../store/records/records.action';
import * as storeRoot from '../store/index';
import 'rxjs/add/operator/take';

@Injectable()
export class RecordResolver implements Resolve<{ data: Hscode, loading: boolean }> {

  constructor(
    private router: Router,
    private store: Store<any>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.select(storeRoot.getRecord).take(1).subscribe(a => {
      const id = route.params['id']
      if (!a.data || a.data && a.data.id !== id) {
        this.store.dispatch(new RecordsActions.LoadRecord(id))
      }
    });

    /**Wait for activity feed, themes and place types to finish
     * loading then return.
     */
    return this.store.select(storeRoot.getRecord)
      .filter(r => !r.loading)
      .take(1);
  }

}


