import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {
  selectedButton: number | null = 0;
  @Input() buttons: string[] = [];

  selectButton(index: number) {
    this.selectedButton = index;
  }
}
