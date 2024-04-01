import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-temas-generales',
  standalone: true,
  imports: [CardModule,InputTextModule],
  templateUrl: './temas-generales.component.html',
  styleUrl: './temas-generales.component.css'
})
export class TemasGeneralesComponent {

}
