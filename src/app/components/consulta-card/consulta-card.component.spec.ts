import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCardComponent } from './consulta-card.component';

describe('ConsultaCardComponent', () => {
  let component: ConsultaCardComponent;
  let fixture: ComponentFixture<ConsultaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaCardComponent]
    });
    fixture = TestBed.createComponent(ConsultaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
