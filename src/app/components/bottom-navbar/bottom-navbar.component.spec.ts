import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarComponent } from './bottom-navbar.component';

describe('BottomNavbarComponent', () => {
  let component: BottomNavbarComponent;
  let fixture: ComponentFixture<BottomNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomNavbarComponent]
    });
    fixture = TestBed.createComponent(BottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
