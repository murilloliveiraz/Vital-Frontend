import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioSliderComponent } from './prontuario-slider.component';

describe('ProntuarioSliderComponent', () => {
  let component: ProntuarioSliderComponent;
  let fixture: ComponentFixture<ProntuarioSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioSliderComponent]
    });
    fixture = TestBed.createComponent(ProntuarioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
