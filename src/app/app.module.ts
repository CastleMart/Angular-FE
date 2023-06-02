import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule, matDialogAnimations} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatePipe } from './pipes/paginate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    AgregarPersonajeComponent,
    HomeComponent,
    EditarPersonajeComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
