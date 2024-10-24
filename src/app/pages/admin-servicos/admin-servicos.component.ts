import { Component } from '@angular/core';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-admin-servicos',
  templateUrl: './admin-servicos.component.html',
  styleUrls: ['./admin-servicos.component.css']
})
export class AdminServicosComponent {

servicosHospitalares: Servico[] = [
  new Servico(1, 'Eletrocardiograma', 'Exame que avalia a atividade elétrica do coração.'),
  new Servico(2, 'Dentista', 'Atendimento odontológico geral e especializado.'),
  new Servico(3, 'Ultrassonografia', 'Exame por imagem para avaliar órgãos internos e tecidos.'),
  new Servico(4, 'Fisioterapia', 'Tratamento para reabilitação física e motora.'),
  new Servico(5, 'Oftalmologia', 'Consultas e exames relacionados à saúde dos olhos.'),
  new Servico(6, 'Ginecologia', 'Consultas e exames relacionados à saúde feminina.'),
  new Servico(7, 'Radiologia', 'Exames por imagem, como raios-X, para diagnóstico médico.'),
  new Servico(8, 'Pediatria', 'Atendimento médico especializado para crianças e adolescentes.'),
  new Servico(9, 'Dermatologia', 'Tratamento de doenças e condições da pele, cabelo e unhas.'),
  new Servico(10, 'Cardiologia', 'Consultas e exames especializados no sistema cardiovascular.'),
  new Servico(11, 'Ortopedia', 'Diagnóstico e tratamento de condições ósseas e musculares.'),
  new Servico(12, 'Psiquiatria', 'Atendimento para questões de saúde mental.'),
  new Servico(13, 'Laboratório de Análises Clínicas', 'Coleta e análise de exames laboratoriais.'),
  new Servico(14, 'Endocrinologia', 'Tratamento de distúrbios hormonais e metabólicos.'),
  new Servico(15, 'Neurologia', 'Diagnóstico e tratamento de condições relacionadas ao sistema nervoso.'),
  new Servico(16, 'Oncologia', 'Diagnóstico e tratamento de doenças oncológicas (câncer).'),
];

}
