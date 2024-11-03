import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHistoricoAgendamentosComponent } from './paciente-historico-agendamentos.component';

describe('PacienteHistoricoAgendamentosComponent', () => {
  let component: PacienteHistoricoAgendamentosComponent;
  let fixture: ComponentFixture<PacienteHistoricoAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteHistoricoAgendamentosComponent]
    });
    fixture = TestBed.createComponent(PacienteHistoricoAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
