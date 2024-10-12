import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent {
  routes = ['/paciente','historico', 'conta']
  show(){
    console.log(this.routes)
  }
}
