import { Component } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
import { AuthService } from './../../services/auth.service';
import { AdminResponseContract } from 'src/app/models/administrador/adminResponseContract';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private administradorService: AdministradorService, private authService: AuthService){}
  isOpen = false;
  admin: AdminResponseContract;

  ngOnInit(){
    const email = this.authService.getEmailUser();

    const observer = {
      next: (admin: AdminResponseContract) => {
        this.admin = admin;
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    }

    this.administradorService.getByEmail(email).subscribe(observer);
    };

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
