import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendarConsultaFormResponse } from 'src/app/interfaces/AgendarConsultaFormResponse';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { MedicoService } from './../../services/medico.service';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { ServicoService } from './../../services/servico.service';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { PacienteService } from 'src/app/services/paciente.service';
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
  cpfInput: string = '';
  showSuggestions = false;
  pacienteId: number;
  pacienteList: PacienteResponseContract[] = [];
  filteredPacienteList: PacienteResponseContract[] = [];
  @Input() isADM: boolean = false;

  constructor(public hospitalServicoService: HospitalServicoService, public hospitalService: HospitalService, public formBuilder: FormBuilder, public medicoService: MedicoService, public servicoService: ServicoService, private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getAllHospitais();
    this.getAllServices();
    this.initDatePicker();
    this.agendamentoForm = this.formBuilder.group(
      {
        servico: ['', [Validators.required]],
        local: ['', [Validators.required]],
        queixas: ['', [Validators.required]],
        cpfPaciente: ['', [Validators.required]],
        medico: [0, [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }
    )
    const observer = {
      next: (pacientes: PacienteResponseContract[]) => {
        this.pacienteList = pacientes;
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };
    this.pacienteService.getAll().subscribe(observer);
  }

  filterPacienteList() {
    const input = this.cpfInput.replace(/\D/g, '');
    this.filteredPacienteList = this.pacienteList.filter(paciente =>
      paciente.cpf.replace(/\D/g, '').includes(input)
    );
  }

  selectPaciente(paciente: PacienteResponseContract) {
    this.cpfInput = paciente.nome;
    this.pacienteId = paciente.id;
    this.showSuggestions = false;
  }

  hideSuggestions() {
    setTimeout(() => this.showSuggestions = false, 200);
  }

  getAllHospitalServices(id: number){
    this.hospitalServicoService.getAllByHospitalId(id).subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }

  getAllServices(){
    this.servicoService.getAllAppointmentsServices().subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }

  getMedicosOfEspecializationAtHospital(especializacao: string, hospitalId: number){
    this.medicoService.getAllBySpecializationAndHospitalId(especializacao, hospitalId).subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
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
    const especializacao = this.servicosHospitalares.find(s => s.nome == selectedValue).especializacao;
    if(this.selectedRadio == "presencial"){
      this.getMedicosOfEspecializationAtHospital(especializacao, this.hospital.hospitalId);
    } else {
      this.getMedicosOfEspecialization(especializacao);
    }
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
      pacienteId: this.pacienteId || 0,
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
