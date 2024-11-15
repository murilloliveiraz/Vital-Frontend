import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaisSliderComponent } from './hospitais-slider.component';

describe('HospitaisSliderComponent', () => {
  let component: HospitaisSliderComponent;
  let fixture: ComponentFixture<HospitaisSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitaisSliderComponent]
    });
    fixture = TestBed.createComponent(HospitaisSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
