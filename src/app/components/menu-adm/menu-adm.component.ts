import { Component, Input, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/SideNav.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent {
  @Input() isOpen = false; // Accept isOpen as an input property

  profileImage: string = '';
  profileName: string = '';

  constructor(private sidenavService: SideNavService, private authService: AuthService, private router: Router) {
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

  logout(){
    this.authService.limparDadosUsuario();
    this.authService.limparToken();
    this.router.navigate(['/login']);
  }
}
