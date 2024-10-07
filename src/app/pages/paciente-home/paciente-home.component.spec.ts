import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHomeComponent } from './paciente-home.component';

describe('PacienteHomeComponent', () => {
  let component: PacienteHomeComponent;
  let fixture: ComponentFixture<PacienteHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteHomeComponent]
    });
    fixture = TestBed.createComponent(PacienteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
