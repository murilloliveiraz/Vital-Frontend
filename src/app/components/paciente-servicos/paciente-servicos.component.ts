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
      perPage: 3,
      focus  : 0,
      width: "100%",
      omitEnd: true,
      arrows: false
    } );

    splide.mount();
  }
}
