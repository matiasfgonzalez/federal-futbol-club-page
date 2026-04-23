export interface IMatch {
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  score: string;
}

export interface IMatchResults {
  zoneA: IMatch[];
  zoneB: IMatch[];
}

export interface ITeam {
  team: string;
  teamLogo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface ILeagueTable {
  zoneA: ITeam[];
  zoneB: ITeam[];
}

export interface IResultsSection {
  zoneResults: IMatch[];
  zoneName: string;
}

export interface ILeagueTableSection {
  zoneTable: ITeam[];
  zoneName: string;
}

// --- Sistema de Torneos ---

export type EstadoPartido =
  | "PROGRAMADO"
  | "EN_CURSO"
  | "COMPLETADO"
  | "POSTERGADO"
  | "SUSPENDIDO"
  | "CANCELADO";

export type EstadoTorneo = "PROXIMO" | "EN_CURSO" | "FINALIZADO";

export interface IPartidoTorneo {
  id: number;
  fecha: string;
  fechaPartido: string;
  hora: string;
  sede: string;
  instancia: string;
  estado: EstadoPartido;
  categoria?: string;
  equipoLocal: string;
  escudoLocal: string;
  equipoVisitante: string;
  escudoVisitante: string;
  golesLocal: number | null;
  golesVisitante: number | null;
  destacado?: string | null;
}

export interface ICategoriaInfo {
  nombre: string;
  id: string;
  equipos: string[];
}

export interface ITorneo {
  id: string;
  nombre: string;
  temporada: string;
  sede: string;
  estado: EstadoTorneo;
  fechaInicio: string;
  escudoFederal: string;
  listaBuenaFe?: string;
  categoriaFederal?: string;
  categorias?: ICategoriaInfo[];
  partidos: IPartidoTorneo[];
  otrosPartidos?: IPartidoTorneo[];
}
