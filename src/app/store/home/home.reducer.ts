import { Action } from '@ngrx/store';
import * as HomeActions from './home.action';

export interface State {
  graph: {
    data: any,
    loading: boolean
  }
}

// export interface HomeYearData { [key: number]: string }

const initialState: State = {
  graph: {
    data: {
      exports: {
        1997: '587147526.17',
        1998: '557349526.5',
        1999: '447383390.14',
        2000: '481779928.76',
        2001: '453172903.98',
        2002: '473423435.09',
        2003: '580164496.59',
        2004: '549399195.42',
        2005: '893237829.41',
        2006: '998026074.6',
        2007: '1182255330.24',
        2008: '1542540851.92',
        2009: '1492936633.26',
        2010: '2146150125.46',
        2011: '2541846199.98',
        2012: '2741255272.15',
        2013: '2590868465.33',
        2014: '2977897404.16',
        2015: '2696533469.18',
        2016: '946898909.39'
      },
      imports: {
        1997: '1110500941.85',
        1998: '1456135027.69',
        1999: '1389181798.84',
        2000: '1218230084.59',
        2001: '1757556100.5',
        2002: '1567474840.23',
        2003: '2613581194.75',
        2004: '1996145580.28',
        2005: '3498518979.45',
        2006: '4490615099.27',
        2007: '5315524371.49',
        2008: '8186311776.09',
        2009: '7614509708.53',
        2010: '8321653778.24',
        2011: '8748136648.11',
        2012: '11632677549.49',
        2013: '10934931760.36',
        2014: '14713680085.75',
        2015: '16273355895.23',
        2016: '8425458209.36'
      }
    },
    loading: false
  }
}

// Selector functions
export const getGraph = (state: State) => state.graph;

/**
 * App state reducer.
 */
export function reducer(state = initialState, action: HomeActions.Actions): State {
  switch(action.type) {
    case HomeActions.ActionTypes.STOP_LOADING_ALL: {
      const newState: State = {
        graph: { ...state.graph, loading: false },
      }
      return newState;
    }

    case HomeActions.ActionTypes.LOAD_GRAPH: {
      const newState: State = {
        graph: { ...state.graph, loading: true },
      }
      return newState;
    }
    case HomeActions.ActionTypes.LOAD_GRAPH_SUCCESS: {
      const res = <any>action.payload;

      const newState: State = {
        graph: { ...state.graph, data: res, loading: false },
      }
      return newState;
    }
    case HomeActions.ActionTypes.LOAD_GRAPH_FAIL: {
      const newState: State = {
        graph: { ...state.graph, loading: false },
      }
      return newState;
    }

    default: {
      return state;
    }
  }
}
