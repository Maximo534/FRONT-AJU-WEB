import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="error-page">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>El expediente o recurso que buscas no existe en el sistema AJU.</p>
      <a routerLink="/" class="btn-pj">Volver al Inicio</a>
    </div>
  `,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {}
