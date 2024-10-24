import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCardComponent } from './hospital-card.component';

describe('HospitalCardComponent', () => {
  let component: HospitalCardComponent;
  let fixture: ComponentFixture<HospitalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalCardComponent]
    });
    fixture = TestBed.createComponent(HospitalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
