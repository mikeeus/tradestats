import { createSelector } from 'reselect';
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';

import * as AppReducer from './app/app.reducer';
import * as HomeReducer from './home/home.reducer';
import * as RecordsReducer from './records/records.reducer';

import { environment } from '../../environments/environment';

export interface State {
  app: AppReducer.State,
  home: HomeReducer.State,
  records: RecordsReducer.State,
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer.reducer,
  home: HomeReducer.reducer,
  records: RecordsReducer.reducer,
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

// // ************************************
// // Home State Functions
// // ************************************
export const getHomeState = (appState: State) => appState.home;

export const getHomeGraph = createSelector(getHomeState, HomeReducer.getGraph);

// // ************************************
// // Records State Functions
// // ************************************
export const getRecordsState = (appState: State) => appState.records;

export const getRecord = createSelector(getRecordsState, RecordsReducer.getRecord);
