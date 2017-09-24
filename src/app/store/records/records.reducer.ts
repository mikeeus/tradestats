import { Hscode } from '../../models';

import { Action } from '@ngrx/store';
import * as RecordsActions from './records.action';

export interface State {
  record: { data: Hscode, loading: boolean }
}

// export interface HomeYearData { [key: number]: string }

const initialState: State = {
  record: { data: null, loading: false }
}

// Selector functions
export const getRecord = (state: State) => state.record;

/**App state reducer.*/
export function reducer(state = initialState, action: RecordsActions.Actions): State {
  switch(action.type) {
    case RecordsActions.ActionTypes.STOP_LOADING_ALL: {
      const newState: State = {
        record: { ...state.record, loading: false },
      }
      return newState;
    }

    case RecordsActions.ActionTypes.LOAD_RECORD: {
      const newState: State = {
        record: { ...state.record, loading: true },
      }
      return newState;
    }
    case RecordsActions.ActionTypes.LOAD_RECORD_SUCCESS: {
      const res = <Hscode>action.payload;

      const newState: State = {
        record: { ...state.record, data: res, loading: false },
      }
      return newState;
    }
    case RecordsActions.ActionTypes.LOAD_RECORD_FAIL: {
      const newState: State = {
        record: { ...state.record, loading: false },
      }
      return newState;
    }

    default: {
      return state;
    }
  }
}
