import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';
import { CreditCardPayment } from 'src/app/models/pagamentos/CreditCardPayment';
import { CartaoCreditoService } from 'src/app/services/cartao-credito.service';
import { MercadoPagoService } from 'src/app/services/mercadoPago.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent {
  @Input() consulta: AgendarConsultaResponseContract;
  checkout: FormGroup;
  constructor(private router: Router, private mercadopagoService: MercadoPagoService, private creditCardService: CartaoCreditoService, public formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.checkout = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
      }
    )
    await this.mercadopagoService.initialize();

    const mpInstance = this.mercadopagoService.getMercadoPagoInstance();

    const valorConsulta = this.getValorConsulta();

    if(valorConsulta){
      this.createCardForm(mpInstance, valorConsulta);
    }
  }

  get dadosForm(){
    return this, this.checkout.controls;
  }

  private getValorConsulta(): number {
    return this.consulta?.valorConsulta ?? 0;
  }

  private createCardForm(mpInstance: any, valorConsulta: number) {
    const cardForm = mpInstance.cardForm({
      amount: valorConsulta.toString(),
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número do cartão",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "CVV",
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Bandeira",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Documento de identificação",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Document number",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "Email do comprador",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
        },
        onSubmit: event => {
          event.preventDefault();
          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
            cardholderName
          } = cardForm.getCardFormData();

          const nomeCompleto = this.dadosForm["nome"]?.value || '';
          const [primeiroNome, ...restoDoNome] = nomeCompleto.split(' ');
          const sobrenome = restoDoNome.join(' ') || '';

          const creditCardRequest: CreditCardPayment = {
            token,
            consultaId: this.consulta.id,
            emailPagador: email,
            nomePagador:  primeiroNome,
            sobrenomePagador:  sobrenome,
            nomeServico: this.consulta.nome,
            valorConsulta: this.consulta.valorConsulta,
            paymentMethodId: payment_method_id,
            installments: Number(installments),
            number: identificationNumber,
            type: identificationType,
            transactionAmount: Number(amount),
          };

          console.log(creditCardRequest)

          this.creditCardService.createPayment(creditCardRequest).subscribe({
            next: (response: any) => {
              console.log(response);
            },
            error: (error) => {
              console.error('Erro ao processar pagamento com cartão:', error);
            }
          });
        },
        onError: error => {
          if (error) return console.warn("error: ", error);
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);

          // Animate progress bar
          const progressBar: HTMLProgressElement | null = document.querySelector(".progress-bar");
          if (progressBar) {
            progressBar.removeAttribute("value");
          }

          return () => {
            if (progressBar) {
              progressBar.setAttribute("value", "0");
            }
          };
        }
      },
    });
  }

  pagamentoCredito(){
    Swal.fire({
      title: "Pagamento Concluído!",
      text: "Um email confirmando a consulta foi enviado.",
      imageUrl: "/assets/images/joiaconcluido.png",
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "Registro inserido icone",
      confirmButtonColor: "#0099B9",
      confirmButtonText: "Concluído",
    });
    setTimeout(() => {
      this.router.navigate(['/paciente']);
    }, 3000);
  }
}
