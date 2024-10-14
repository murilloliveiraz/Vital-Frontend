import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reset-password-pop-up-component.ts',
    templateUrl: './reset-password-pop-up-component.ts.component.html',
    styleUrls: ['./reset-password-pop-up-component.ts.component.css']
})
export class ResetPasswordPopUpComponentTsComponent {
    @Input() showPopup
    constructor () {}
}
