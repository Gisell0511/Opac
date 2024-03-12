import { Component, OnInit, inject } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-catalogos',
  standalone: true,
  imports: [FormsModule, PanelMenuModule, CascadeSelectModule, InputTextModule, ButtonModule, DropdownModule ],
  templateUrl: './catalogos.component.html',
  styleUrl: './catalogos.component.css'
})
export class CatalogosComponent implements OnInit {

  public catalogos:any

  //constructor(private readonly catalogoService: CatalogoService){}
  private catalogoService = inject(CatalogoService);

  ngOnInit() {
    this.buscarConsulta()
  }

  // catalogos: any[] = [
  //   {
  //     name: 'Corsalud',
  //     id: '0'
  //   }
  // ]

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

  buscarConsulta() {
    console.log('buscar', this.consultaUsuario)
    this.catalogoService.getCatalogos().subscribe((catalogos: any) => {
      console.log({ catalogos })
      this.catalogos = catalogos
    })
  }

}
