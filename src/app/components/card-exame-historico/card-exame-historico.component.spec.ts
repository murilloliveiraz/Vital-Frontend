import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExameHistoricoComponent } from './card-exame-historico.component';

describe('CardExameHistoricoComponent', () => {
  let component: CardExameHistoricoComponent;
  let fixture: ComponentFixture<CardExameHistoricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExameHistoricoComponent]
    });
    fixture = TestBed.createComponent(CardExameHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
