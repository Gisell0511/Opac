import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosGeneralesComponent } from './titulos-generales.component';

describe('TitulosGeneralesComponent', () => {
  let component: TitulosGeneralesComponent;
  let fixture: ComponentFixture<TitulosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitulosGeneralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitulosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
