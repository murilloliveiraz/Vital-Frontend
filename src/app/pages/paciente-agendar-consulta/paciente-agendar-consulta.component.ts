import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-agendar-consulta',
  templateUrl: './paciente-agendar-consulta.component.html',
  styleUrls: ['./paciente-agendar-consulta.component.css']
})
export class PacienteAgendarConsultaComponent {

  constructor(private route: ActivatedRoute, private location: Location) {}


  voltar() {
    this.location.back();
  }
}
