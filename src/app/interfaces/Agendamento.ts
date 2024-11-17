export interface Agendamento {
  id: number;
  nome: string;
  pacienteNome: string;
  local?: string;
  statusPagamento?: string;
  data: Date;
  tipo: 'exame' | 'consulta';
  pacienteId: number;
}
