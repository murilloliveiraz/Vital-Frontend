import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgendamentosComponent } from './admin-agendamentos.component';

describe('AdminAgendamentosComponent', () => {
  let component: AdminAgendamentosComponent;
  let fixture: ComponentFixture<AdminAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAgendamentosComponent]
    });
    fixture = TestBed.createComponent(AdminAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
