import { UsuarioRequestContract } from "../usuario/usuarioRequestContract";

export class PacienteRequestContract extends UsuarioRequestContract {
  public dataNascimento: Date;
  public sexo: string = "";
}
