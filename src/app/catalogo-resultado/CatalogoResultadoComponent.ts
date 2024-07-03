import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-catalogo-resultado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    SidebarModule,
    ToolbarModule,
    ScrollPanelModule,
    PipesModule,
    ListboxModule
  ],
  templateUrl: './catalogo-resultado.component.html',
  styleUrls: ['./catalogo-resultado.component.css'],
})
export class CatalogoResultadoComponent {
  @Input() tipoR!: number;
  @Output() return = new EventEmitter();
  @Input() tipoC!: string;
  @Input() set result(data: any) {
    console.log(data)
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
  public sidenavOpen: boolean = true;
  public searchText!: string;
  public fichaimg!: string;
  public tab1 = 0;
  public tab2 = 0;
  public tab3 = 0;
  public tab4 = 0;
  public notas: any;

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

  public viewDetail(item: any) {
    this.fichaimg = item.woResultadoOpacPK.ficha;
    this.getDetalles(item.woResultadoOpacPK.ficha);
    this.getDetallesNotas(item.woResultadoOpacPK.ficha);
    this.getDetallesTemas(item.woResultadoOpacPK.ficha);
    this.getDetallesOtros(item.woResultadoOpacPK.ficha);
    this.getDetallesExistencia(item.woResultadoOpacPK.ficha);
    this.getDetallesMarc(item.woResultadoOpacPK.ficha);
    this.getDetallesISDB(item.woResultadoOpacPK.ficha);

    this.tab1 = 1;
    this.tab2 = 0;
    this.tab3 = 0;
    this.tab4 = 0;
  }

  public getDetallesISDB(ficha: number): void {
    this._CatalogosService.getLibrosDetallesISDB(ficha).subscribe(
      data => { this.isbd = data }
    );
  }

  public getImagen(ficha: string): string {
    let imagen: string = 'http://190.68.154.214:8383/OpacService/books/' + ficha + '.jpg';
    return imagen;
  }

   public goBack(): void {
    if (this.r2 != null && this.r1 != null) {
      this.tipoR = 2;
      this.r1 = null;
    } else {
      if (this.r2 == null) {
        this.return.emit();
        this.r1 == null;
        this.r2 == null;
      } else {
        this.r1 = null;
        this.return.emit();
        this.r2 = null;
      }
    }
  }

  public tab(state: number) {
    switch (state) {
      case state = 1:
        this.tab1 = 1;
        this.tab2 = 0;
        this.tab3 = 0;
        this.tab4 = 0;
        break;
      case state = 2:
        this.tab1 = 0;
        this.tab2 = 1;
        this.tab3 = 0;
        this.tab4 = 0;
        break;
      case state = 3:
        this.tab1 = 0;
        this.tab2 = 0;
        this.tab3 = 1;
        this.tab4 = 0;
        break;
      case state = 4:
        this.tab1 = 0;
        this.tab2 = 0;
        this.tab3 = 0;
        this.tab4 = 1;
        break;
    }
  }
}
