import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-servicios-catalogos',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './servicios-catalogos.component.html',
  styleUrl: './servicios-catalogos.component.css'
})
export class ServiciosCatalogosComponent {

  items: MenuItem[] = [];


}
