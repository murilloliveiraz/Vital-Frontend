import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordPopupComponent } from './reset-password-pop-up.component';

describe('ResetPasswordPopUpComponent', () => {
  let component: ResetPasswordPopupComponent;
  let fixture: ComponentFixture<ResetPasswordPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordPopupComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
