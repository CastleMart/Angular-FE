import { Component, Input } from '@angular/core';
import { Personaje } from '../services/data.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})



export class TarjetaComponent {
 @Input() personaje!: Personaje;
 
 constructor(private readonly dataSVc: DataService) { } 
 clickDelete(){
    
  let id = this.personaje.idPersonaje
  this.dataSVc.borrarPersonaje(id).subscribe((response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  });;
  
 }
}
