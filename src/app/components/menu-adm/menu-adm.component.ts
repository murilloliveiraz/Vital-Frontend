import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavService } from 'src/app/services/SideNav.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent {
  isOpen = false;

  constructor(private sidenavService: SideNavService) {
    this.sidenavService.sidenavOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }
}
