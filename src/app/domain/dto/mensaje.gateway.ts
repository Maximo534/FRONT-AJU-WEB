import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje.model';

export abstract class MensajeGateway {
  abstract getAll(): Observable<Mensaje[]>;
}
