import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicosComponent } from './admin-servicos.component';

describe('AdminServicosComponent', () => {
  let component: AdminServicosComponent;
  let fixture: ComponentFixture<AdminServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminServicosComponent]
    });
    fixture = TestBed.createComponent(AdminServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
