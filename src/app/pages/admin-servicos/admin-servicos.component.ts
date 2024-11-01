import { Component } from '@angular/core';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-admin-servicos',
  templateUrl: './admin-servicos.component.html',
  styleUrls: ['./admin-servicos.component.css']
})
export class AdminServicosComponent {
  servicosHospitalares: ServicoResponseContract[] = [];

  constructor(public servicoService: ServicoService) {}

  ngOnInit(): void {
    this.servicoService.getAll().subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }
}
