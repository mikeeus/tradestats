import { Action } from '@ngrx/store';

import { Hscode } from '../../models';

/**For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  STOP_LOADING_ALL:   '[RECORDS] Stop loading all.',

  LOAD_RECORD:         '[RECORDS] Load record.',
  LOAD_RECORD_SUCCESS: '[RECORDS] Load record success.',
  LOAD_RECORD_FAIL:    '[RECORDS] Load record fail.'
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

export class LoadRecord implements Action {
  type = ActionTypes.LOAD_RECORD;

  constructor(public payload: number) { };
}
export class LoadRecordSuccess implements Action {
  type = ActionTypes.LOAD_RECORD_SUCCESS;

  constructor(public payload: Hscode) { };
}
export class LoadRecordFail implements Action {
  type = ActionTypes.LOAD_RECORD_FAIL;

  constructor(public payload: null) { };
}

/**Export a type alias of all actions in this action group
 * so that reducers can easily compose action types.
 */
export type Actions
  = StopLoadingAll

  | LoadRecord
  | LoadRecordSuccess
  | LoadRecordFail
