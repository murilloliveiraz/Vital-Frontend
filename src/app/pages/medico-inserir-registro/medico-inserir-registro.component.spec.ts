import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoInserirRegistroComponent } from './medico-inserir-registro.component';

describe('MedicoInserirRegistroComponent', () => {
  let component: MedicoInserirRegistroComponent;
  let fixture: ComponentFixture<MedicoInserirRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoInserirRegistroComponent]
    });
    fixture = TestBed.createComponent(MedicoInserirRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
