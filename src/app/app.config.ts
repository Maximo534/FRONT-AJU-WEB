import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';

import { ajuReducers, metaReducers } from '@infrastructure/global-store/aju.reducers';
import { AjuEffects } from '@infrastructure/global-store/aju.effects';

import { MensajeGateway } from '@domain/dto/mensaje.gateway';
import { MensajeService } from '@infrastructure/services/remote/mensaje.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),

    provideStore(ajuReducers, { metaReducers }),

    provideEffects([AjuEffects]),

    { provide: MensajeGateway, useClass: MensajeService },
  ],
};
