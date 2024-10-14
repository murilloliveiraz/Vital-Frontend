import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordPopupComponent } from './new-password-popup.component';

describe('NewPasswordPopupComponent', () => {
  let component: NewPasswordPopupComponent;
  let fixture: ComponentFixture<NewPasswordPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPasswordPopupComponent]
    });
    fixture = TestBed.createComponent(NewPasswordPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
