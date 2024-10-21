import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarMedicoComponent } from './admin-cadastrar-medico.component';

describe('AdminCadastrarMedicoComponent', () => {
  let component: AdminCadastrarMedicoComponent;
  let fixture: ComponentFixture<AdminCadastrarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarMedicoComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
