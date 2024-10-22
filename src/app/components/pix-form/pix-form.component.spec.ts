import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixFormComponent } from './pix-form.component';

describe('PixFormComponent', () => {
  let component: PixFormComponent;
  let fixture: ComponentFixture<PixFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixFormComponent]
    });
    fixture = TestBed.createComponent(PixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
