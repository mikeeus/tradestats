import { createSelector } from 'reselect';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';

import * as AppReducer from './app/app.reducer';

import { environment } from '../../environments/environment';

export interface State {
  app: AppReducer.State
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer.reducer
}

// Currently reducers for both environments are the same
export const developmentReducer: ActionReducer<State> = combineReducers(reducers);
export const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}



// // ************************************
// // App State Functions
// // ************************************
export const getAppState = (appState: State) => appState.app;

export const getLocation = createSelector(getAppState, AppReducer.getLocation);
