import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosComponent } from './medicos.component';

describe('MedicosComponent', () => {
  let component: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicosComponent]
    });
    fixture = TestBed.createComponent(MedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
