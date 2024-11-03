import { Exame } from 'src/app/models/exame';
import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.css']
})
export class PacienteHomeComponent {
  exameConcluido: Exame;

  constructor() { }

  ngOnInit() {
    const splide = new Splide('#propagandas-slider', {
      type: 'loop',
      perPage: 1,
      width: '100%',
      arrows: false,
      pagination: false,
      speed: 400,
      autoplay: true,
    });
    splide.mount();
  }
}
