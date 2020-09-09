import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { DestacarDirective } from './directivas/destacar.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTareasComponent } from './dashboard/list-tareas/list-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    DestacarDirective,
    DashboardComponent,
    ListTareasComponent
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
