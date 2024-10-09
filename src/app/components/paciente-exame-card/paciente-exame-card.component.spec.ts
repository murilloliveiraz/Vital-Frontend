import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteExameCardComponent } from './paciente-exame-card.component';

describe('PacienteExameCardComponent', () => {
  let component: PacienteExameCardComponent;
  let fixture: ComponentFixture<PacienteExameCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteExameCardComponent]
    });
    fixture = TestBed.createComponent(PacienteExameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
