import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  presupuesto = 0
  constructor(public _presuputoServicio:PresupuestoService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this._presuputoServicio.presupuesto);
    if (this._presuputoServicio.presupuesto === 0) {
      this.router.navigate(["/ingresarPresupuesto"])
    }
  }

}
