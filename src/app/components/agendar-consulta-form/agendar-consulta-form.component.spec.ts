import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarConsultaFormComponent } from './agendar-consulta-form.component';

describe('AgendarConsultaFormComponent', () => {
  let component: AgendarConsultaFormComponent;
  let fixture: ComponentFixture<AgendarConsultaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarConsultaFormComponent]
    });
    fixture = TestBed.createComponent(AgendarConsultaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
