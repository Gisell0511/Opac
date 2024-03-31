import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoCompletoComponent } from './texto-completo.component';

describe('TextoCompletoComponent', () => {
  let component: TextoCompletoComponent;
  let fixture: ComponentFixture<TextoCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoCompletoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
