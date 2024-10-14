import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente-laudos-slider',
  templateUrl: './paciente-laudos-slider.component.html',
  styleUrls: ['./paciente-laudos-slider.component.css']
})
export class PacienteLaudosSliderComponent {
  consultas: any[] =  [
    { "id": 0, "data": "2024-10-01", "imgSRC": "https://telemedicinamorsch.com.br/wp-content/uploads/2013/09/LAUDO-PARA-IMPRESSAO.jpg" },
    { "id": 1, "data": "2024-10-10", "imgSRC": "https://files.passeidireto.com/56ea374d-c3df-4d5f-9c96-00e4329f1bde/bg1.png" },
    { "id": 2, "data": "2024-10-10", "imgSRC": "" },
    { "id": 3, "data": "2024-10-10", "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShSsKYuXliZsZ-NCW2XZnFafHXQtbJrRSWQ&s" },
    { "id": 4, "data": "2024-10-10", "imgSRC": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw6y7y5bc_uLI3-MOlOcYsyREuu76_-ctmA&s" },
  ]
  selectedConsultaId: number = 1;

  constructor(){}

  ngAfterViewInit(): void {
    var splide = new Splide('#laudos-slider', {
      perPage: 3,
      focus  : 0,
      pagination: false,
      arrows: false,
      autoWidth: true
    });

    splide.mount();
  }

  selectConsulta(consultaId: number) {
    this.selectedConsultaId = consultaId;
  }

  getConsultaSelecionada() {
    return this.consultas.find(consulta => consulta.id === this.selectedConsultaId);
  }

  downloadResultado(){
    Swal.fire({
      title: "Exame Baixado!",
      text: "O download do exame foi concluído",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Exame baixado icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído"
    });
  }
}
