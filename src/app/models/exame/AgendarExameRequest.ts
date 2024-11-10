export class AgendarExameRequest {
    nome: string;
    emailParaReceberResultado: string;
    local: string;
    data: Date;
    pacienteId: number;
    medicoId: number;
    queixasDoPaciente: string;
    observacoesDaClinica: string;
}
