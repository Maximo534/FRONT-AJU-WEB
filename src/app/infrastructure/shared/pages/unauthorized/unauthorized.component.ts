import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-page">
      <h1>403</h1>
      <h2>Acceso Denegado</h2>
      <p>No tiene los permisos necesarios para realizar esta acción.</p>
      <a routerLink="/dashboard" class="btn-pj">Volver al Dashboard</a>
    </div>
  `,
  styleUrls: ['./unauthorized.component.scss'],
})
export class UnauthorizedComponent {}
