import { Component, ElementRef, ViewChild } from '@angular/core';
declare var Datepicker: any;
@Component({
  selector: 'app-agendar-consulta-form',
  templateUrl: './agendar-consulta-form.component.html',
  styleUrls: ['./agendar-consulta-form.component.css']
})
export class AgendarConsultaFormComponent {
  selectedRadio: string = 'presencial';
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

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedRadio = target.value;
  }
}
