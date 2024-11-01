import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoExameDetalhesComponent } from './medico-exame-detalhes.component';

describe('MedicoExameDetalhesComponent', () => {
  let component: MedicoExameDetalhesComponent;
  let fixture: ComponentFixture<MedicoExameDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoExameDetalhesComponent]
    });
    fixture = TestBed.createComponent(MedicoExameDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
