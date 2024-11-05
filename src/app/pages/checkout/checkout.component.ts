import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { PacienteResponseContract } from 'src/app/models/paciente/pacienteResponseContract';
import { PixPayment } from 'src/app/models/pagamentos/PixPayment';
import { CartaoCreditoService } from 'src/app/services/cartao-credito.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PixService } from 'src/app/services/pix.service';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from 'src/app/services/consulta.service';
import { AgendarConsultaResponseContract } from 'src/app/models/consulta/agendarConsultaResponseContract';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  selectedButton: string | null = "credito";
  qrCodeBase64: string = "";
  qrCodeChavePix: string = "";
  paciente: PacienteResponseContract;
  consultaId: number;
  consulta: AgendarConsultaResponseContract;
  pixPaymentGenerated: boolean = false;
  loadingPixData: boolean  = true;

  constructor(
    private location: Location,
    private creditoService: CartaoCreditoService,
    private pixService: PixService,
    public pacienteService: PacienteService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private consultaService: ConsultaService,
  ) {}

  ngOnInit() {
    const consultaId = this.route.snapshot.paramMap.get('id');
    this.carregarEmailUsuarioLogado();
    if(consultaId){
      const consultaIdNumber = Number(consultaId);
      this.consultaId = consultaIdNumber;
      this.getConsulta(consultaIdNumber);
    }
  }

  private carregarEmailUsuarioLogado() {
    const emailUserLogado = this.authService.getEmailUser();
    if (emailUserLogado) {
      this.carregarPacientePorEmail(emailUserLogado);
    }
  }

  private getConsulta(consultaId: number){
    this.consultaService.getConsultaById(consultaId).subscribe({
      next: (consulta: AgendarConsultaResponseContract) => {
        if (consulta) {
          this.consulta = consulta;
        } else {
          console.warn('Paciente não encontrado.');
        }
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  private carregarPacientePorEmail(email: string) {
    this.pacienteService.getByEmail(email).subscribe({
      next: (paciente: PacienteResponseContract) => {
        if (paciente) {
          this.paciente = paciente;
        } else {
          console.warn('Paciente não encontrado.');
        }
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      }
    });
  }

  voltar() {
    this.location.back();
  }

  selectButton(button: string) {
    this.selectedButton = button;
    if (button === 'pix') {
      this.pagarComPix();
    }
  }

  pagarComCartao(model: any) {
    this.creditoService.createPayment(model).subscribe(
      (response) => {
        console.log('Pagamento com cartão de crédito realizado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao processar pagamento com cartão de crédito:', error);
      }
    );
  }

  pagarComPix() {
    if (this.pixPaymentGenerated) {
      return;
    }

    const nomeCompleto = this.paciente.nome || '';
    const [primeiroNome, ...restoDoNome] = nomeCompleto.split(' ');
    const sobrenome = restoDoNome.join(' ') || '';

    const pixRequest: PixPayment = {
      emailPagador: this.paciente.email,
      cpfPagador: this.paciente.cpf,
      nomePagador: primeiroNome,
      nomeServico: this.consulta.nome,
      consultaId: this.consultaId,
      sobrenomePagador: sobrenome,
      valorConsulta: this.consulta.valorConsulta
    };

    this.pixService.createPayment(pixRequest).subscribe({
      next: (response: any) => {
        console.log(response);
        this.qrCodeBase64 = response.pointOfInteraction.transactionData.qrCodeBase64;
        this.qrCodeChavePix = response.pointOfInteraction.transactionData.qrCode;
        this.pixPaymentGenerated = true;
        this.loadingPixData = false;
      },
      error: (error) => {
        console.error('Erro ao processar pagamento com Pix:', error);
        this.loadingPixData = false;
      }
    });
  }
}
