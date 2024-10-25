import { Datepicker } from 'flowbite-datepicker';
import { Component } from '@angular/core';
import type { DatepickerOptions } from 'flowbite';

@Component({
  selector: 'app-agendar-consulta-form',
  templateUrl: './agendar-consulta-form.component.html',
  styleUrls: ['./agendar-consulta-form.component.css']
})
export class AgendarConsultaFormComponent {
  selectedRadio: string = 'presencial';
  date: string[] | string = "";
  options: DatepickerOptions = {
    format: 'dd/mm/yyyy',
    onShow: () => console.log("olaaa"),
    onHide: () => {}
  };

  datepicker!: Datepicker;

  ngAfterViewInit() {
    const datepickerEl = document.getElementById('datepicker-autohide') as HTMLInputElement;
    if (datepickerEl) {
      this.datepicker = new Datepicker(datepickerEl, this.options);
    }
  }

  selecionarData() {
    this.datepicker.show();
    this.date = this.datepicker.getDate();
    console.log(this.date);
  }

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedRadio = target.value;
  }
}
