import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarAdminComponent } from './admin-cadastrar-admin.component';

describe('AdminCadastrarAdminComponent', () => {
  let component: AdminCadastrarAdminComponent;
  let fixture: ComponentFixture<AdminCadastrarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarAdminComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
