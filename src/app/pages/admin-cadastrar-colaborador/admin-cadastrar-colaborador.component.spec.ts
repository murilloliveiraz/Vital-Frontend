import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarColaboradorComponent } from './admin-cadastrar-colaborador.component';

describe('AdminCadastrarColaboradorComponent', () => {
  let component: AdminCadastrarColaboradorComponent;
  let fixture: ComponentFixture<AdminCadastrarColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCadastrarColaboradorComponent]
    });
    fixture = TestBed.createComponent(AdminCadastrarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
