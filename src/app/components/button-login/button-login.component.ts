import { Component } from '@angular/core';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent {
  selectedButton: string | null = null;

  selectButton(button: string) {
    this.selectedButton = button;
  }
}

