import { UsuarioRequestContract } from "../usuario/usuarioRequestContract";

export class MedicoRequestContract extends UsuarioRequestContract {
  especialidade: string = "";
  crm: string = "";
  hospitalId: number;
}
