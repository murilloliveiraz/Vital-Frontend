import { PacienteRequestContract } from "./pacienteRequestContract";

export class PacienteResponseContract extends PacienteRequestContract {
  id: number;
  userId: string;
  dataCriacao: Date;
  dataInativacao?: Date | null;
  role: string;
}
