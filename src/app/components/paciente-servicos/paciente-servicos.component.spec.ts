import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteServicosComponent } from './paciente-servicos.component';

describe('PacienteServicosComponent', () => {
  let component: PacienteServicosComponent;
  let fixture: ComponentFixture<PacienteServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteServicosComponent]
    });
    fixture = TestBed.createComponent(PacienteServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
