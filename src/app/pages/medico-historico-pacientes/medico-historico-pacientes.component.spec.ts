import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHistoricoPacientesComponent } from './medico-historico-pacientes.component';

describe('MedicoHistoricoPacientesComponent', () => {
  let component: MedicoHistoricoPacientesComponent;
  let fixture: ComponentFixture<MedicoHistoricoPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoHistoricoPacientesComponent]
    });
    fixture = TestBed.createComponent(MedicoHistoricoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
