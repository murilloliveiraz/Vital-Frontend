import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarExameFormComponent } from './agendar-exame-form.component';

describe('AgendarExameFormComponent', () => {
  let component: AgendarExameFormComponent;
  let fixture: ComponentFixture<AgendarExameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarExameFormComponent]
    });
    fixture = TestBed.createComponent(AgendarExameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
