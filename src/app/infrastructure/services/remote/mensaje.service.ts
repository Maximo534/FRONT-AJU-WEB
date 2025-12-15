import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '@domain/models/mensaje.model';
import { MensajeGateway } from '@domain/dto/mensaje.gateway';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MensajeService extends MensajeGateway {
  // Implementa el contrato del dominio

  private _url = `${environment.apiUrl}/mensajes`; // Ajusta '/mensajes' al endpoint real

  constructor(private http: HttpClient) {
    super();
  }

  // Cumplimos el contrato definido en el Gateway
  getAll(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this._url);
  }
}
