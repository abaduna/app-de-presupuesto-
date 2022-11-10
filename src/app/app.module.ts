import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './componentes/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListargastoComponent } from './componentes/gastos/listargasto/listargasto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListargastoComponent
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
