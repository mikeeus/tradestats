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
  @Effect({ dispatch: false })
  httpErrors: Observable<any> = this.actions
    .ofType(
      HomeActions.ActionTypes.HTTP_ERROR,
    ).map((action: HomeActions.HttpError) => action.payload)
    .map(error => {
      const parsed = this.parseError(error);
      this.notify.error(parsed.title, parsed.content);
    });

  constructor(
    private actions: Actions,
    private store: Store<State>,
    private notify: NotificationsService
  ) { }

  /**Parse incoming Error object to render notification title and content.*/
  parseError(error: Error): { title: string, content: string } {
    console.log('error:', error);
    const title = error.name || 'Oops';
    if (error['status']) {
      const status = error['status'].toString();
      switch(status) {
        case '504':
        return { title: 'Timeout', content: 'There may be a problem with your internet connection.'}
        case status.slice(0,1) === '5':
          return { title: title, content: 'Something went wrong.' };
      }
    }

    if (error.message) {
      return { title: title, content: error.message };
    }
    if (error['_body'] && typeof error['_body'] === 'string') {
      const body = JSON.parse(error['_body']);
      if (body.message) {
        return { title: title, content: body.message };
      }
      if (body.error) {
        return { title: title, content: body.error };
      }
    }
    return { title: title, content: 'Something went wrong.' };
  }

}
