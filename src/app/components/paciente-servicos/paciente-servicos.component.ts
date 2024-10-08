import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-paciente-servicos',
  templateUrl: './paciente-servicos.component.html',
  styleUrls: ['./paciente-servicos.component.css']
})
export class PacienteServicosComponent {

  constructor() { }

  ngOnInit(): void {
    var splide = new Splide( '#pacientes-servicos-slider', {
      type   : 'loop',
      perPage: 3,
      perMove: 1,
    } );

    splide.mount();
  }
}
