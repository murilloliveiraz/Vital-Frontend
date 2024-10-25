export class Paciente {
  id: number;
  nome: string;
  sexo: string;
  cpf: string;
  dataNascimento: Date;

  constructor(
    id: number,
    nome: string,
    sexo: string,
    cpf: string,
    dataNascimento: Date,
  ) {
    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }
}
