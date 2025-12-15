import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Mensaje } from '@domain/models/mensaje.model';
import { loadMensajes } from '../../store/actions/dashboard.actions';
import { selectAllMensajes, selectLoading } from '../../store/dashboard.selectors';
import { SYSTEM_TITLE, MSG_CARGANDO } from '@constants';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private store = inject(Store);

  tituloSistema = SYSTEM_TITLE;
  mensajeCarga = MSG_CARGANDO;
  // Datos observables desde el Store
  mensajes$: Observable<Mensaje[]> = this.store.select(selectAllMensajes);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  ngOnInit(): void {
    // Ordenar al Store que cargue los datos
    this.store.dispatch(loadMensajes());
  }
}
