import { Component } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';

@Component({
  selector: 'app-admin-hospitais',
  templateUrl: './admin-hospitais.component.html',
  styleUrls: ['./admin-hospitais.component.css']
})
export class AdminHospitaisComponent {
  hospitais: Hospital[] = [
    new Hospital(1, 'Hospital Geral de São Paulo', 'Av. Paulista, 1000', 'São Paulo', '(11) 4002-8922'),
    new Hospital(2, 'Hospital do Coração', 'Rua das Flores, 300', 'Rio de Janeiro', '(21) 3456-7890'),
    new Hospital(3, 'Hospital das Clínicas', 'Rua Professor Costa, 500', 'Belo Horizonte', '(31) 9876-5432'),
    new Hospital(4, 'Hospital Santa Cruz', 'Rua da Esperança, 750', 'Curitiba', '(41) 3232-4545'),
    new Hospital(5, 'Hospital Nossa Senhora da Luz', 'Rua das Palmeiras, 210', 'Porto Alegre', '(51) 9999-0000'),
    new Hospital(6, 'Hospital Albert Einstein', 'Av. Santo Amaro, 900', 'São Paulo', '(11) 3787-1234'),
    new Hospital(7, 'Hospital Sírio-Libanês', 'Rua Adolfo Pinheiro, 80', 'São Paulo', '(11) 3155-0200'),
    new Hospital(8, 'Hospital Universitário', 'Av. Universitária, 1800', 'Brasília', '(61) 3030-7070'),
    new Hospital(9, 'Hospital Infantil Sabará', 'Rua das Crianças, 650', 'Salvador', '(71) 4002-1234'),
    new Hospital(10, 'Hospital Santa Casa', 'Rua Pedro de Toledo, 250', 'Fortaleza', '(85) 3123-4545'),
    new Hospital(11, 'Hospital de Traumas', 'Av. Getúlio Vargas, 1200', 'Recife', '(81) 3256-7890'),
    new Hospital(12, 'Hospital São José', 'Rua Dr. Arnaldo, 900', 'Florianópolis', '(48) 3456-1234'),
    new Hospital(13, 'Hospital das Américas', 'Av. Atlântica, 1234', 'Rio de Janeiro', '(21) 4012-8888'),
    new Hospital(14, 'Hospital Maternidade São Pedro', 'Rua das Mães, 45', 'Goiânia', '(62) 3232-1234'),
    new Hospital(15, 'Hospital Municipal', 'Rua Central, 1000', 'Manaus', '(92) 3131-1111'),
  ];
}
