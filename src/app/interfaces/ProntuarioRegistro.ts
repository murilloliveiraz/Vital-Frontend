import { ObservacoesPaciente } from './ObservacoesPaciente';
import { RegistroConteudo } from './RegistroConteudo';

export interface ProntuarioRegistro {
  id: number;
  pacienteId: number;
  tipo: string;
  data: Date;
  conteudo: RegistroConteudo;
  observacoes?: ObservacoesPaciente;
}
