import { Component, ElementRef, ViewChild } from '@angular/core';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendarConsultaFormResponse } from 'src/app/interfaces/AgendarConsultaFormResponse';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { MedicoService } from './../../services/medico.service';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { ServicoService } from './../../services/servico.service';
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
  public selectedTime!: Date;
  servicosHospitalares: ServicoResponseContract[] = [];
  hospitais: HospitalResponseContract[] = [];
  medicos: MedicoResponseContract[] = [];
  agendamentoForm: FormGroup;
  valor: number;
  hospital: HospitalResponseContract;

  constructor(public hospitalServicoService: HospitalServicoService, public hospitalService: HospitalService, public formBuilder: FormBuilder, public medicoService: MedicoService, public servicoService: ServicoService) {}

  ngOnInit(): void {
    this.getAllHospitais();
    this.getAllServices();
    this.initDatePicker();
    this.agendamentoForm = this.formBuilder.group(
      {
        servico: ['', [Validators.required]],
        local: ['', [Validators.required]],
        queixas: ['', [Validators.required]],
        medico: [0, [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }
    )
  }

  getAllHospitalServices(id: number){
    this.hospitalServicoService.getAllByHospitalId(id).subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }

  getAllServices(){
    this.servicoService.getAll().subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }

  getMedicosOfEspecialization(especializacao: string){
    this.medicoService.getAllBySpecialization(especializacao).subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
    });
  }

  getAllHospitais(){
    this.hospitalService.getAll().subscribe((data: HospitalResponseContract[]) => {
      this.hospitais = data;
    });
  }

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
    if (this.selectedTime) {
        this.combineDateAndTime();
    }
  }

  onHospitalChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.hospitalService.getByName(selectedValue).subscribe((data: HospitalResponseContract) => {
      this.hospital = data;
      this.getAllHospitalServices(this.hospital.hospitalId)
    });
  }

  onServicoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.valor = this.servicosHospitalares.find(s => s.nome == selectedValue).valor;
    this.medicoService.getAllBySpecialization(selectedValue).subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
    });
  }


  onTimePicked(event: any) {
    const timeValue = event.target.value;
    const now = new Date();
    const [hours, minutes] = timeValue.split(':');
    this.selectedTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), +hours, +minutes);
    if (this.selectedDate) {
      this.combineDateAndTime();
    }
  }

  private combineDateAndTime() {
    if (this.selectedDate && this.selectedTime) {
        this.selectedDate.setHours(this.selectedTime.getHours());
        this.selectedDate.setMinutes(this.selectedTime.getMinutes());
        this.selectedDate.setSeconds(0);
    }
  }

  get dadosForm(){
    return this, this.agendamentoForm.controls;
  }

  agendamentoDados(){
    const dados: AgendarConsultaFormResponse = {
      nome: this.dadosForm["servico"]?.value,
      data: this.selectedDate,
      tipoConsulta: this.selectedRadio,
      local: this.dadosForm["local"].value,
      queixas: this.dadosForm["queixas"].value,
      email: this.dadosForm["email"].value,
      medicoId: this.dadosForm["medico"].value,
      valor: this.valor
    }
    return dados;
  }

  onMedicoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = Number(selectElement.value);
    this.agendamentoForm.get('medico')?.setValue(selectedId);
  }

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedRadio = target.value;
  }
}
