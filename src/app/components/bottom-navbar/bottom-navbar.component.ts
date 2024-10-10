import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {
  selectedButton: number | null = null;

  selectButton(index: number) {
    this.selectedButton = index;
  }
}
