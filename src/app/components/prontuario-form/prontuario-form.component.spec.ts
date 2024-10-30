import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioFormComponent } from './prontuario-form.component';

describe('ProntuarioFormComponent', () => {
  let component: ProntuarioFormComponent;
  let fixture: ComponentFixture<ProntuarioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioFormComponent]
    });
    fixture = TestBed.createComponent(ProntuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
