import { Component, OnInit, Input, DoCheck , ViewChild, HostListener, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { Slide } from '../../../const';
import { CatalogoService } from '../../../services/catalogo.service';



@Component({
  selector: 'app-seriadas-resultado',
  templateUrl: './seriadas-resultado.component.html',
  styleUrls: ['./seriadas-resultado.component.css'],
  animations: [Slide],
  standalone: true,


})
export class SeriadasResultadoComponent implements OnInit, DoCheck {
  @ViewChild('sidenav') sidenav: any;
  @Input() set T(data: number) {
    switch (data) {
      case data = 1:
        this.table2 = 1; this.sidenavOpen = false;
        break;
      case data = 2:
        this.table3 = 1;this.sidenavOpen = false;
        break;
      case data = 3:
        this.table4 = 1; this.sidenavOpen = false;
        break;
    }

  }
  private _CatalogoService = inject(CatalogoService);

  public seriadas: any;
  public numSeriada!: number;
  public numTemas!: number;
  public color = 'accent';
  public ff = false;
  public fs = false;
  public ft = false;
  public disabled = false;
  public date1: any;
  public date2: any;
  public checkedDate: boolean = false;
  public checkeds1: boolean = false;
  public checkeds2: boolean = false;
  public palabra!: string;
  public nombreTitulo!: string;
  public nombreTitulo2!: string;
  public checked = true;
  public unchecked = false;
  public cata!: string;
  public sidenavOpen: boolean = true;
  public searchText!: string;
  public form!: FormGroup;
  public catalogos: any;
  public result: any;
  public result2: any;
  public result3: any;
  public result4: any;
  public catalogo: any;
  public table1: number;
  public table2: number;
  public table3: number;
  public table4!: number;
  public resultGenerales: any;
  public resultGenerales2: any;
  public resultTemasSeriadas: any;
  public resultTemasSeriadasResultado: any;
  public resultTemasEjemplares: any;
  public tableR!: number;
  public pdf!: string;
  public dataSource: any;
  public displayedColumns: string[] = ['nombreSeriada', 'digitalizar', 'editorial', 'issn'];
  public wait: boolean = true;
  public pdfview: boolean = false;
  constructor(

    public formBuilder: FormBuilder,
   

    ) {

    this.table1 = 1;
    this.table2 = 0;
    this.table3 = 0;
  }
  ngOnInit() {
    this.getSeriadasDatosGenerales();
    this.getSeriadasTemas();
    this.getSeriadasTemasEjemplares();
    this
    if (window.innerWidth <= 992) {
      this.sidenavOpen = false;
    }
  }
  ngDoCheck(): void {
    if(this.tableR == 1){
      this.sidenavOpen = true;
    }
    if(this.ff != true){
      this.checkedDate = true;
    }else{
      this.checkedDate = false;
    }
    if(this.fs != true){
      this.checkeds1 = true;
    }else{
      this.checkeds1 = false;
    }
    if(this.ft != true){
      this.checkeds2 = true;
    }else{
      this.checkeds2 = false;
    }
  }
  public getCatalogos(): void {
    this._CatalogoService.getCatalogos().subscribe(
      data => { this.catalogo = data }
    );
  }
  @HostListener('window:resize')
  public onWindowResize(): void {
    (window.innerWidth <= 992) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }
  public getImagen(ficha: string): string {
    return 'http://190.68.154.214:8383/OpacService/books/' + ficha + '.jpg';
  }
  public getSeriadasDatosGenerales(): void {
    this._CatalogoService.getSeriadasDatosGenerales('1').subscribe(
      data => {
        this.resultGenerales = data;
        if (this.resultGenerales.length > 0) {
          this.wait = false;
          this.seriadas = data;
        }
      }
    );
  }
  public setNombre1(nombre: string): void {
    this.nombreTitulo = nombre;
  }
  public getSeriadasResultadoDatosGenerales(seriada: number): void {
    this._CatalogoService.getSeriadasResultadoDatosGenerales('1', seriada).subscribe(
      data => {
        this.resultGenerales2 = data;
        if (this.resultGenerales2.length > 0) {
          this.table2 = 0;
          this.table3 = 0;
          this.tableR = 1;
          this.sidenavOpen = false;
        } else {
          // if (this.resultGenerales2.length == 0) {
          //   this.toastr.error('No se encontraron datos', 'Error!', { timeOut: 3000 });
          // }
        }
      }
    );
  }
  public getSeriadasTemas(): void {
    this._CatalogoService.getSeriadasTemas('1').subscribe(
      data => { this.resultTemasSeriadas = data; }
    );
  }
  public getSeriadasTemasResultado(data: any): void {
    this._CatalogoService.getSeriadasTemasResultado('1', data.idTema).subscribe(
      data => {
        this.resultGenerales = data;
        if(this.resultGenerales.length > 0){ this.sidenavOpen = true;}
      }
    );
  }
  public getSeriadasTemasEjemplares(): void {
    this._CatalogoService.getSeriadasTemasEjemplares('1').subscribe(
      data => { this.resultTemasEjemplares = data }
    );
  }
  public getSeriadasTemasEjemplaresResultado(tema: number): void {
    this._CatalogoService.getSeriadasTemasEjemplaresResultado('1', tema).subscribe(
      data => {
        this.resultGenerales2 = data,
          console.log(data);
        if (this.resultGenerales2.length > 0) {
          this.table2 = 0;
          this.table3 = 0;
          this.tableR = 1;
        // } else {
        //   if (this.resultGenerales2.length == 0) {
        //     this.toastr.error('No se encontraron datos', 'Error!', { timeOut: 3000 });
        //   }
        }
      }
    );
  }
  public tab(state: number) {
    switch (state) {
      case state = 1:
        this.table1 = 1;
        this.table2 = 0;
        this.table3 = 0;
        this.table4 = 0;
        break;
      case state = 2:
        this.table1 = 0;
        this.table2 = 1;
        this.table3 = 0;
        this.table4 = 0;
        this.tableR = 0;
        break;
      case state = 3:
        this.table1 = 0;
        this.table2 = 0;
        this.table3 = 1;
        this.table4 = 0;
        this.tableR = 0;
        this.sidenavOpen = false;
        break;
      case state = 4:
        this.table1 = 0;
        this.table2 = 0;
        this.table3 = 0;
        this.table4 = 1;
        this.tableR = 0;
        this.sidenavOpen = false;
        break;
    }
  }


  public verPdf(pdf: any): void {
    this.pdf = 'http://190.68.154.214:8383/OpacService/pdf/'+pdf;
    window.open(this.pdf.toString())
  }
  public getConsulta(){
    if(this.ff == false){
      this.date1 = null; this.date2=null
    }
    if(this.fs == false){
      this.numSeriada = 0;
    }
    if(this.ft == false){
      this.numTemas = 0;
    }
    // if(this.palabra == '' || this.palabra == null){
    //   this.toastr.info('Debe Ingresar una Palabra a Consultar', 'Warning!', { timeOut: 3000 });
    // }else{
      this._CatalogoService.getSeriadasTextoCompleto(this.date1, this.date2, this.numSeriada, this.numTemas).subscribe(
        data => {
          this.resultGenerales2 = data;
        if (this.resultGenerales2.length > 0) {
          this.table2 = 0;
          this.table3 = 0;
          this.table4 = 0;
          this.tableR = 1;
        } else {
          // if (this.resultGenerales2.length == 0) {
          //   this.toastr.error('No se encontraron datos', 'Error!', { timeOut: 3000 });
          // }
        }
        }
      );
    }
  }
