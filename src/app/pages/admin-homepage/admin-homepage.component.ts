import { Component } from '@angular/core';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent {
  isOpen = false;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  pacientes: Paciente[] = [
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "11256879123",
        new Date('04/11/2005'),
      ),
      new Paciente(
        1,
        "João Pedro",
        "Masculino",
        "12316547897",
        new Date('02/16/2005'),
      ),
      new Paciente(
        2,
        "Mariana Garcia",
        "Feminino",
        "127845645645",
        new Date('12/24/2000'),
      ),
  ];
}
