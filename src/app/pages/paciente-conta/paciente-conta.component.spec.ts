import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteContaComponent } from './paciente-conta.component';

describe('PacienteContaComponent', () => {
  let component: PacienteContaComponent;
  let fixture: ComponentFixture<PacienteContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteContaComponent]
    });
    fixture = TestBed.createComponent(PacienteContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
