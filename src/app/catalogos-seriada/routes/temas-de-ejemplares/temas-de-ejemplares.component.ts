import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-temas-de-ejemplares',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule],
  templateUrl: './temas-de-ejemplares.component.html',
  styleUrl: './temas-de-ejemplares.component.css'
})
export class TemasDeEjemplaresComponent {

}
