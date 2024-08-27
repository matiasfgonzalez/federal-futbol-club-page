import { ITeam } from "@/interfaces/inteface";

// Ordenar zoneA y zoneB por points, goalsAgainst, goalsFor, y team
export const compareTeams = (a: ITeam, b: ITeam) => {
  if (a.points !== b.points) {
    return b.points - a.points;
  }
  if (a.goalsAgainst !== b.goalsAgainst) {
    return a.goalsAgainst - b.goalsAgainst;
  }
  if (a.goalsFor !== b.goalsFor) {
    return b.goalsFor - a.goalsFor;
  }
  return a.team.localeCompare(b.team);
};
