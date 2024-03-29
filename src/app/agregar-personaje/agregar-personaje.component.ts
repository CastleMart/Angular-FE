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
   
  id:string = '';
  nombre:string = '';
  fuerza:string|null = '';
  defensa:string|null = '';
  img:string|null = '';
  personaje?:Personaje;
  

  constructor(
    private readonly dataSVc: DataService,
    public dialogoRef: MatDialogRef<AgregarPersonajeComponent>, 
    @Inject(MAT_DIALOG_DATA)public data: any)
    {this.id = data.id; console.log(this.id)}

  mandarDatos(valores:any){
    console.log(this.id)
    this.personaje = {idPersonaje:this.id, Nombre: this.nombre, Fuerza: this.fuerza, Defenza: this.defensa, Img: this.img};
    this.dataSVc.crearPersonaje(this.personaje).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    });
  }

  onClickNO():void{
    this.dialogoRef.close
  }
}

