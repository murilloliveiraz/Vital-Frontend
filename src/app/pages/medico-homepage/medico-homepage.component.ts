import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-medico-homepage',
  templateUrl: './medico-homepage.component.html',
  styleUrls: ['./medico-homepage.component.css']
})
export class MedicoHomepageComponent {
  ultimosPacientes: Exame[] = [
    new Exame(
      1,
      'Exame de Sangue',
      'Concluído',
      'Laboratório A',
      new Date('2024-10-09').toLocaleDateString('pt-BR'),
      'Luana Camila',
      'caminho/para/o/s3',
      '/assets/images/resultado1.jfif'
    ),
    new Exame(
      2,
      'Exame de Urina',
      'Pendente',
      'Laboratório B',
      new Date('2024-10-08').toLocaleDateString('pt-BR'),
      'João Pedro',
      'caminho/para/o/s3',
      '/assets/images/resultado2.jfif'
    ),
    new Exame(
      3,
      'Raio-X',
      'Concluído',
      'Laboratório C',
      new Date('2024-10-07').toLocaleDateString('pt-BR'),
      'Mariana Silva',
      'caminho/para/o/s3',
      '/assets/images/resultado3.jfif'
    ),
  ];
  ngOnInit() {
    const splide = new Splide('#propagandas-slider-medico', {
      type: 'loop',
      perPage: 1,
      width: '80%',
      arrows: false,
      speed: 400,
      autoplay: true,
    });


    splide.mount();
  }
}
