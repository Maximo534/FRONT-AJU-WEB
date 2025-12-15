// manejar colecciones grandes de datos.
import { Mensaje } from '@domain/models/mensaje.model';

export interface MensajesEntity {
  // apa que almacena objetos Mensaje, donde la clave es el ID del mensaje.
  [id: number]: Mensaje;
}
