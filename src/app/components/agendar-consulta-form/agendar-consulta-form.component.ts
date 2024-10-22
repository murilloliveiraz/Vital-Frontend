import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendar-consulta-form',
  templateUrl: './agendar-consulta-form.component.html',
  styleUrls: ['./agendar-consulta-form.component.css']
})
export class AgendarConsultaFormComponent {
  selectedRadio: string = 'presencial';

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedRadio = target.value;
  }
}
