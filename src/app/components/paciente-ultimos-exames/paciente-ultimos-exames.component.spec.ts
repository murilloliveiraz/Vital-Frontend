import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteUltimosExamesComponent } from './paciente-ultimos-exames.component';

describe('PacienteUltimosExamesComponent', () => {
  let component: PacienteUltimosExamesComponent;
  let fixture: ComponentFixture<PacienteUltimosExamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteUltimosExamesComponent]
    });
    fixture = TestBed.createComponent(PacienteUltimosExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
