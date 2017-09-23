import { Action } from '@ngrx/store';


/**For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  STOP_LOADING_ALL:  '[APP] Stop loading all.',
  EMPTY:             '[APP] Empty',

  HTTP_ERROR:        '[APP] Http error.'
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
export class Empty implements Action {
  type = ActionTypes.EMPTY;

  constructor(public payload: null) { };
}

export class HttpError implements Action {
  type = ActionTypes.HTTP_ERROR;

  constructor(public payload: Error) { };
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = StopLoadingAll

  | Empty
  | HttpError
