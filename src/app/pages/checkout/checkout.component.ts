import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  selectedButton: string | null = "pix";

  constructor(private location: Location) {}

  voltar() {
    this.location.back();
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
