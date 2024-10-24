import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicosComponent } from './admin-medicos.component';

describe('AdminMedicosComponent', () => {
  let component: AdminMedicosComponent;
  let fixture: ComponentFixture<AdminMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMedicosComponent]
    });
    fixture = TestBed.createComponent(AdminMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
