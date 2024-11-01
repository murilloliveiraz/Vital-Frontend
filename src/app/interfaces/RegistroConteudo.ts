export interface RegistroConteudo {
  tipo: string;
  exame?: string;
  local?: string;
  queixaDoPaciente?: string;
  observacoesPreExame?: string;
  historiaClinica?: string;
  exameFisico?: string;
  pressaoArterial?: string;
  frequenciaCardiaca?: number;
  temperatura?: number;
  diagnostico?: string;
  planoDeTratamento?: string;
  observacoes?: string;
  medicamentos?: string;
  [key: string]: any;
}
