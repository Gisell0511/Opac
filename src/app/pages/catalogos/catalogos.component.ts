import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CatalogoService } from '../../services/catalogo.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalogos',
  standalone: true,
  imports: [DropdownModule, PanelMenuModule, HttpClientModule],
  templateUrl: './catalogos.component.html',
  styleUrl: './catalogos.component.css'
})
export class CatalogosComponent {

  public catalogos: any
  public catalagoSelected: any

  public service = inject(CatalogoService)

  // public getCatalogos() {
  //   this.service.getCatalogos().subscribe((data: any) => {
  //     this.catalogos = data
  //     this.catalagoSelected = this.catalogos[0].tipoCatalogo;
  //   })
  // }

}
