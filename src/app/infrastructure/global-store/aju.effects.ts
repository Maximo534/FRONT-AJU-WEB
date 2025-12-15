import { Injectable, inject } from '@angular/core'; // 1. Importar inject
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { initApp } from './aju.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AjuEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initApp),
      map(() => {
        console.log('App Inicializada - Efecto Global');
        return { type: '[App Global] Init Success' };
      })
    )
  );
}
