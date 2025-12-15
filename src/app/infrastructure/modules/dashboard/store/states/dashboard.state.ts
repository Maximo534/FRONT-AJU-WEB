import { Mensaje } from '@domain/models/mensaje.model';

// Define el tipo de estado
export interface DashboardState {
  mensajes: Mensaje[];
  loading: boolean;
  error: string | null;
}

// Define el estado inicial
export const initialState: DashboardState = {
  mensajes: [],
  loading: false,
  error: null,
};
