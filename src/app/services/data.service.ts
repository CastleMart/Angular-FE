
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

export interface Personaje {
  idPersonaje:string|null;
  Nombre:string|null;
  Fuerza:string|null;
  Defenza:string|null;
  Img: string|null;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API = 'https://rc4w8ry6ye.execute-api.us-east-1.amazonaws.com/test';
  constructor( private readonly http:HttpClient) { }

  crearPersonaje(personaje:Personaje): Observable<Personaje>{
    const body = { idPersonaje: personaje.idPersonaje,Nombre:personaje.Nombre, Fuerza:personaje.Fuerza,Defenza:personaje.Defenza,Img:personaje.Img }
    return this.http.post<Personaje>(this.API, body)
  }

  obtenerPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(this.API);
  }

  actualizarPersonaje(personaje: Personaje): Observable<any>{
    const body = {idPersonaje: personaje.idPersonaje ,Nombre: personaje.Nombre, Fuerza:personaje.Fuerza, Defenza:personaje.Defenza, Img : personaje.Img};
    
    
    console.log(body)
    console.log(this.API)
  
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'userid':'1'
      })
    };

    
    return this.http.put<any>(this.API,body, httpOptions)

    //let respuesta =  this.http.put(this.API,body);
    //console.log(respuesta)
    //return respuesta
  }

  borrarPersonaje(id: String):  Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
