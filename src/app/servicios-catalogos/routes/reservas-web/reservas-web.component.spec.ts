import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasWebComponent } from './reservas-web.component';

describe('ReservasWebComponent', () => {
  let component: ReservasWebComponent;
  let fixture: ComponentFixture<ReservasWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservasWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
