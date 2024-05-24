import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';



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
  public detalles: any;
  public detallesNotas: any;
  public temas: any;
  public otros: any;
  public existencia: any;
  public marc: any;
  public isbd: any;



  private _CatalogosService = inject(CatalogoService);

  public getDetalles(ficha: number): void {
    this._CatalogosService.getLibrosDatalles(ficha).subscribe(
      data => { this.detalles = data }
    );
  }
  public getDetallesNotas(ficha: number): void {
    this._CatalogosService.getLibrosDetallesNotas(ficha).subscribe(
      data => { this.detallesNotas = data }
    );
  }
  public getDetallesTemas(ficha: number): void {
    this._CatalogosService.getLibrosDetallesTemas(ficha).subscribe(
      data => { this.temas = data }
    );
  }
  public getDetallesOtros(ficha: number): void {
    this._CatalogosService.getLibrosDetallesOtros(ficha).subscribe(
      data => { this.otros = data }
    );
  }
  public getDetallesExistencia(ficha: number): void {
    this._CatalogosService.getLibrosDetallesExistencia(ficha).subscribe(
      data => { this.existencia = data }
    );
  }
  public getDetallesMarc(ficha: number): void {
    this._CatalogosService.getLibrosDetallesMarc(ficha).subscribe(
      data => { this.marc = data }
    );
  }
  public getDetallesISDB(ficha: number): void {
    this._CatalogosService.getLibrosDetallesISDB(ficha).subscribe(
      data => { this.isbd = data }
    );
  }


}
