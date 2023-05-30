import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch:'full'  },
  {path: 'agregar-personaje', component: AgregarPersonajeComponent  },
  {path: 'home', component: HomeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
