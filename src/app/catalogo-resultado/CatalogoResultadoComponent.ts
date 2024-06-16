import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo-resultado',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, TableModule, NgPipesModule, CommonModule],
  templateUrl: './catalogo-resultado.component.html',
  styleUrls: ['./catalogo-resultado.component.css'],
})
export class CatalogoResultadoComponent {
  @Input() tipoR!: number;
  @Output() return = new EventEmitter();
  @Input() tipoC!: string;
  @Input() set result(data: any) {
    if (this.tipoR === 1) {
      this.r1 = data;
    } else if (this.tipoR === 2) {
      this.r2 = data;
      this.originalData = data; // Guardamos los datos originales
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
  private originalData: any; // Variable para almacenar los datos originales

  private _CatalogosService = inject(CatalogoService);

  public getDetalles(ficha: number): void {
    this._CatalogosService.getLibrosDatalles(ficha).subscribe(
      data => { this.detalles = data; }
    );
  }
  public getDetallesNotas(ficha: number): void {
    this._CatalogosService.getLibrosDetallesNotas(ficha).subscribe(
      data => { this.detallesNotas = data; }
    );
  }
  public getDetallesTemas(ficha: number): void {
    this._CatalogosService.getLibrosDetallesTemas(ficha).subscribe(
      data => { this.temas = data; }
    );
  }
  public getDetallesOtros(ficha: number): void {
    this._CatalogosService.getLibrosDetallesOtros(ficha).subscribe(
      data => { this.otros = data; }
    );
  }
  public getDetallesExistencia(ficha: number): void {
    this._CatalogosService.getLibrosDetallesExistencia(ficha).subscribe(
      data => { this.existencia = data; }
    );
  }
  public getDetallesMarc(ficha: number): void {
    this._CatalogosService.getLibrosDetallesMarc(ficha).subscribe(
      data => { this.marc = data; }
    );
  }
  public getDetallesISBD(ficha: number): void {
    this._CatalogosService.getLibrosDetallesISDB(ficha).subscribe(
      data => { this.isbd = data; }
    );
  }

  public onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    if (query) {
      // Filtrar resultados en r2 basado en la búsqueda
      this.r2 = this.originalData.filter((item: any) =>
        item.estandar.toLowerCase().includes(query.toLowerCase()) ||
        item.existencias.toLowerCase().includes(query.toLowerCase()) ||
        item.marc.toLowerCase().includes(query.toLowerCase()) ||
        item.isbd.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      // Si el query está vacío, restauramos el array original
      this.r2 = this.originalData;
    }
  }
}
