import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { Deuda } from '../modelos/deuda.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:8080/SegarraJBack-1.0-SNAPSHOT/api';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  getUsuarioPorCedula(cedula: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${cedula}`);
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario);
  }

  getDeudas(): Observable<Deuda[]> {
    return this.http.get<Deuda[]>(`${this.baseUrl}/deudas`);
  }
}
