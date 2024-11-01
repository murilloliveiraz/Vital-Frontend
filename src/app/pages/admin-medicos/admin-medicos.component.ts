import { Component } from '@angular/core';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-admin-medicos',
  templateUrl: './admin-medicos.component.html',
  styleUrls: ['./admin-medicos.component.css']
})
export class AdminMedicosComponent {
  medicos: MedicoResponseContract[] = []

  constructor(public medicoService: MedicoService) {}

  ngOnInit(): void {
    this.medicoService.getAll().subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
    });
  }
}
