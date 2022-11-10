import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombredegasto:string
  cantidad:number
  formularioIncorecto:boolean
  textIncorecto:string
  constructor(private _presupuestoServic:PresupuestoService) {
    this.nombredegasto = ""
    this.formularioIncorecto = false
    this.cantidad = 0
    this.textIncorecto = "Nombre gasto o cantidad incorecta"
   }

  ngOnInit(): void {
  }
  agregarGasto(){
    if (this.cantidad > this._presupuestoServic.restante) {
      this.textIncorecto ="te pasaste del presupuesto"
      this.formularioIncorecto = true
      return
    }
    if (this.nombredegasto === "" || this.cantidad <= 0) {
      this.formularioIncorecto = true
      this.textIncorecto = "Nombre gasto o cantidad incorecta"
    }else{

      //creamo el objeto
      const GASTO = {
        nombre: this.nombredegasto,
        cantidad: this.cantidad
      }

      //enviamos el obj a los suscriptores
      this._presupuestoServic.agregarGasto(GASTO)

      //reseteamos el formulario
      this.formularioIncorecto = false
      this.nombredegasto = ""
      this.cantidad = 0
    }
  }

}
