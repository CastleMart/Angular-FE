import { Component, Input } from '@angular/core';
import { Personaje } from '../services/data.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})

export class TarjetaComponent {
 @Input() personaje!: Personaje;
}
