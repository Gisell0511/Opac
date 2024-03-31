import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculacionDigitalComponent } from './circulacion-digital.component';

describe('CirculacionDigitalComponent', () => {
  let component: CirculacionDigitalComponent;
  let fixture: ComponentFixture<CirculacionDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculacionDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirculacionDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
