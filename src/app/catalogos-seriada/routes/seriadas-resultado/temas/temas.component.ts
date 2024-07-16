import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {
  @Input() result: any;
  @Output() consultar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public getSeriadasTemasResultado (catalogo: string, idTema: number): void{
    this.consultar.emit({catalogo, idTema})
  }

}
