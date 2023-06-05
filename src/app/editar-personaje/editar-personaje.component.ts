import { Component , Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.component.html',
  styleUrls: ['./editar-personaje.component.scss']
})
export class EditarPersonajeComponent {

  personaje: Personaje | undefined;
  id:string = '';
  nombre:string = '';
  fuerza:string|null = '';
  defensa:string|null = '';
  img:string|null = '';
  
  constructor(private route: ActivatedRoute, private readonly dataSVc: DataService, 
              public dialogoRef: MatDialogRef<EditarPersonajeComponent>, 
              @Inject(MAT_DIALOG_DATA)public data: any) {
      this.id = data.personaje.idPersonaje;  
      this.nombre = data.personaje.Nombre;
      this.fuerza = data.personaje.Fuerza;
      this.defensa = data.personaje.Defenza;
      this.img = data.personaje.Img;
    } // <-- inyectar


  ngOnInit() {
  
  }

  mandarDatos(values:any){
    
    this.personaje = {idPersonaje:this.id, Nombre: this.nombre, Fuerza: this.fuerza, Defenza: this.defensa, Img: this.img};
    this.dataSVc.actualizarPersonaje(this.personaje).subscribe((response) => {
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



