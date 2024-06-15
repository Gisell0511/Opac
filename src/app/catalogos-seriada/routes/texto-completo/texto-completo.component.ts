import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FocusTrapModule } from 'primeng/focustrap';

@Component({
  selector: 'app-texto-completo',
  standalone: true,
  imports: [ButtonModule,CardModule,InputTextModule,TableModule,FocusTrapModule],
  templateUrl: './texto-completo.component.html',
  styleUrl: './texto-completo.component.css'
})
export class TextoCompletoComponent  implements OnInit {

    public tipoT: number = 3;
    constructor() { }

    ngOnInit() {
    }

}
