import { HospitalRequestContract } from "./hospitalRequestContract";

export class HospitalResponseContract extends HospitalRequestContract{
  hospitalId: number;
  dataInativacao: Date;
}
