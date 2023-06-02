import { Component, OnInit } from '@angular/core';
import { DataService, Personaje } from '../services/data.service';
import { PageEvent } from '@angular/material/paginator';

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



  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 2;
}
