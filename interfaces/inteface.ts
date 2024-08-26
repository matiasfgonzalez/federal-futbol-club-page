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
