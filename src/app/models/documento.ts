export class Documento {
  public id: number;
  public downloadURL: string;

  constructor(
    id: number,
    downloadURL: string,
  ) {
      this.id = id;
      this.downloadURL = downloadURL;
  }
}
