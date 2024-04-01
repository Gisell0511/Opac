import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-texto-completo',
  standalone: true,
  imports: [CardModule,InputTextModule],
  templateUrl: './texto-completo.component.html',
  styleUrl: './texto-completo.component.css'
})
export class TextoCompletoComponent {

}
