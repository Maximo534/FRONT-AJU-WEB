import { createAction, props } from '@ngrx/store';
import { Mensaje } from '@domain/models/mensaje.model';

// Iniciar la carga
export const loadMensajes = createAction('[Dashboard] Load Mensajes');

//Carga exitosa
export const loadMensajesSuccess = createAction('[Dashboard] Load Mensajes Success', props<{ mensajes: Mensaje[] }>());

// Error en carga
export const loadMensajesFailure = createAction('[Dashboard] Load Mensajes Failure', props<{ error: string }>());
