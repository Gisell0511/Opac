import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseminacionComponent } from './diseminacion.component';

describe('DiseminacionComponent', () => {
  let component: DiseminacionComponent;
  let fixture: ComponentFixture<DiseminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseminacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiseminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
