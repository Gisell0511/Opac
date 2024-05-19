import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoResultadoComponent } from './CatalogoResultadoComponent';

describe('CatalogoResultadoComponent', () => {
  let component: CatalogoResultadoComponent;
  let fixture: ComponentFixture<CatalogoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoResultadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
