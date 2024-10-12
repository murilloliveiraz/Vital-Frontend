export class Exame {
    public exameId: number;
    public nome: string;
    public status: string;
    public local: string;
    public nomePaciente: string;
    public data: string;
    public s3KeyPath: string;
    public arquivoResultadoUrl: string;

    constructor(
      exameId: number,
      nome: string,
      status: string,
      local: string,
      data: string,
      nomePaciente: string,
      s3KeyPath: string,
      arquivoResultadoUrl: string
  ) {
      this.exameId = exameId;
      this.nome = nome;
      this.nomePaciente = nomePaciente;
      this.status = status;
      this.local = local;
      this.data = data;
      this.s3KeyPath = s3KeyPath;
      this.arquivoResultadoUrl = arquivoResultadoUrl;
  }
}
