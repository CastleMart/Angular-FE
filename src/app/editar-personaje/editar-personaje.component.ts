import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';

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
  
  constructor(private route: ActivatedRoute, private readonly dataSVc: DataService) { } // <-- inyectar
  ngOnInit() {
    // Leer
    let Id = this.route.snapshot.paramMap.get("idPersonaje");
    let Nombre = this.route.snapshot.paramMap.get("Nombre");
    let Fuerza = this.route.snapshot.paramMap.get("Fuerza");
    let Defenza = this.route.snapshot.paramMap.get("Defenza");
    let Img = this.route.snapshot.paramMap.get("Img");
    
    if (Nombre !== null) {
      this.nombre = Nombre;
    }
    if (Id !== null) {
        this.id = Id;
    }

    this.fuerza = Fuerza;
    this.defensa = Defenza;
    this.img = Img;
    
    console.log(Nombre);
    console.log(Fuerza);
    //let idMascota = this.route.snapshot.paramMap.get("id");
  }

  mandarDatos(values:any){
    
    this.personaje = {idPersonaje:this.id, Nombre: this.nombre, Fuerza: this.fuerza, Defenza: this.defensa, Img: this.img};
    //console.log(this.personaje)
    this.dataSVc.actualizarPersonaje(this.personaje).subscribe((response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
}



