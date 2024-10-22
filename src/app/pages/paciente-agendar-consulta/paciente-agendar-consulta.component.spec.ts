import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAgendarConsultaComponent } from './paciente-agendar-consulta.component';

describe('PacienteAgendarConsultaComponent', () => {
  let component: PacienteAgendarConsultaComponent;
  let fixture: ComponentFixture<PacienteAgendarConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteAgendarConsultaComponent]
    });
    fixture = TestBed.createComponent(PacienteAgendarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
