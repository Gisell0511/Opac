import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { CatalogosSeriadaComponent } from './catalogos-seriada/catalogos-seriada.component';
import { ServiciosCatalogosComponent } from './servicios-catalogos/servicios-catalogos.component';
import { ConsultasAvanzadasComponent } from './consultas-avanzadas/consultas-avanzadas.component';
import { AutorComponent } from './consultas-avanzadas/routes/autor/autor.component';
import { MateriaComponent } from './consultas-avanzadas/routes/materia/materia.component';
import { TituloComponent } from './consultas-avanzadas/routes/titulo/titulo.component';
import { TemasDeEjemplaresComponent } from './catalogos-seriada/routes/temas-de-ejemplares/temas-de-ejemplares.component';
import { TemasGeneralesComponent } from './catalogos-seriada/routes/temas-generales/temas-generales.component';
import { TextoCompletoComponent } from './catalogos-seriada/routes/texto-completo/texto-completo.component';
import { TitulosGeneralesComponent } from './catalogos-seriada/routes/titulos-generales/titulos-generales.component';
import { AlertasBibliograficasComponent } from './servicios-catalogos/routes/alertas-bibliograficas/alertas-bibliograficas.component';
import { CirculacionDigitalComponent } from './servicios-catalogos/routes/circulacion-digital/circulacion-digital.component';
import { DiseminacionComponent } from './servicios-catalogos/routes/diseminacion/diseminacion.component';
import { ReservasWebComponent } from './servicios-catalogos/routes/reservas-web/reservas-web.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'catalogos',
        component: CatalogosComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'explorar',
        component: ExplorarComponent
      },
      {
        path: 'catalogos-seriada',
        children: [
              {
                path: 'temas-de-ejemplares',
                component: TemasDeEjemplaresComponent
              },
              {
                path:'temas-generales',
                component: TemasGeneralesComponent
              },
              {
                path: 'texto-completo',
                component: TextoCompletoComponent
              },
              {
                path: 'titulos-generales',
                component: TitulosGeneralesComponent
              }
            ]

      },
      {
        path: 'servicios-catalogos',
        children: [
          {
            path: 'alertas-bibliograficas',
            component: AlertasBibliograficasComponent
          },
          {
            path:'circulacion-digital',
            component: CirculacionDigitalComponent
          },
          {
            path: 'diseminacion',
            component: DiseminacionComponent
          },
          {
            path: 'reservas-web',
            component: ReservasWebComponent
          }
        ]
      },
      {
        path: 'consultas-avanzadas',
        children:[
          {
            path: 'autor',
            component: AutorComponent
          },
          {
            path: 'materia',
            component: MateriaComponent
          },
          {
            path: 'titulo',
            component: TituloComponent
          }
        ]
      }

    ]
  }
];
