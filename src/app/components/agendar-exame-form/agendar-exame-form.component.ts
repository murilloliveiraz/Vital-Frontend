import { Component, ElementRef, ViewChild } from '@angular/core';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import Swal from 'sweetalert2';
import { PacienteService } from './../../services/paciente.service';
import { ServicoResponseContract } from 'src/app/models/servico/servicoResponseContract';
import { HospitalResponseContract } from 'src/app/models/hospital/hospitalResponseContract';
import { HospitalService } from 'src/app/services/hospital.service';
import { HospitalServicoService } from 'src/app/services/hospitalServico.service';
import { ServicoService } from 'src/app/services/servico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendarExameRequest } from 'src/app/models/exame/AgendarExameRequest';
import { MedicoResponseContract } from 'src/app/models/medico/medicoResponseContract';
import { MedicoService } from 'src/app/services/medico.service';
import { ExamesService } from 'src/app/services/exames.service';
import { AgendarExameResponse } from 'src/app/models/exame/AgendarExameResponse';
declare var Datepicker: any;

@Component({
  selector: 'app-agendar-exame-form',
  templateUrl: './agendar-exame-form.component.html',
  styleUrls: ['./agendar-exame-form.component.css']
})
export class AgendarExameFormComponent {
  @ViewChild('dateField', { static: true }) dateField!: ElementRef;
  public selectedDate!: Date;
  public selectedTime!: Date;
  cpfInput: string = '';
  valor: number;
  showSuggestions = false;
  servico: ServicoResponseContract;
  hospitalId: number;
  occupiedDates: Date[] = [];
  availableTimes: string[] = [];
  unavailableTimes: string[] = [];
  hospital: HospitalResponseContract;
  pacienteId: number;
  servicosHospitalares: ServicoResponseContract[] = [];
  hospitais: HospitalResponseContract[] = [];
  medicos: MedicoResponseContract[] = [];
  pacienteList: PacienteResponseContract[] = [];
  filteredPacienteList: PacienteResponseContract[] = [];
  agendamentoForm: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    public hospitalServicoService: HospitalServicoService,
    public hospitalService: HospitalService,
    private servicoService: ServicoService,
    public formBuilder: FormBuilder,
    public medicoService: MedicoService,
    public examesService: ExamesService,
    ){}

  ngOnInit(): void {
    this.loadOccupiedDates();
    this.initDatePicker();
    this.getAllExamServices();
    this.agendamentoForm = this.formBuilder.group(
      {
        servico: ['', [Validators.required]],
        local: ['', [Validators.required]],
        queixas: ['', [Validators.required]],
        observacoes: ['', [Validators.required]],
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

  onDatePicked($event: any) {
    this.selectedDate = new Date($event.detail.date);
    this.updateAvailableTimes(this.selectedDate);
    if (this.selectedTime) {
        this.combineDateAndTime();
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

  onMedicoChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = Number(selectElement.value);
    this.agendamentoForm.get('medico')?.setValue(selectedId);
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

  onServicoPicked($event: any) {
    const selectedServicoId = (event.target as HTMLSelectElement).value;
    const selectedServico = this.servicosHospitalares.find(item => item.servicoId === Number(selectedServicoId));
    this.servico = selectedServico;
    this.valor = this.servico.valor;
    this.getAllHospitais(Number(selectedServicoId));
  }

  onHospitalPicked($event: any) {
    const hospitalId = (event.target as HTMLSelectElement).value;
    const selectedHospital = this.hospitais.find(item => item.hospitalId === Number(hospitalId));
    this.hospital = selectedHospital;
    this.getMedicosOfEspecializationAtHospital(this.servico.especializacao, Number(hospitalId));
  }

  agendarExame(){
    const dados = this.agendamentoDados();
    this.examesService.agendarExame(dados).subscribe({
      next: (exame: AgendarExameResponse) => {
        Swal.fire({
          title: "Exame Agendado!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          text: "Um email confirmando o exame foi enviado, acesse o perfil do paciente e conclua o pagamento",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
      },
      error: (error) => {
        alert('Erro ao agendar consulta');
      }
    });
  }

  getAllExamServices(){
    this.servicoService.getAllExamsServices().subscribe((data: ServicoResponseContract[]) => {
      this.servicosHospitalares = data;
    });
  }

  getAllHospitais(servicoId: number){
    this.hospitalServicoService.GetAllHospitalsThatOfferAnSpecificService(servicoId).subscribe((data: HospitalResponseContract[]) => {
      this.hospitais = data;
    });
  }

  getMedicosOfEspecializationAtHospital(especializacao: string, hospitalId: number){
    this.medicoService.getAllBySpecializationAndHospitalId(especializacao, hospitalId).subscribe((data: MedicoResponseContract[]) => {
      this.medicos = data;
    });
  }

  get dadosForm(){
    return this, this.agendamentoForm.controls;
  }

  agendamentoDados(){
    const dados: AgendarExameRequest = {
      nome: this.servico.nome,
      emailParaReceberResultado: this.dadosForm["email"]?.value,
      data: this.selectedDate,
      local: this.hospital.endereco,
      observacoesDaClinica: this.dadosForm["observacoes"].value,
      queixasDoPaciente: this.dadosForm["queixas"].value,
      medicoId: this.dadosForm["medico"].value,
      pacienteId: this.pacienteId || 0,
    }
    return dados;
  }


  loadOccupiedDates(): void {
    this.examesService.getDatasOcupadas().subscribe((dates: string[]) => {
      this.occupiedDates = dates.map(dateString => new Date(dateString));
    });
  }

  getUnavailableTimesForDate(selectedDate: Date): string[] {
    const selectedDay = selectedDate.toISOString().split('T')[0];
    return this.occupiedDates
      .filter(date => date.toISOString().startsWith(selectedDay))
      .map(date => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
      });
  }

  generateTimes(start: string, end: string, interval: number = 30): string[] {
    const times: string[] = [];
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    let current = new Date(0, 0, 0, startHours, startMinutes);
    const endTime = new Date(0, 0, 0, endHours, endMinutes);

    while (current <= endTime) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      times.push(`${hours}:${minutes}`);
      current.setMinutes(current.getMinutes() + interval);
    }
    return times;
  }

  isUnavailable(time: string): boolean {
    return this.unavailableTimes.includes(time);
  }

  updateAvailableTimes(selectedDate: Date) {
    this.unavailableTimes = this.getUnavailableTimesForDate(selectedDate);

    const allTimes = this.generateTimes('08:00', '17:00');
    this.availableTimes = allTimes;
  }

}
