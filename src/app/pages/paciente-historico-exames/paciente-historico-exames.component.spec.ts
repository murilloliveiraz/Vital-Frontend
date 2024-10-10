import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHistoricoExamesComponent } from './paciente-historico-exames.component';

describe('PacienteHistoricoExamesComponent', () => {
  let component: PacienteHistoricoExamesComponent;
  let fixture: ComponentFixture<PacienteHistoricoExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteHistoricoExamesComponent]
    });
    fixture = TestBed.createComponent(PacienteHistoricoExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
