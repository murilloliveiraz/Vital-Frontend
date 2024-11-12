import { PacienteResponseContract } from './../../models/paciente/pacienteResponseContract';
import { Component } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {
  isOpen = false;

  constructor(public pacienteService: PacienteService) {}

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  pacientes: PacienteResponseContract[] = [];

  ngOnInit(): void {
    this.pacienteService.getAll().subscribe((data: PacienteResponseContract[]) => {
      this.pacientes = data;
    });
  }
}
