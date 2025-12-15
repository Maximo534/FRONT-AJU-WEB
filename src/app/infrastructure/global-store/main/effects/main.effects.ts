import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MainActions from '../actions/main.actions';

@Injectable()
export class MainEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainActions.loadMainData),
      mergeMap(() =>
        // Aquí iría servicio: this.mainService.getAll().pipe(...)
        of([{ id: '1', nombre: 'Test', descripcion: 'Dato simulado' }]).pipe(
          map((data) => MainActions.loadMainDataSuccess({ data })),
          catchError((error) => of(MainActions.loadMainDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
