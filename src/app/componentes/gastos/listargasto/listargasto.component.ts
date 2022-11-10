import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-listargasto',
  templateUrl: './listargasto.component.html',
  styleUrls: ['./listargasto.component.css']
})
export class ListargastoComponent implements OnInit, OnDestroy {
  suscripcio: Subscription
  presupuesto: Number
  restante: number
  listaGastos:any[]= []
  constructor(private _presupuestoServic: PresupuestoService) {
    this.presupuesto = 0
    this.restante = 0
    this.suscripcio = this._presupuestoServic.getGasto().subscribe((data: any) => {

      console.log(data);
      this.listaGastos.push(data)
      this.restante = this.restante - data.cantidad
    });

  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoServic.presupuesto
    this.restante = this._presupuestoServic.restante
  }
  ngOnDestroy(): void {
    this.suscripcio.unsubscribe()
  }

}
