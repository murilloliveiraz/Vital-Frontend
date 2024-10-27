import { Documento } from './documento';

export class Consulta {
  public consultaId: number;
  public nome: string;
  public status: string;
  public local: string;
  public tipoConsulta: string;
  public medico: string;
  public data: string;
  public s3KeyPath: string;
  public meetLink: string;
  public documentos: Documento[];

  constructor(
    consultaId: number,
    nome: string,
    status: string,
    local: string,
    tipoConsulta: string,
    medico: string,
    data: string,
    s3KeyPath: string,
    meetLink: string,
    documentos: Documento[]
) {
    this.consultaId = consultaId;
    this.nome = nome;
    this.status = status;
    this.local = local;
    this.tipoConsulta = tipoConsulta;
    this.medico = medico;
    this.data = data;
    this.s3KeyPath = s3KeyPath;
    this.meetLink = meetLink;
    this.documentos = documentos;
}
}
