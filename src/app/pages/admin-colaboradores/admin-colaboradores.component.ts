import { Component } from '@angular/core';
import { AdminResponseContract } from 'src/app/models/administrador/adminResponseContract';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-admin-colaboradores',
  templateUrl: './admin-colaboradores.component.html',
  styleUrls: ['./admin-colaboradores.component.css']
})
export class AdminColaboradoresComponent {
  colaboradores: AdminResponseContract[] = [];

  constructor(public adminService: AdministradorService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAllAdmins().subscribe((data: AdminResponseContract[]) => {
      this.colaboradores = data;
    });
  }
}
