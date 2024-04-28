import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Image, ImageModule } from 'primeng/image';

@Component({
  selector: 'app-circulacion-digital',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule, ImageModule],
  templateUrl: './circulacion-digital.component.html',
  styleUrl: './circulacion-digital.component.css'
})
export class CirculacionDigitalComponent {

}
