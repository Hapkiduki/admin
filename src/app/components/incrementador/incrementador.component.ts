import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string;
  @Input() porcentaje: number;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.porcentaje = 50;
    this.leyenda = 'Leyenda';
   }

  ngOnInit() {
    console.log('porcentaje', this.porcentaje);
  }

  cambiarValor( valor: number ) {
    if ( this.porcentaje >= 100  && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if ( this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje);
  }

}
