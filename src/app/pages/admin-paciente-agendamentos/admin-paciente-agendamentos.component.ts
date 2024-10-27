import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { Documento } from 'src/app/models/documento';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-admin-paciente-agendamentos',
  templateUrl: './admin-paciente-agendamentos.component.html',
  styleUrls: ['./admin-paciente-agendamentos.component.css']
})
export class AdminPacienteAgendamentosComponent {
  selectedType: string = "exames";
  selectedButton: string = "anteriores";
  paciente: Paciente;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const pacienteId = this.route.snapshot.paramMap.get('pacienteId');
    if (pacienteId) {
      this.paciente = this.pacientes.find(paciente => paciente.id.toString() === pacienteId);
    }
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

  examesConcluidos: Exame[] = [
    new Exame(
      1,
      'Exame de Sangue',
      'Concluido',
      'Laboratório A',
      new Date('2024-10-09').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Dor no peito',
      'Jejum de 8 horas',
      '/assets/images/resultado1.jfif'
    ),
    new Exame(
      3,
      'Raio-X',
      'Concluido',
      'Laboratório C',
      new Date('2024-10-07').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Muita dor no braço',
      'Nenhum pré-preparo',
      '/assets/images/resultado3.jfif'
    ),
  ];

  examesAgendados: Exame[] = [
    new Exame(
      2,
      'Exame de Urina',
      'Agendado',
      'Laboratório B',
      new Date('2024-10-08').toLocaleDateString('pt-BR'),
      new Paciente(
        0,
        "Luana Camila",
        "Feminino",
        "5646578945132",
        new Date('04/11/2005'),
      ),
      'caminho/para/o/s3',
      'Dor no membro',
      'Jejum de 8 horas',
      null // Exame agendado, sem URL de resultado
    ),
  ];

  consultasConcluidas: Consulta[] = [
    new Consulta(
      1,
      'Consulta Cardiológica',
      'Concluida',
      'Clínica Saúde',
      'Presencial',
      'Dr. Henrique Silva',
      new Date('2024-10-05').toLocaleDateString('pt-BR'),
      'caminho/para/o/s3',
      null,
      [
        new Documento(0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh50PU3Dj5jWFmb9IW6v9s9v9aNdVIKvk7Ww&s'),
        new Documento(1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnpxNIykrtJKL-dvaIndHyMEuGSKgjjmV0A&s')
      ]
    ),
    new Consulta(
      2,
      'Consulta Neurológica',
      'Concluida',
      'Hospital Central',
      'Remota',
      'Dra. Fernanda Costa',
      new Date('2024-10-03').toLocaleDateString('pt-BR'),
      'caminho/para/o/s3',
      'https://meet.link/consulta2',
      [
        new Documento(2, '/assets/documentos/receita2.pdf'),
        new Documento(3, '/assets/documentos/orientacoes2.pdf')
      ]
    ),
  ];

  consultasAgendadas: Consulta[] = [
    new Consulta(
      3,
      'Consulta Ortopédica',
      'Agendada',
      'Clínica Ortopédica',
      'Presencial',
      'Dr. Paulo Mendes',
      new Date('2024-11-01').toLocaleDateString('pt-BR'),
      'caminho/para/o/s3',
      null,
      []
    ),
    new Consulta(
      4,
      'Consulta Dermatológica',
      'Agendada',
      'Hospital Central',
      'Remota',
      'Dra. Marina Souza',
      new Date('2024-11-02').toLocaleDateString('pt-BR'),
      'caminho/para/o/s3',
      'https://meet.link/consulta4',
      []
    ),
  ];

  voltar() {
    this.location.back();
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }

  selectType(type: string) {
    this.selectedType = type;
  }
}
