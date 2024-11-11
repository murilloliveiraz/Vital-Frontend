import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProntuarioDetalhesComponent } from './registro-prontuario-detalhes.component';

describe('RegistroProntuarioDetalhesComponent', () => {
  let component: RegistroProntuarioDetalhesComponent;
  let fixture: ComponentFixture<RegistroProntuarioDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroProntuarioDetalhesComponent]
    });
    fixture = TestBed.createComponent(RegistroProntuarioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
