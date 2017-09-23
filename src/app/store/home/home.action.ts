import { Action } from '@ngrx/store';


/**For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  STOP_LOADING_ALL:  '[HOME] Stop loading all.',

  LOAD_GRAPH:         '[HOME] Load graph.',
  LOAD_GRAPH_SUCCESS: '[HOME] Load graph success.',
  LOAD_GRAPH_FAIL:    '[HOME] Load graph fail.'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class StopLoadingAll implements Action {
  type = ActionTypes.STOP_LOADING_ALL;

  constructor(public payload: null) { };
}

export class LoadGraph implements Action {
  type = ActionTypes.LOAD_GRAPH;

  constructor(public payload: null) { };
}
export class LoadGraphSuccess implements Action {
  type = ActionTypes.LOAD_GRAPH;

  constructor(public payload: null) { };
}
export class LoadGraphFail implements Action {
  type = ActionTypes.LOAD_GRAPH;

  constructor(public payload: null) { };
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = StopLoadingAll

  | LoadGraph
  | LoadGraphSuccess
  | LoadGraphFail
