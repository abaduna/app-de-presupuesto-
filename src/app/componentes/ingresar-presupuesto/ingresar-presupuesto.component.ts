import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad:number
  cantidadIncorecta:boolean
  constructor(private _presupuestoServices:PresupuestoService,
              private router:Router) {
    this.cantidad = 0
    this.cantidadIncorecta = false
   }

  ngOnInit(): void {
  }
  agregar(){
    if (this.cantidad > 0) {
      this.cantidadIncorecta = false
      this._presupuestoServices.presupuesto = this.cantidad
      this,this._presupuestoServices.restante = this.cantidad
      this.router.navigate(["/gastos"])
    }else{
      this.cantidadIncorecta = true
    }
  }
}
