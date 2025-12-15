import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '@domain/models/mensaje.model';
import { MensajeGateway } from '@domain/dto/mensaje.gateway';

@Injectable({
  providedIn: 'root',
})
export class ObtenerMensajesUseCase {
  constructor(private _mensajeGateway: MensajeGateway) {}

  execute(): Observable<Mensaje[]> {
    return this._mensajeGateway.getAll();
  }
}
