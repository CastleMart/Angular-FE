import { Component, OnInit } from '@angular/core';
import { DataService, Personaje } from '../services/data.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AgregarPersonajeComponent } from '../agregar-personaje/agregar-personaje.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personajes: Personaje[] = [];
  filtrarPost = ''
  page_size: number = 5;
  page_number: number = 2;
  name = 'hola'

  isSearching = false;
  
  
  constructor(private readonly dataSVc: DataService, public dialogo: MatDialog){}

  

  abrirDialogo(){
    const dialogoRef = this.dialogo.open(AgregarPersonajeComponent,{
      width: '350px',
      data: {name: this.name}});

      dialogoRef.afterClosed().subscribe(res =>{console.log(res);})
  }



  ngOnInit(): void {
    this.dataSVc.obtenerPersonajes().subscribe(per =>{this.personajes = [...per]})
    console.log(this.personajes)
    console.log();
  }


  
  setIsSearching(searchValue: string|null){

    if(searchValue !== null)
    this.isSearching = searchValue.length >= 3;
  }
  

  

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  
}
