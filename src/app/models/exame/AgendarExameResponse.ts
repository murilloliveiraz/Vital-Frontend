export class AgendarExameResponse {
    id: number;
    nome: string;
    pacienteNome: string;
    local: string;
    data: Date;
    pacienteId: number;
    medicoId: number;
    emailParaReceberResultado: string;
    status: string;
    statusPagamento: string;
    queixasDoPaciente: string;
    observacoesDaClinica: string;
    tipo: 'exame';
}
