import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoConsultaDetalhesComponent } from './medico-consulta-detalhes.component';

describe('MedicoConsultaDetalhesComponent', () => {
  let component: MedicoConsultaDetalhesComponent;
  let fixture: ComponentFixture<MedicoConsultaDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoConsultaDetalhesComponent]
    });
    fixture = TestBed.createComponent(MedicoConsultaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
