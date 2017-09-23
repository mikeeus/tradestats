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
    data: [
      {
        name: 'exports',
        series: [
          { name: 1997, value: '587147526.17'},
          { name: 1998, value: '557349526.5'},
          { name: 1999, value: '447383390.14'},
          { name: 2000, value: '481779928.76'},
          { name: 2001, value: '453172903.98'},
          { name: 2002, value: '473423435.09'},
          { name: 2003, value: '580164496.59'},
          { name: 2004, value: '549399195.42'},
          { name: 2005, value: '893237829.41'},
          { name: 2006, value: '998026074.6'},
          { name: 2007, value: '1182255330.24'},
          { name: 2008, value: '1542540851.92'},
          { name: 2009, value: '1492936633.26'},
          { name: 2010, value: '2146150125.46'},
          { name: 2011, value: '2541846199.98'},
          { name: 2012, value: '2741255272.15'},
          { name: 2013, value: '2590868465.33'},
          { name: 2014, value: '2977897404.16'},
          { name: 2015, value: '2696533469.18'},
          { name: 2016, value: '946898909.39}'}
        ],
      },
      {
        name: 'imports',
        series: [
          { name: 1997, value: '1110500941.85'},
          { name: 1998, value: '1456135027.69'},
          { name: 1999, value: '1389181798.84'},
          { name: 2000, value: '1218230084.59'},
          { name: 2001, value: '1757556100.5'},
          { name: 2002, value: '1567474840.23'},
          { name: 2003, value: '2613581194.75'},
          { name: 2004, value: '1996145580.28'},
          { name: 2005, value: '3498518979.45'},
          { name: 2006, value: '4490615099.27'},
          { name: 2007, value: '5315524371.49'},
          { name: 2008, value: '8186311776.09'},
          { name: 2009, value: '7614509708.53'},
          { name: 2010, value: '8321653778.24'},
          { name: 2011, value: '8748136648.11'},
          { name: 2012, value: '11632677549.49'},
          { name: 2013, value: '10934931760.36'},
          { name: 2014, value: '14713680085.75'},
          { name: 2015, value: '16273355895.23'},
          { name: 2016, value: '8425458209.36}'}
        ]
      }
    ],
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
