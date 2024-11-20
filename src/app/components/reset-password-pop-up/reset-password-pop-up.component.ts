import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'reset-password-pop-up',
  templateUrl: './reset-password-pop-up.component.html',
  styleUrls: ['./reset-password-pop-up.component.css']
})
export class ResetPasswordPopupComponent {
  isPopupVisible = true;

  @Output() close = new EventEmitter<void>();

  constructor(public formBuilder: FormBuilder, private loginService: LoginService){}
  dadosForm: FormGroup;

  onClose() {
    this.close.emit();
  }

  ngOnInit(): void{
    this.dadosForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    )
  }

  sendEmailToResetPassword() {
    const observer = {
      next: (response: string) => {
        Swal.fire({
          title: "Email enviado!",
          text: "Um email contendo um link para redefinição da sua senha foi enviado.",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
        this.onClose();
      },
      error: (err: any) => {
        console.log('Ocorreu um erro');
      }
    };

    console.log(this.dadosForm.get('email')?.value)
    this.loginService.forgotMyPassword(this.dadosForm.get('email')?.value).subscribe(observer)
  }
}
