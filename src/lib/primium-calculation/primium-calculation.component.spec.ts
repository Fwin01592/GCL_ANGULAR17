import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiumCalculationComponent } from './primium-calculation.component';

describe('PrimiumCalculationComponent', () => {
  let component: PrimiumCalculationComponent;
  let fixture: ComponentFixture<PrimiumCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimiumCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimiumCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
