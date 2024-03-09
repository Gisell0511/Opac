import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosSeriadaComponent } from './catalogos-seriada.component';

describe('CatalogosSeriadaComponent', () => {
  let component: CatalogosSeriadaComponent;
  let fixture: ComponentFixture<CatalogosSeriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogosSeriadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogosSeriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
