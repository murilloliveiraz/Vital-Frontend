import { AdminRequestContract } from "./adminRequestContract";

export class AdminResponseContract extends AdminRequestContract {
  id: number;
  userId: string;
  dataCriacao: Date;
  dataInativacao?: Date | null;
  role: string;
}
