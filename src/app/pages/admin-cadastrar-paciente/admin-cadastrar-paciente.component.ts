import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteRequestContract } from 'src/app/models/paciente/pacienteRequestContract';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { PacienteService } from 'src/app/services/paciente.service';
import Swal from 'sweetalert2';
declare var Datepicker: any;

@Component({
  selector: 'app-admin-cadastrar-paciente',
  templateUrl: './admin-cadastrar-paciente.component.html',
  styleUrls: ['./admin-cadastrar-paciente.component.css']
})
export class AdminCadastrarPacienteComponent {
  constructor(public pacienteService: PacienteService ,private location: Location, public formBuilder: FormBuilder) {}

  cadastroForm: FormGroup;
  @ViewChild('dateField', { static: true }) dateField!: ElementRef;
  public selectedDate!: Date;

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        sexo: ['', [Validators.required]],
        pcd: ['', [Validators.required]],
        alergias: ['', [Validators.required]],
        medicamentos: ['', [Validators.required]],
        historicoFamiliar: ['', [Validators.required]],
      }
    )
    this.initDatePicker();
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
  }

  get dadosForm(){
    return this, this.cadastroForm.controls;
  }

  voltar() {
    this.location.back();
  }

  cadastrarPaciente() {
    const observer = {
      next: (paciente: PacienteResponseContract) => {
        Swal.fire({
          title: "Paciente cadastrado!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
        console.log(paciente)
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };

    const paciente: PacienteRequestContract = {
      nome: this.dadosForm["nome"]?.value,
      cpf: this.dadosForm["cpf"]?.value,
      email: this.dadosForm["email"]?.value,
      dataNascimento: this.selectedDate,
      sexo: this.dadosForm["sexo"]?.value,
      criadoPorUsuarioId: 0,
      pcd: this.dadosForm["pcd"]?.value,
      alergias: this.dadosForm["alergias"]?.value,
      medicamentos: this.dadosForm["medicamentos"]?.value,
      historicoFamiliar: this.dadosForm["historicoFamiliar"]?.value,
    }

    this.pacienteService.create(paciente).subscribe(observer);
  }
}
