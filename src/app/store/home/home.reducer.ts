import { Action } from '@ngrx/store';
import * as AppActions from './app.action';

export interface State {
  location: {}
}
const initialState: State = {
  location: {}
}

// Selector functions
export const getLocation = (state: State) => state.location;

/**
 * App state reducer.
 */
export function reducer(state = initialState, action: AppActions.Actions): State {
  switch(action.type) {
    case AppActions.ActionTypes.STOP_LOADING_ALL: {
      const newState: State = {
        location: { ...state.location, loading: false },
      }
      return newState;
    }

    default: {
      return state;
    }
  }
}
