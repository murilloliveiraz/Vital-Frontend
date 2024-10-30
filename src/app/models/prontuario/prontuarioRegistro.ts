import { RegistroConteudo } from "src/app/interfaces/RegistroConteudo";

export class ProntuarioRegistro {
  id: string;
  prontuarioId: number;
  tipo: string;
  data: Date;
  conteudo: RegistroConteudo;
}
