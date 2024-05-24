import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterLink } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { CommonModule } from '@angular/common';
import { CatalogoResultadoComponent } from "../../catalogo-resultado/CatalogoResultadoComponent";



@Component({
    selector: 'app-catalogos',
    standalone: true,
    templateUrl: './catalogos.component.html',
    styleUrl: './catalogos.component.css',
    imports: [RouterLink, FormsModule, PanelMenuModule, CascadeSelectModule, InputTextModule, ButtonModule, DropdownModule, CommonModule, CatalogoResultadoComponent]
})
export class CatalogosComponent implements OnInit {
  public show: boolean = true;
  public palabra!: string;
  public result: any;

  public catalogos: any = [
    {
      name: 'Catalogos Corsalud',
      id: '1'
    }
  ];
  public catalogo:any
  public tipoC = 'F';

  // constructor(private readonly catalogoService: CatalogoService){}
  private catalogoService = inject(CatalogoService);

  ngOnInit() {
    this.getCatalogos()
  }


  catalogoSeleccionado: string = ''
  tipoConsulta: any[] = [
    {
      name: 'Todos los campos',
      id: '0'
    },
    {
      name: 'Autor',
      id: '1'
    },
    {
      name: 'Titulo',
      id: '2'
    },
    {
      name: 'Materia',
      id: '3'
    }
  ]
  tipoConsultaSeleccionado: string = ''
  consultaUsuario: string = ''

  getCatalogos() {
    this.catalogoService.getCatalogos().subscribe((catalogos: any) => {
      console.log({ catalogos })
      this.catalogos = catalogos
      this.catalogo = this.catalogos[0].tipoCatalogo
    })
  }

  buscarPalabra(){
    console.log('buscar', this.consultaUsuario)
    if(this.catalogo != '' ){
      this.catalogoService.getConsulta(this.catalogo, this.tipoC, this.consultaUsuario).subscribe((data:any)=>{
        console.log({data})
        this.result=data;
        if(this.result.length > 0){
          this.show = false;
      }
    });

    }
  }


  public return(): void{
    this.show = true;
    this.palabra='';

  }


}
