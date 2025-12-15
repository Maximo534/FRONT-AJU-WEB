import { createReducer, on } from '@ngrx/store';

// Importamos el estado inicial de la nueva ubicación
import { initialState } from '../states/dashboard.state';
import * as DashboardActions from '../actions/dashboard.actions';

// El Reducer escucha las acciones y cambia el estado
export const dashboardReducer = createReducer(
  initialState,

  on(DashboardActions.loadMensajes, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(DashboardActions.loadMensajesSuccess, (state, { mensajes }) => ({
    ...state,
    loading: false,
    mensajes: mensajes,
  })),

  on(DashboardActions.loadMensajesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
