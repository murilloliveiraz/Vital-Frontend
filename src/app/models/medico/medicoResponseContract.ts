import { MedicoRequestContract } from "./medicoRequestContract";

export class MedicoResponseContract extends MedicoRequestContract {
  id: number;
  userId: string;
  dataCriacao: Date;
  dataInativacao?: Date | null;
  role: string;
}
