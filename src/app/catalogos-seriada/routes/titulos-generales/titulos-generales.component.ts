import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-titulos-generales',
  standalone: true,
  imports: [CardModule, InputTextModule],
  templateUrl: './titulos-generales.component.html',
  styleUrl: './titulos-generales.component.css'
})
export class TitulosGeneralesComponent {

}
