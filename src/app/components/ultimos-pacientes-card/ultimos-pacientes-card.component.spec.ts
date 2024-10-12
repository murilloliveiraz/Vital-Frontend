import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosPacientesCardComponent } from './ultimos-pacientes-card.component';

describe('UltimosPacientesCardComponent', () => {
  let component: UltimosPacientesCardComponent;
  let fixture: ComponentFixture<UltimosPacientesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimosPacientesCardComponent]
    });
    fixture = TestBed.createComponent(UltimosPacientesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
