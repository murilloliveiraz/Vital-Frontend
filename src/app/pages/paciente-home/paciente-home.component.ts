import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['./paciente-home.component.css']
})
export class PacienteHomeComponent {

  constructor() { }

  ngOnInit() {
    const splide = new Splide('#propagandas-slider', {
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
