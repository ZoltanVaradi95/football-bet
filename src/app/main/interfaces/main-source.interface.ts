import { Observable } from "rxjs";
import { Match } from "./match.interface";
import { MatchesBase } from "./matches.base.interface";

export abstract class IMainSource {

  abstract getMatches(competitionId: string, filter?: string): Observable<MatchesBase>;
  abstract getCompetitions(): Observable<MatchesBase>;
  abstract getMatchDetails(matchId: string): Observable<Match>;
}
