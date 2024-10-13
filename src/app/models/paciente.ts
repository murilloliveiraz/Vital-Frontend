export class Paciente {
  id: number;
  nome: string;
  sexo: string;
  dataNascimento: Date;

  constructor(
    id: number,
    nome: string,
    sexo: string,
    dataNascimento: Date,
  ) {
    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
  }
}
