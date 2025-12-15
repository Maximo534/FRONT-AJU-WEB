import { Component } from '@angular/core';

@Component({
  selector: 'app-server-error',
  standalone: true,
  template: `
    <div class="error-page">
      <h1>500</h1>
      <h2>Error del Sistema</h2>
      <p>Ocurrió un problema de comunicación con los servicios judiciales.</p>
      <button onclick="location.reload()" class="btn-pj">Reintentar</button>
    </div>
  `,
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent {}
