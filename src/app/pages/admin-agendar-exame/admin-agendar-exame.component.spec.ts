import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgendarExameComponent } from './admin-agendar-exame.component';

describe('AdminAgendarExameComponent', () => {
  let component: AdminAgendarExameComponent;
  let fixture: ComponentFixture<AdminAgendarExameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAgendarExameComponent]
    });
    fixture = TestBed.createComponent(AdminAgendarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
