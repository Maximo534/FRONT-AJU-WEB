import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@infrastructure/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '@infrastructure/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '@infrastructure/modules/auth/components/login/login.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@infrastructure/modules/dashboard/routers/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
      },
      {
        path: '404',
        loadComponent: () => import('@infrastructure/shared/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
      },
      {
        path: '403',
        loadComponent: () => import('@infrastructure/shared/pages/unauthorized/unauthorized.component').then((m) => m.UnauthorizedComponent),
      },
      {
        path: '500',
        loadComponent: () => import('@infrastructure/shared/pages/server-error/server-error.component').then((m) => m.ServerErrorComponent),
      },

      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
