import { Injectable } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { Hscode } from '../../models';
import { HscodeService } from '../../_services';
import { State } from '../';
import * as RecordsActions from './records.action';
import * as AppActions from '../app/app.action';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class RecordsEffects {
  @Effect()
  loadRecord: Observable<any> = this.actions
    .ofType(
      RecordsActions.ActionTypes.LOAD_RECORD,
    ).map((action: RecordsActions.LoadRecord) => action.payload)
    .switchMap<number, Action>(id =>
      this.hscodeService.get(id)
        .map((res: Hscode) => {
          return new RecordsActions.LoadRecordSuccess(res);
        })
        .catch(err => {
          this.store.dispatch(new RecordsActions.LoadRecordFail(null));
          return Observable.of(new AppActions.HttpError(err))
        })
  );

  constructor(
    private actions: Actions,
    private store: Store<State>,
    private notify: NotificationsService,
    private hscodeService: HscodeService
  ) { }
}
