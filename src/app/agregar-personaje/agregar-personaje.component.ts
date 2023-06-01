import { Component, Input } from '@angular/core';
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})


export class AgregarPersonajeComponent {

   
  id:string|null = '';
  nombre:string|null = '';
  fuerza:string|null = '';
  defensa:string|null = '';
  img:string|null = '';

  //@Input() personaje!: Personaje;
  personaje?:Personaje;

  constructor(private readonly dataSVc: DataService){}
  mandarDatos(valores:any){
    this.personaje = {idPersonaje:'14', Nombre: this.nombre, Fuerza: this.fuerza, Defenza: this.defensa, Img: this.img};
    this.dataSVc.crearPersonaje(this.personaje).subscribe(res => console.error(Error))
    
  }
}

