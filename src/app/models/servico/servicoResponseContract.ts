import { ServicoRequestContract } from "./servicoRequestContract";

export class ServicoResponseContract extends ServicoRequestContract{
  servicoId: number;
  dataInativacao: Date;
}
