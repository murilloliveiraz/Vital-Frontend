import { Component } from '@angular/core';

@Component({
    selector: 'reset-password-pop-up',
    templateUrl: './reset-password-pop-up.component.html',
    styleUrls: ['./reset-password-pop-up.component.css']
})
export class ResetPasswordPopupComponent {
    isVisible = false;

    open() {
        this.isVisible = true;
    }

    close() {
        this.isVisible = false;
    }
}
