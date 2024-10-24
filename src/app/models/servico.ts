export class Servico {
    id: number;
    titulo: string;
    descricao: string;

    constructor(
      id: number,
      titulo: string,
      descricao: string,
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
    }
}
