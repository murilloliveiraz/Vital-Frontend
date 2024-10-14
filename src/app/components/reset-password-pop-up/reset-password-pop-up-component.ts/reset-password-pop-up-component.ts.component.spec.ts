import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordPopUpComponentTsComponent } from './reset-password-pop-up-component.ts.component';

describe('ResetPasswordPopUpComponentTsComponent', () => {
    let component: ResetPasswordPopUpComponentTsComponent;
    let fixture: ComponentFixture<ResetPasswordPopUpComponentTsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ResetPasswordPopUpComponentTsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetPasswordPopUpComponentTsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
