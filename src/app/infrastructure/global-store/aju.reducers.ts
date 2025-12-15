import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// Define la interfaz global
export interface AjuState {
  // Aquí agregarías estados globales futuros. Ej: 'auth': AuthState
}

//  Define el mapa de reducers (lo que antes era ROOT_REDUCERS)
export const ajuReducers: ActionReducerMap<AjuState> = {
  // Aquí irían los reducers. Ej: auth: authReducer
};

export const metaReducers: MetaReducer<AjuState>[] = [];
