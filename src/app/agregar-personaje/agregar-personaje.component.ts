import { Component, Input, Inject } from '@angular/core';
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    private readonly dataSVc: DataService,
    public dialogoRef: MatDialogRef<AgregarPersonajeComponent>, 
    @Inject(MAT_DIALOG_DATA){}){}



  mandarDatos(valores:any){
    this.personaje = {idPersonaje:'15', Nombre: this.nombre, Fuerza: this.fuerza, Defenza: this.defensa, Img: this.img};
    this.dataSVc.crearPersonaje(this.personaje).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    });;
    //window.location.reload();
    
  }

  onClickNO():void{
    this.dialogoRef.close
  }
}

