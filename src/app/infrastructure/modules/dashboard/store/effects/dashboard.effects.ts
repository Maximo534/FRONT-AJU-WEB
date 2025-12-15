import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { MensajeGateway } from '@domain/dto/mensaje.gateway';
import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);
  private mensajeGateway = inject(MensajeGateway); // Inyección abstracta

  loadMensajes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadMensajes), // Escuchar la orden de carga
      switchMap(() =>
        this.mensajeGateway.getAll().pipe(
          map((mensajes) => DashboardActions.loadMensajesSuccess({ mensajes })),
          catchError((error) => of(DashboardActions.loadMensajesFailure({ error: error.message })))
        )
      )
    )
  );
}
