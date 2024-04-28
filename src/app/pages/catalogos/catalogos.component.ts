import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterLink } from '@angular/router';
import { CatalogoService } from '../../services/catalogo/catalogo.service';


@Component({
  selector: 'app-catalogos',
  standalone: true,
  imports: [RouterLink, FormsModule, PanelMenuModule, CascadeSelectModule, InputTextModule, ButtonModule, DropdownModule],
  templateUrl: './catalogos.component.html',
  styleUrl: './catalogos.component.css'
})
export class CatalogosComponent implements OnInit {

  public catalogos: any = [
    {
      name: 'Catalogos Corsalud',
      id: '1'
    }
  ];
  public catalogo:any
  public tipoC = 'F';

  constructor(private readonly catalogoService: CatalogoService){}
  // private catalogoService = inject(CatalogoService);

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
    // // this.catalogoService.getCatalogos().subscribe((catalogos: any) => {
    //   console.log({ catalogos })
    //   this.catalogos = catalogos
    //   this.catalogo = this.catalogos[0].tipoCatalogo
    // })
  }

  buscarPalabra(){
    console.log('buscar', this.consultaUsuario)
    if(this.catalogo != '' ){
      this.catalogoService.buscarPalabra(this.catalogo, this.tipoC, this.consultaUsuario).subscribe((data:any)=>{
        console.log({data})
      })
    }
  }

}
