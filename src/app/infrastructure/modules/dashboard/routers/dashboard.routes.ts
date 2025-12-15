import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { dashboardReducer } from '../store/reducers/dashboard.reducer';
import { DashboardEffects } from '../store/effects/dashboard.effects';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    providers: [provideState({ name: 'dashboardFeature', reducer: dashboardReducer }), provideEffects(DashboardEffects)],
  },
];
