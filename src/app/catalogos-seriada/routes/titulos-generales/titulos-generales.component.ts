import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SeriadasResultadoComponent } from '../seriadas-resultado/seriadas-resultado.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-titulos-generales',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, TableModule, SeriadasResultadoComponent, CommonModule],
  templateUrl: './titulos-generales.component.html',
  styleUrl: './titulos-generales.component.css'
})
export class TitulosGeneralesComponent {
  ngOnInit(): void {
   console.log('hola')
  }
}
