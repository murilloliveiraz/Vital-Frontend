import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitaisComponent } from './admin-hospitais.component';

describe('AdminHospitaisComponent', () => {
  let component: AdminHospitaisComponent;
  let fixture: ComponentFixture<AdminHospitaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHospitaisComponent]
    });
    fixture = TestBed.createComponent(AdminHospitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
