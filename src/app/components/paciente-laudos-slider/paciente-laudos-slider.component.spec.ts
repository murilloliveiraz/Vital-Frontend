import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteLaudosSliderComponent } from './paciente-laudos-slider.component';

describe('PacienteLaudosSliderComponent', () => {
  let component: PacienteLaudosSliderComponent;
  let fixture: ComponentFixture<PacienteLaudosSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteLaudosSliderComponent]
    });
    fixture = TestBed.createComponent(PacienteLaudosSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
