export class AgendarConsultaRequestContract {
  nome: string;
  valorConsulta: number;
  tipoConsulta: string;
  local?: string;
  queixasDoPaciente?: string;
  statusPagamento?: string;
  data: Date;
  pacienteId: number;
  medicoId: number;
  emailParaReceberNotificacoes: string;
}
