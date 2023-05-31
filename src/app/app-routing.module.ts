import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { HomeComponent } from './home/home.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch:'full'  },
  {path: 'agregar-personaje', component: AgregarPersonajeComponent  },
  {path: 'editar-personaje', component: EditarPersonajeComponent  },
  {path: 'home', component: HomeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
