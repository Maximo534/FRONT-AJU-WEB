import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './states/dashboard.state';

// Selecciona todo el estado del feature 'dashboard'
export const selectDashboardState = createFeatureSelector<DashboardState>('dashboardFeature');

// Selectores específicos
export const selectAllMensajes = createSelector(selectDashboardState, (state) => state.mensajes);

export const selectLoading = createSelector(selectDashboardState, (state) => state.loading);
