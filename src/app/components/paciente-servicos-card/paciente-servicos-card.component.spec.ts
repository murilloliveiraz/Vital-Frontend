import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteServicosCardComponent } from './paciente-servicos-card.component';

describe('PacienteServicosCardComponent', () => {
  let component: PacienteServicosCardComponent;
  let fixture: ComponentFixture<PacienteServicosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteServicosCardComponent]
    });
    fixture = TestBed.createComponent(PacienteServicosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
