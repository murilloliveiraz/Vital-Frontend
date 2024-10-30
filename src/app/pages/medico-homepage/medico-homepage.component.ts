import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Splide from '@splidejs/splide';
import { Exame } from 'src/app/models/exame';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-medico-homepage',
  templateUrl: './medico-homepage.component.html',
  styleUrls: ['./medico-homepage.component.css']
})
export class MedicoHomepageComponent {
  constructor(private route: ActivatedRoute, private location: Location) {}

  ultimosExames: Exame[] = [
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
        new Date('24/12,2000'),
      ),
      'caminho/para/o/s3',
      'Muita dor no braço',
      'Nenhum pré preparo',
      '/assets/images/resultado3.jfif'
    ),
  ];
  ngOnInit() {

    const splide = new Splide('#propagandas-slider-medico', {
      type: 'loop',
      perPage: 1,
      width: '100%',
      arrows: false,
      speed: 400,
      autoplay: true,
    });


    splide.mount();
  }
}
