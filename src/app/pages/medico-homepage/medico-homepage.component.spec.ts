import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHomepageComponent } from './medico-homepage.component';

describe('MedicoHomepageComponent', () => {
  let component: MedicoHomepageComponent;
  let fixture: ComponentFixture<MedicoHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoHomepageComponent]
    });
    fixture = TestBed.createComponent(MedicoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
