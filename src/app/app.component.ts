import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'Personajes Fire emblem';
  
  constructor(){}

}
