import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-medico-consulta-detalhes',
  templateUrl: './medico-consulta-detalhes.component.html',
  styleUrls: ['./medico-consulta-detalhes.component.css']
})
export class MedicoConsultaDetalhesComponent {
  consulta: Exame;
  formFields = [];

  ultimosPacientes: Exame[] = [
    new Exame(
      1,
      'Exame de Sangue',
      'Concluído',
      'Laboratório A',
      new Date('2024-10-09').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11,2005'),
      ),
      'caminho/para/o/s3',
      'Dor no peito',
      'Jjeum de 8 horas',
      '/assets/images/resultado1.jfif'
    ),
    new Exame(
      2,
      'Exame de Urina',
      'Pendente',
      'Laboratório B',
      new Date('2024-10-08').toLocaleDateString('pt-BR'),
      new Paciente(
        1,
        "João Pedro",
        "Masculino",
        "5646578945132",
        new Date('02/16,2005'),
      ),
      'caminho/para/o/s3',
      'Dor no membro',
      'Jejum de 8 horas',
      '/assets/images/resultado2.jfif'
    ),
    new Exame(
      3,
      'Raio-X',
      'Concluído',
      'Laboratório C',
      new Date('2024-10-07').toLocaleDateString('pt-BR'),
      new Paciente(
        2,
        "Mariana Garcia",
        "Feminino",
        "5646578945132",
        new Date('12/24/2000'),
      ),
      'caminho/para/o/s3',
      'Muita dor no braço',
      'Nenhum pré preparo',
      '/assets/images/resultado3.jfif'
    ),
  ];

  constructor(private router: Router , private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const exameId = this.route.snapshot.paramMap.get('id');

    if (exameId) {
      this.consulta = this.ultimosPacientes.find(exame => exame.exameId == +exameId);

      if (this.consulta) {
        this.formFields = [
          { inputType: 'input', label: 'Exame', type: 'text', value: this.consulta.nome || '', placeholder: 'nome do exame', disabled: true },
          { inputType: 'input', label: 'Local', type: 'text', value: this.consulta.local || '', placeholder: 'hospital', disabled: true },
          { inputType: 'textarea', label: 'Queixa do paciente', type: 'text', value: this.consulta.queixa || '', placeholder: 'queixa', disabled: true },
          { inputType: 'textarea', label: 'Observações pré-exame', type: 'text', value: this.consulta.preparoPreConsulta || '', placeholder: 'Observações da clínica', disabled: true }
        ];
      }
    }
  }

  inserirRegistro() {
    this.router.navigate(['medico/consulta-detalhes', this.consulta.exameId.toString(), 'inserir-registro', this.consulta.paciente.id.toString()]);
  }


  voltar() {
    this.location.back();
  }
}
