import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-temas-de-ejemplares',
  standalone: true,
  imports: [CardModule, InputTextModule],
  templateUrl: './temas-de-ejemplares.component.html',
  styleUrl: './temas-de-ejemplares.component.css'
})
export class TemasDeEjemplaresComponent {

}
