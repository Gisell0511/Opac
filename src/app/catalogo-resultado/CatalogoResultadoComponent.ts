import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-catalogo-resultado',
  standalone: true,
  imports: [],
  templateUrl: './catalogo-resultado.component.html',
  styleUrl: './catalogo-resultado.component.css',
})
export class CatalogoResultadoComponent {
  @Input() tipoR!: number;
  @Output() return = new EventEmitter();
  @Input() tipoC!: string;
  @Input() set result(data: any) {
    if (this.tipoR == 1) {
      this.r1 = data;
    } else {
      if (this.tipoR == 2) {
        this.r2 = data;
      }
    }
  };
  public r1: any;
  public r2: any;




}
