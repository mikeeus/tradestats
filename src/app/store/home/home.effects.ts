import { Injectable } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { State } from '../';
import * as HomeActions from './home.action';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeEffects {
  /**Handle http request errors*/
  // @Effect({ dispatch: false })
  // httpErrors: Observable<any> = this.actions
  //   .ofType(
  //     HomeActions.ActionTypes.LOAD_GRAPH,
  //   ).map((action: HomeActions.LoadGraph) => action.payload)
  //   .map(error => {
  //     const parsed = this.parseError(error);
  //     this.notify.error(parsed.title, parsed.content);
  //   });

  constructor(
    private actions: Actions,
    private store: Store<State>,
    private notify: NotificationsService
  ) { }
}
