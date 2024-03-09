import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCatalogosComponent } from './servicios-catalogos.component';

describe('ServiciosCatalogosComponent', () => {
  let component: ServiciosCatalogosComponent;
  let fixture: ComponentFixture<ServiciosCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosCatalogosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
