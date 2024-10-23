import { Component, Input, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/SideNav.service';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent implements OnInit {
  @Input() isOpen = false; // Accept isOpen as an input property

  profileImage: string = '';
  profileName: string = '';

  constructor(private sidenavService: SideNavService) {
    this.sidenavService.sidenavOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  ngOnInit(): void {
    // Recuperar os dados do sessionStorage
    const storedImage = sessionStorage.getItem('profileImage');
    const storedName = sessionStorage.getItem('profileName');

    // Atribuir os valores às propriedades ou valores padrão
    this.profileImage = storedImage ? storedImage : 'assets/images/components/admin/menu/default-admin-image.jpg'; // Caminho padrão para a imagem
    this.profileName = storedName ? storedName : 'Luana Ribeiro'; // Nome padrão
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

  closeSidenav() {
    this.sidenavService.closeSidenav();
  }
}
