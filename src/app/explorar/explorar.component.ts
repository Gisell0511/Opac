import { Component, OnInit, Pipe, ViewChild, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CatalogoService } from '../services/catalogo.service';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, TableModule, NgPipesModule, CommonModule,
    SidebarModule, ToolbarModule, ScrollPanelModule, FormsModule],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})

export class ExplorarComponent implements OnInit {

  border: any;
  public catalogo: any;
  public result: any;
  public r2: boolean = false;
  public r3: boolean = false;
  public r4: boolean = false;
  public nombreTitulo2!: string;
  public result2: any;
  public nombreTitulo!: string;
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen: boolean = true;
  public result3: any;
  public result4: any;

  ngOnInit(): void {
    this.getCatalogos();
    if (window.innerWidth <= 992) {
      this.sidenavOpen = false;
    }
    this.buscar();
    if (window.innerWidth <= 992) {
      this.sidenavOpen = true;
    }
  }

  private _CatalogosService = inject(CatalogoService);

  public getCatalogos() {
    this._CatalogosService.getCatalogos().subscribe((data: any) => {
      this.catalogo = data
    })
  }

  public buscar() {
    this._CatalogosService.ExplorarCatatlogo1(1).subscribe(
      data => {
        console.log(data)
        this.result = data;
      }
    );
  }

  public verCodigo(area: number): string {
    return area + '00';
  }

  public setTitulo2(nombre: string): void {
    this.nombreTitulo2 = nombre;
  }

  public explorar2(area: number) {
    this.nombreTitulo2 = '';
    this.r4 = false;
    this.r3 = false;
    this.r2 = true;
    this._CatalogosService.ExplorarCatatlogo2(1, area).subscribe(
      data => {
        this.result2 = data;
        if (this.result2.length > 0) { this.r2 = true; }
      }
    );
    if (window.innerWidth <= 992) {
      this.sidenav.close();
    }
  }

  public setTitulo(nombre: string): void {
    this.nombreTitulo = nombre;
  }

  public explorar3(area: number) {
    this.r2 = false;
    this.r3 = true;
    this._CatalogosService.ExplorarCatatlogo3(1, area).subscribe(
      data => {
        this.result3 = data;
        if (this.result3.length > 0) { this.r3 = true; }
      }
    );
  }

  public verCodigo2(area: number): string {
    return area + '0';
  }

}
