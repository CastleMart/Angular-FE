
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

export interface Personaje {
  idPersonaje:string;
  Nombre:string;
  Fuerza:string|null;
  Defenza:string|null;
  Img: string|null;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private  API = 'https://rc4w8ry6ye.execute-api.us-east-1.amazonaws.com/test';
  constructor( private readonly http:HttpClient) { }

  crearPersonaje(personaje:Personaje): Observable<Personaje>{
    const body = { idPersonaje: personaje.idPersonaje,Nombre:personaje.Nombre, Fuerza:personaje.Fuerza,Defenza:personaje.Defenza,Img:personaje.Img }

    //console.log("body",body)
    return this.http.post<Personaje>(this.API, body)
  }

  obtenerPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.API);
  }

  actualizarPersonaje(personaje: Personaje): Observable<any>{
    const body = {idPersonaje: personaje.idPersonaje ,Nombre: personaje.Nombre, Fuerza:personaje.Fuerza, Defenza:personaje.Defenza, Img : personaje.Img};  
  
    const httpOptions = {
      headers: new HttpHeaders({ 
        
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*'
      
      })
    };
    return this.http.put<any>(this.API,body)
  }

  borrarPersonaje(id: String):  Observable<void>{
    
    console.log(id);
    this.API += "/" + id;
    
    return this.http.delete<void>(this.API);
  }
}
