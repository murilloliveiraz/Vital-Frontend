export interface AgendarConsultaFormResponse {
    nome: string;
    data: Date;
    tipoConsulta: string;
    local: string;
    queixas: string;
    email: string;
    medicoId: number;
    pacienteId?: number;
    valor: number;
}
