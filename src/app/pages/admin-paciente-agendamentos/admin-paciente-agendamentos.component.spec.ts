import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPacienteAgendamentosComponent } from './admin-paciente-agendamentos.component';

describe('AdminPacienteAgendamentosComponent', () => {
  let component: AdminPacienteAgendamentosComponent;
  let fixture: ComponentFixture<AdminPacienteAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPacienteAgendamentosComponent]
    });
    fixture = TestBed.createComponent(AdminPacienteAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
