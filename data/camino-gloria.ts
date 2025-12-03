/**
 * Datos del Camino a la Gloria - Clausura UNER 2025
 * Federal Futbol Club - Campeón
 */

export interface MatchData {
  id: number;
  fecha: string;
  instancia: "Fase de Grupos" | "Semifinal" | "Final";
  rival: string;
  escudoRival: string;
  golesLocal: number;
  golesVisitante: number;
  resultado: "victoria" | "empate" | "derrota";
  fechaPartido?: string;
  destacado?: string;
}

export const caminoGloriaData: MatchData[] = [
  {
    id: 1,
    fecha: "Fecha 1",
    instancia: "Fase de Grupos",
    rival: "Montecarlo",
    escudoRival: "/img/escudos/montecarlo.webp",
    golesLocal: 0,
    golesVisitante: 0,
    resultado: "empate",
    destacado: "Debut sólido con portería imbatida",
  },
  {
    id: 2,
    fecha: "Fecha 2",
    instancia: "Fase de Grupos",
    rival: "Skabyos",
    escudoRival: "/img/escudos/skabyos.webp",
    golesLocal: 3,
    golesVisitante: 1,
    resultado: "victoria",
    destacado: "Primera victoria contundente",
  },
  {
    id: 3,
    fecha: "Fecha 3",
    instancia: "Fase de Grupos",
    rival: "Evasores",
    escudoRival: "/img/escudos/evasores.webp",
    golesLocal: 4,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "Goleada histórica",
  },
  {
    id: 4,
    fecha: "Fecha 4",
    instancia: "Fase de Grupos",
    rival: "Saca Clavo",
    escudoRival: "/img/escudos/saca-clavo.webp",
    golesLocal: 1,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "Victoria táctica",
  },
  {
    id: 5,
    fecha: "Fecha 5",
    instancia: "Fase de Grupos",
    rival: "Ñandubay",
    escudoRival: "/img/escudos/nandubay.webp",
    golesLocal: 1,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "Solidez defensiva",
  },
  {
    id: 6,
    fecha: "Fecha 6",
    instancia: "Fase de Grupos",
    rival: "Jagger",
    escudoRival: "/img/escudos/jagger.webp",
    golesLocal: 3,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "Dominio total",
  },
  {
    id: 7,
    fecha: "Fecha 7",
    instancia: "Fase de Grupos",
    rival: "Ortópteros",
    escudoRival: "/img/escudos/ortopteros.webp",
    golesLocal: 1,
    golesVisitante: 2,
    resultado: "derrota",
    destacado: "Única derrota de la temporada",
  },
  {
    id: 8,
    fecha: "Semifinal",
    instancia: "Semifinal",
    rival: "Saca Clavos",
    escudoRival: "/img/escudos/saca-clavo.webp",
    golesLocal: 1,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "Revancha perfecta",
  },
  {
    id: 9,
    fecha: "Final",
    instancia: "Final",
    rival: "Ortópteros",
    escudoRival: "/img/escudos/ortopteros.webp",
    golesLocal: 1,
    golesVisitante: 0,
    resultado: "victoria",
    destacado: "¡CAMPEONES! Venganza consumada",
  },
];

export const estadisticasTorneo = {
  partidosJugados: 9,
  victorias: 7,
  empates: 1,
  derrotas: 1,
  golesFavor: 15,
  golesContra: 3,
  porteriaInvicta: 6,
};
