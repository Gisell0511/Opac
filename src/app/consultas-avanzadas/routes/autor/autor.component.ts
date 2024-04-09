import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule,StepsModule],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

}
