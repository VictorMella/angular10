import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {ListUsuariosComponent} from './dashboard/list-usuarios/list-usuarios.component'
import { CardUsuarioComponent } from './dashboard/list-usuarios/card-usuario/card-usuario.component';
import { InfoUsuarioComponent } from './dashboard/info-usuario/info-usuario.component';
import { LoadingComponent } from './dashboard/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    ListUsuariosComponent,
    CardUsuarioComponent,
    InfoUsuarioComponent,
    LoadingComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
