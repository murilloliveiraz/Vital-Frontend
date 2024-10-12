import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContaUsuarioComponent } from './form-conta-usuario.component';

describe('FormContaUsuarioComponent', () => {
  let component: FormContaUsuarioComponent;
  let fixture: ComponentFixture<FormContaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContaUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormContaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
