import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdicionarServicoAoHospitalComponent } from './admin-adicionar-servico-ao-hospital.component';

describe('AdminAdicionarServicoAoHospitalComponent', () => {
  let component: AdminAdicionarServicoAoHospitalComponent;
  let fixture: ComponentFixture<AdminAdicionarServicoAoHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAdicionarServicoAoHospitalComponent]
    });
    fixture = TestBed.createComponent(AdminAdicionarServicoAoHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
