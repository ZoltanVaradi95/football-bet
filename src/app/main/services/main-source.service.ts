import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMainSource } from '../interfaces/main-source.interface';
import { Match } from '../interfaces/match.interface';
import { MatchesBase } from '../interfaces/matches.base.interface';

@Injectable()
export class MainSourceService implements IMainSource {
  readonly baseURL = '/v4';

  constructor(private httpService: HttpClient) {}

  getCompetitions(): Observable<MatchesBase> {
    return this.httpService.get<MatchesBase>(`${this.baseURL}/competitions`, {
      responseType: 'json',
    });
  }

  getMatches(competitionId: string, filter?: string): Observable<MatchesBase> {
    let params: HttpParams = new HttpParams();
    if (filter) {
      params = params.append('status', filter);
    }
    return this.httpService.get<MatchesBase>(
      `${this.baseURL}/competitions/${competitionId}/matches`,
      { params, responseType: 'json' }
    );
  }

  getMatchDetails(matchId: string): Observable<Match> {
    return this.httpService.get<Match>(`${this.baseURL}/matches/${matchId}`);
  }
}
