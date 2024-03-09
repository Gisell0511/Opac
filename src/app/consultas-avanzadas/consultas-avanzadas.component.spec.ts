import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAvanzadasComponent } from './consultas-avanzadas.component';

describe('ConsultasAvanzadasComponent', () => {
  let component: ConsultasAvanzadasComponent;
  let fixture: ComponentFixture<ConsultasAvanzadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultasAvanzadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasAvanzadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
