export class Hospital {
    id: number;
    nome: string;
    endereco: string;
    estado: string;
    telefone: string;

    constructor(
      id: number,
      nome: string,
      endereco: string,
      estado: string,
      telefone: string,
    ) {
      this.id = id;
      this.nome = nome;
      this.endereco = endereco;
      this.estado = estado;
      this.telefone = telefone;
    }
}
