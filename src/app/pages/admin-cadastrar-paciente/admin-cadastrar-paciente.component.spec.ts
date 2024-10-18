import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarPacienteComponent } from './admin-cadastrar-paciente.component';

describe('AdminCadastrarPacienteComponent', () => {
  let component: AdminCadastrarPacienteComponent;
  let fixture: ComponentFixture<AdminCadastrarPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarPacienteComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
