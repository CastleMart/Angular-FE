import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Personaje {
  idPersonaje:string;
  Nombre:string;
  Fuerza:string;
  Defenza:string;
  Img: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API = 'https://rc4w8ry6ye.execute-api.us-east-1.amazonaws.com/test';
  constructor( private readonly http:HttpClient) { }

  crearPersonaje(personaje:Personaje): Observable<Personaje>{
    const body = { Nombre:personaje, Fuerza:personaje,Defenza:personaje,Img:personaje }
    return this.http.post<Personaje>(this.API, body)
  }

  obtenerPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.API);
  }

  actualizarPersonaje(personaje: Personaje): Observable<void>{
    const body = {idPersonaje: personaje.idPersonaje ,Nombre: personaje.Nombre, Fuerza:personaje.Fuerza, Defensa:personaje.Defenza, Img : personaje.Img};
    return this.http.put<void>(this.API,body);
  }

  borrarPersonaje(id: String):  Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
