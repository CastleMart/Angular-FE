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
  id = ''
  isSearching = false;
  
  
  constructor(private readonly dataSVc: DataService, public dialogo: MatDialog){}

  
  abrirDialogo(){
    let idMAX = Math.max(...this.personajes.map(personaje => parseInt(personaje.idPersonaje))) + 1;
    this.id = idMAX.toString();
    const dialogoRef = this.dialogo.open(AgregarPersonajeComponent,{
      width: '350px',
      data: {id: this.id}});

      dialogoRef.afterClosed().subscribe(res =>{
        if(res){
          window.location.reload();
        }
      })
  }

  ngOnInit(): void {
    this.dataSVc.obtenerPersonajes().subscribe(per =>{this.personajes = [...per]})
    console.log(this.personajes)
    this.page_number = 1
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
