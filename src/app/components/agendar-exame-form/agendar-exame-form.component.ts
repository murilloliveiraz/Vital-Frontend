import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
declare var Datepicker: any;

@Component({
  selector: 'app-agendar-exame-form',
  templateUrl: './agendar-exame-form.component.html',
  styleUrls: ['./agendar-exame-form.component.css']
})
export class AgendarExameFormComponent {
  @ViewChild('dateField', { static: true }) dateField!: ElementRef;
  public selectedDate!: Date;

  ngOnInit(): void { this.initDatePicker();}

  initDatePicker(): void {
    let date = new Datepicker(this.dateField.nativeElement, {
      minDate: new Date(),
      todayHighlight: true,
      autohide: true,
      format: "dd/mm/yyyy",
      daysOfWeekDisabled: [0],
    });
  }

  onDatePicked($event: any) {
    this.selectedDate = new Date($event.detail.date);
  }

  agendarExame(){
    Swal.fire({
      title: "Agendamento Concluído!",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
  }
}
