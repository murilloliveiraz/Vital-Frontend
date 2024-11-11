import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProntuarioPreviewComponent } from './registro-prontuario-preview.component';

describe('RegistroProntuarioPreviewComponent', () => {
  let component: RegistroProntuarioPreviewComponent;
  let fixture: ComponentFixture<RegistroProntuarioPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroProntuarioPreviewComponent]
    });
    fixture = TestBed.createComponent(RegistroProntuarioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
