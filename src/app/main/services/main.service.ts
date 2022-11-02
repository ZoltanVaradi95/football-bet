import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IMainSource } from '../interfaces/main-source.interface';
import { Match } from '../interfaces/match.interface';
import { MatchesBase } from '../interfaces/matches.base.interface';

@Injectable()
export class MainService {
  constructor(private mainSourceService: IMainSource) {}

  getMatches(competitionId: string, filter?: string): Observable<MatchesBase> {
    return this.mainSourceService.getMatches(competitionId, filter).pipe();
  }

  getCompetitions(): Observable<MatchesBase> {
    return this.mainSourceService.getCompetitions().pipe();
  }

  getMatchDetails(matchId: string): Observable<Match> {
    return this.mainSourceService.getMatchDetails(matchId).pipe();
  }
}
