import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ResetPasswordContract } from 'src/app/models/utils/resetPasswordContract';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password-popup',
  templateUrl: './new-password-popup.component.html',
  styleUrls: ['./new-password-popup.component.css']
})
export class NewPasswordPopupComponent {
  isPopupVisible2 = true;

  constructor(public formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private route: ActivatedRoute){}
  newPasswordForm: FormGroup;
  token: string = "";

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  ngOnInit(): void{
    this.newPasswordForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
        novaSenha: ['', [Validators.required]],
      }
    )

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    const observer = {
      next: (response: string) => {
        Swal.fire({
          title: "A senha foi restaurada!",
          imageUrl: "/assets/images/joiaconcluido.png",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Registro inserido icone",
          confirmButtonColor: "#0099B9",
          confirmButtonText: "Concluído",
        });
        this.close.emit();
        this.isPopupVisible2 = false;
      },
      error: (err: any) => {
        console.log('Ocorreu um erro');
      }
    };

    const usuario: ResetPasswordContract = {
      email: this.newPasswordForm.get('email')?.value || '',
      newPassword: this.newPasswordForm.get('novaSenha')?.value || '',
      token: this.token
    }

    this.loginService.resetPassword(usuario).subscribe(observer)
  }
}
