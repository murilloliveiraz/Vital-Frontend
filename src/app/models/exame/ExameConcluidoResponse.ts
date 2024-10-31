export class ExameConcluidoResponse {
    exameId: number;
    nome: string;
    status: string;
    local: string;
    medicoId: number;
    data: Date;
    s3KeyPath: string;
    ArquivoResultadoUrl: string;
}
