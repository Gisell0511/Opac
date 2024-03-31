import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasBibliograficasComponent } from './alertas-bibliograficas.component';

describe('AlertasBibliograficasComponent', () => {
  let component: AlertasBibliograficasComponent;
  let fixture: ComponentFixture<AlertasBibliograficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertasBibliograficasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertasBibliograficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
