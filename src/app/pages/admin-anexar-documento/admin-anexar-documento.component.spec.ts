import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnexarDocumentoComponent } from './admin-anexar-documento.component';

describe('AdminAnexarDocumentoComponent', () => {
  let component: AdminAnexarDocumentoComponent;
  let fixture: ComponentFixture<AdminAnexarDocumentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAnexarDocumentoComponent]
    });
    fixture = TestBed.createComponent(AdminAnexarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
