import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { ListAlumnosComponent } from './components/list-alumnos/list-alumnos.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CrearAlumnoComponent,
    ListAlumnosComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
