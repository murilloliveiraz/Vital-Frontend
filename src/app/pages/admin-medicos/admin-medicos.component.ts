import { Component } from '@angular/core';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-admin-medicos',
  templateUrl: './admin-medicos.component.html',
  styleUrls: ['./admin-medicos.component.css']
})
export class AdminMedicosComponent {
  medicos: Medico[] = [
    new Medico(1, 'Dr. João Silva', 'Cardiologia', 'CRM-123456', '123.456.789-01', 'joao.silva@email.com', true),
    new Medico(2, 'Dra. Maria Oliveira', 'Pediatria', 'CRM-654321', '987.654.321-00', 'maria.oliveira@email.com', true),
    new Medico(3, 'Dr. Carlos Santos', 'Ortopedia', 'CRM-111222', '321.654.987-12', 'carlos.santos@email.com', true),
    new Medico(4, 'Dra. Ana Costa', 'Ginecologia', 'CRM-333444', '654.321.987-03', 'ana.costa@email.com', true),
    new Medico(5, 'Dr. Pedro Almeida', 'Neurologia', 'CRM-555666', '147.258.369-00', 'pedro.almeida@email.com', true),
    new Medico(6, 'Dra. Juliana Ferreira', 'Dermatologia', 'CRM-777888', '258.147.369-11', 'juliana.ferreira@email.com', false),
    new Medico(7, 'Dr. Fernando Lima', 'Oftalmologia', 'CRM-999000', '963.852.741-20', 'fernando.lima@email.com', true),
    new Medico(8, 'Dra. Renata Martins', 'Endocrinologia', 'CRM-111000', '147.852.963-04', 'renata.martins@email.com', true),
    new Medico(9, 'Dr. Lucas Rocha', 'Gastroenterologia', 'CRM-222333', '789.456.123-09', 'lucas.rocha@email.com', false),
    new Medico(10, 'Dra. Beatriz Dias', 'Psiquiatria', 'CRM-444555', '321.789.654-08', 'beatriz.dias@email.com', true),
  ]
}
