import { Documento } from '../documento';

export class AgendarConsultaResponseContract {
  id: number;
  nome: string;
  valorConsulta: number;
  queixasDoPaciente?: string;
  tipoConsulta: string;
  pacienteNome: string;
  local?: string;
  data: Date;
  pacienteId: number;
  medicoId: number;
  emailParaReceberNotificacoes: string;
  status: string;
  statusPagamento?: string;
  meetLink?: string;
  documentos?: Documento[] = [];
  tipo: 'consulta';
}
