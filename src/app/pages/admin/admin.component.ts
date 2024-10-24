import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
