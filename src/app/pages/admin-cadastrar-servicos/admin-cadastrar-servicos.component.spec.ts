import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarServicosComponent } from './admin-cadastrar-servicos.component';

describe('AdminCadastrarServicosComponent', () => {
  let component: AdminCadastrarServicosComponent;
  let fixture: ComponentFixture<AdminCadastrarServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarServicosComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
