import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-medico-historico-pacientes',
  templateUrl: './medico-historico-pacientes.component.html',
  styleUrls: ['./medico-historico-pacientes.component.css']
})
export class MedicoHistoricoPacientesComponent {
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, public pacienteService: PacienteService) {}
  pacientes: PacienteResponseContract[] = [];
  searchTerm: string = '';

  filteredPacientes: PacienteResponseContract[] = [];

  ngOnInit(): void {
    this.pacienteService.getAll().subscribe((data: PacienteResponseContract[]) => {
      this.pacientes = data;
      this.filteredPacientes = this.pacientes;
    });
  }

  voltar() {
    this.location.back();
  }

  filtrarPacientes() {
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    this.filteredPacientes = this.pacientes.filter(paciente =>
      paciente.nome.toLowerCase().includes(lowerCaseTerm) ||
      paciente.cpf.includes(lowerCaseTerm)
    );
  }

  onSearchSubmit(event: Event) {
    event.preventDefault();
    this.filtrarPacientes();
  }
}
