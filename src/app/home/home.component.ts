import { Component, OnInit } from '@angular/core';
import { DataService, Personaje } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personajes: Personaje[] = [];

  constructor(private readonly dataSVc: DataService){}

  ngOnInit(): void {
    this.dataSVc.obtenerPersonajes().subscribe(per =>{this.personajes = [...per]})
    console.log(this.personajes)
  }
}
