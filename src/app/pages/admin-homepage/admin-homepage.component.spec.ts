import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomepageComponent } from './admin-homepage.component';

describe('AdminHomepageComponent', () => {
  let component: AdminHomepageComponent;
  let fixture: ComponentFixture<AdminHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHomepageComponent]
    });
    fixture = TestBed.createComponent(AdminHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
