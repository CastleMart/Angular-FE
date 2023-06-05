import { Component, Input } from '@angular/core';
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarPersonajeComponent } from '../editar-personaje/editar-personaje.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})

export class TarjetaComponent {
 @Input() personaje!: Personaje;
 
 constructor(private readonly dataSVc: DataService, public dialogo: MatDialog) { } 

 abrirDialogo(){   
    
  const dialogoRef = this.dialogo.open(EditarPersonajeComponent,{
    width: '350px',
    data: {personaje: this.personaje }});

    dialogoRef.afterClosed().subscribe(res =>{
      if(res){
        window.location.reload();
      }
    })
}

 clickDelete(){
    
  let id = this.personaje.idPersonaje
  this.dataSVc.borrarPersonaje(id).subscribe((response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  });  
 }
}
