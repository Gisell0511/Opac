import { Component, OnInit, Pipe, ViewChild, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CatalogoService } from '../services/catalogo.service';
import { NgPipesModule } from 'ngx-pipes';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, TableModule, NgPipesModule, CommonModule],
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

}
