import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLoginFormComponent } from './adm-login-form.component';

describe('AdmLoginFormComponent', () => {
  let component: AdmLoginFormComponent;
  let fixture: ComponentFixture<AdmLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmLoginFormComponent]
    });
    fixture = TestBed.createComponent(AdmLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
