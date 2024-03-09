import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: "Catalogos",
        icon: 'pi pi-home',
        routerLink: 'catalogos'
      },
      {
        label: 'Explorar',
        icon:'pi pi-search',
        routerLink: 'explorar'
      },
      {
        label: 'Catalogos-seriada',
        icon:'pi-calendar',
        routerLink: 'catalogos-seriada'
      },
      {
        label: 'Servicios-catalogos',
        icon:'pi-calendar',
        routerLink: 'servicios-catalogos'
      },
      {
        label: 'consultas-avanzadas',
        icon: 'pi pi-book',
        // routerLink: 'consultas-avanzadas',
        items: [
          {
            label: 'test',
            icon: 'pi pi-book',
            // routerLink: 'consultas-avanzadas'
          }
          // {
          //   label: 'Autor',
          //   // icon: 'fa fa-sitemap  fa-fw',
          //   // routerLink: 'autor',
          // },
          // {
          //   label: 'Titulo',
          //   // icon: 'fa fa-sitemap  fa-fw',
          //   // routerLink: 'titulo',
          // },
          // {
          //   label: 'Materia',
          //   // icon: 'fa fa-sitemap  fa-fw',
          //   // routerLink: 'materia',
          // },

        ],
      },
    ]
  }
}
