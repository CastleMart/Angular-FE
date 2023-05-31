import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Personaje } from '../services/data.service';

@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.component.html',
  styleUrls: ['./editar-personaje.component.scss']
})
export class EditarPersonajeComponent {

  
  nombre:String|null = '';
  fuerza?:String|null = '';
  defensa?:String|null = '';
  img?:String|null = '';
  
  constructor(private route: ActivatedRoute) { } // <-- inyectar
  ngOnInit() {
    // Leer
    let Nombre = this.route.snapshot.paramMap.get("Nombre");
    let Fuerza = this.route.snapshot.paramMap.get("Fuerza");
    let Defenza = this.route.snapshot.paramMap.get("Defenza");
    let Img = this.route.snapshot.paramMap.get("Img");
    this.nombre = Nombre;
    this.fuerza = Fuerza;
    this.defensa = Defenza;
    this.img = Img;
    console.log(Nombre);
    console.log(Fuerza);
    //let idMascota = this.route.snapshot.paramMap.get("id");
  }

  mandarDatos(){

  }
}



