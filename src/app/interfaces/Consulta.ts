import { Documento } from './../models/documento';
export interface Consulta {
  id: number;
  nome: string;
  local: string;
  data: Date;
  status: string;
  statusPagamento: string;
  tipoConsulta: string;
  meetLink?: string;
  documentos: Documento[];
}



