import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Image, ImageModule } from 'primeng/image';

@Component({
  selector: 'app-reservas-web',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule, ImageModule],
  templateUrl: './reservas-web.component.html',
  styleUrl: './reservas-web.component.css'
})
export class ReservasWebComponent {

}
