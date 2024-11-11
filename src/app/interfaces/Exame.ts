export interface Exame {
  id: number;
  nome: string;
  local: string;
  data: Date;
  status: string;
  tipo: 'exame';
  arquivoResultadoUrl: string;
  urlResultadoClinicaExterna?: string;
}
