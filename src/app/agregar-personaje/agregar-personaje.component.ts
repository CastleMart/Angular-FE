import { Component, Input } from '@angular/core';
import { Personaje } from '../services/data.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})
export class AgregarPersonajeComponent {
  @Input() personaje!: Personaje;

  mandarDatos(){

  }
}

