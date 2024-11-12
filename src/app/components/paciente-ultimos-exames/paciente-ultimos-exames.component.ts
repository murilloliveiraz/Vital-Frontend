import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { Exame } from 'src/app/interfaces/Exame';
import { ExameConcluidoResponse } from 'src/app/models/exame/ExameConcluidoResponse';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-ultimos-exames',
  templateUrl: './paciente-ultimos-exames.component.html',
  styleUrls: ['./paciente-ultimos-exames.component.css']
})
export class PacienteUltimosExamesComponent {
  exameConcluido: ExameConcluidoResponse;
  constructor(){}

  ngOnInit(): void {
    var splide = new Splide( '#paciente-ultimos-exames-slider', {
      focus  : 0,
      omitEnd: true,
      drag   : 'free',
      snap   : true,
      width: "100%",
      pagination: false,
      perPage: 2,
      arrows: false
    } );

    splide.mount();
  }
}
