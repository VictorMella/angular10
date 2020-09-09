import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { DestacarDirective } from './directivas/destacar.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './navBar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './dashboard/tabla/tabla.component';
import { ListaComponent } from './dashboard/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    DestacarDirective,
    DashboardComponent,
    NavBarComponent,
    FooterComponent,
    TablaComponent,
    ListaComponent
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
