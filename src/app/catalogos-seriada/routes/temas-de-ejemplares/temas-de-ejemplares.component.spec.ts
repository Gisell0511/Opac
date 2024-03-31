import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasDeEjemplaresComponent } from './temas-de-ejemplares.component';

describe('TemasDeEjemplaresComponent', () => {
  let component: TemasDeEjemplaresComponent;
  let fixture: ComponentFixture<TemasDeEjemplaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemasDeEjemplaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemasDeEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
