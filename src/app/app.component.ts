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
  name = 'hola'
  constructor(public dialogo: MatDialog){}

  abrirDialogo(){
    const dialogoRef = this.dialogo.open(AgregarPersonajeComponent,{
      width: '350px',
      data: {name: this.name}});

      dialogoRef.afterClosed().subscribe(res =>{console.log(res);})
  }
}
