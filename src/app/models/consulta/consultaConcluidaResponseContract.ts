import { Documento } from '../documento';

export class ConsultaConcluidaResponseContract {
  id: number;
  nome: string;
  status: string;
  statusPagamento: string;
  valorConsulta?: number;
  tipoConsulta: string;
  local?: string;
  data: Date;
  pacienteId: number;
  meetLink?: string = '';
  medicoId: number;
  documentos: Documento[] = [];
}
