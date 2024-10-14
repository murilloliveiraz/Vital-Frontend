export interface RegistroConteudo {
  exame?: string;
  local?: string;
  queixaDoPaciente?: string;
  historiaClinica?: string;
  pressaoArterial?: string;
  frequenciaCardiaca?: number;
  temperatura?: number;
  diagnostico?: string;
  planoDeTratamento?: string;
  [key: string]: any;
}
