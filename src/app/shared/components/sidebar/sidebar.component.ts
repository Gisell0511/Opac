import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: []
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
        label: 'catalogos seriadas',
        icon: 'pi calenda',
        items: [
          {
            label: 'temas de ejemplares',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'catalogos-seriada/temas-de-ejemplares',
          },
          {
            label: 'temas generales',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'catalogos-seriada/temas-generales',
          },
          {
            label: 'texto completo',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'catalogos-seriada/texto-completo',
          },
          {
            label: 'Titulos generales',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'catalogos-seriada/seriada1',
          }

        ],
      },
      {
        label: 'Servicios Catalogos',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Alertas Bibliograficas',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'servicios-catalogos/alertas-bibliograficas',
          },
          {
            label: 'Circulacion Digital',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'servicios-catalogos/circulacion-digital',
          },
          {
            label: 'Diseminacion',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'servicios-catalogos/diseminacion',
          },
          {
            label: 'Reservas Web',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'servicios-catalogos/reservas-web',
          }

        ],
      },
      {
        label: 'consultas avanzadas',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Autor',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'consultas-avanzadas/autor',
          },
          {
            label: 'Titulo',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'consultas-avanzadas/titulo',
          },
          {
            label: 'Materia',
            icon: 'fa fa-sitemap  fa-fw',
            routerLink: 'consultas-avanzadas/materia',
          },

        ],
      },
    ]
  }
}
