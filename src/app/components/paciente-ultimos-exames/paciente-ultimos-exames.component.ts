import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { Exame } from 'src/app/models/exame';

@Component({
  selector: 'app-paciente-ultimos-exames',
  templateUrl: './paciente-ultimos-exames.component.html',
  styleUrls: ['./paciente-ultimos-exames.component.css']
})
export class PacienteUltimosExamesComponent {
  exameConcluido: Exame;
  constructor(){}

  ngOnInit(): void {
    var splide = new Splide( '#paciente-ultimos-exames-slider', {
      focus  : 0,
      omitEnd: true,
      drag   : 'free',
      snap   : true,
      perPage: 2,
      arrows: false
    } );


    this.exameConcluido = new Exame(
      1,
      'Exame de Sangue',
      'Concluído',
      'Laboratório A',
      new Date('09/10,2024').toLocaleDateString('pt-BR'),
      'Luana Camila',
      'caminho/para/o/s3',
      '/assets/images/resultado.jfif'
    );

    splide.mount();
  }
}
