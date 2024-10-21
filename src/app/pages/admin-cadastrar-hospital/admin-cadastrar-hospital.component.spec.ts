import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarHospitalComponent } from './admin-cadastrar-hospital.component';

describe('AdminCadastrarHospitalComponent', () => {
  let component: AdminCadastrarHospitalComponent;
  let fixture: ComponentFixture<AdminCadastrarHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarHospitalComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
