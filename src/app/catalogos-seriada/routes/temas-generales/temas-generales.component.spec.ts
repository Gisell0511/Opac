import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasGeneralesComponent } from './temas-generales.component';

describe('TemasGeneralesComponent', () => {
  let component: TemasGeneralesComponent;
  let fixture: ComponentFixture<TemasGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemasGeneralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
