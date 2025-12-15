import { createReducer, on } from '@ngrx/store';
import * as MainActions from '../actions/main.actions';
import { mainInitialState, MainState } from '../states/main.state';

export const mainFeatureKey = 'mainModule';

export const mainReducer = createReducer(
  mainInitialState,

  on(MainActions.loadMainData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(MainActions.loadMainDataSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: data,
  })),

  on(MainActions.loadMainDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
