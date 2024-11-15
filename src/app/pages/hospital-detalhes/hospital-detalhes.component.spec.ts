import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetalhesComponent } from './hospital-detalhes.component';

describe('HospitalDetalhesComponent', () => {
  let component: HospitalDetalhesComponent;
  let fixture: ComponentFixture<HospitalDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalDetalhesComponent]
    });
    fixture = TestBed.createComponent(HospitalDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
