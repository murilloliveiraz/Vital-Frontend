import { Paciente } from './paciente';

export class Exame {
    public exameId: number;
    public nome: string;
    public status: string;
    public local: string;
    public paciente: Paciente;
    public data: string;
    public s3KeyPath: string;
    public preparoPreConsulta: string;
    public queixa: string;
    public arquivoResultadoUrl: string;

    constructor(
      exameId: number,
      nome: string,
      status: string,
      local: string,
      data: string,
      paciente: Paciente,
      s3KeyPath: string,
      preparoPreConsulta: string,
      queixa: string,
      arquivoResultadoUrl: string
  ) {
      this.exameId = exameId;
      this.nome = nome;
      this.paciente = paciente;
      this.status = status;
      this.local = local;
      this.data = data;
      this.s3KeyPath = s3KeyPath;
      this.preparoPreConsulta = preparoPreConsulta;
      this.queixa = queixa;
      this.arquivoResultadoUrl = arquivoResultadoUrl;
  }
}
