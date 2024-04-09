import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-alertas-bibliograficas',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule,GalleriaModule],
  templateUrl: './alertas-bibliograficas.component.html',
  styleUrl: './alertas-bibliograficas.component.css'
})
export class AlertasBibliograficasComponent {

}
