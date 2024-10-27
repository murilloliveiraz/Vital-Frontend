import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoricoAgendamentosComponent } from './admin-historico-agendamentos.component';

describe('AdminHistoricoAgendamentosComponent', () => {
  let component: AdminHistoricoAgendamentosComponent;
  let fixture: ComponentFixture<AdminHistoricoAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHistoricoAgendamentosComponent]
    });
    fixture = TestBed.createComponent(AdminHistoricoAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
