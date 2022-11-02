import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  interval,
  startWith,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
} from 'rxjs';
import { Status } from '../../enums/status.enum';
import { Match } from '../../interfaces/match.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit, OnDestroy {
  readonly footballStatus = Status;

  timeInterval!: Subscription;
  compId!: string;
  match!: Match;
  closeTimer$ = new Subject<any>();

  constructor(
    private footballService: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.compId = JSON.parse(this.route.snapshot.paramMap.get('matchid')!);
    // I've used polling for data changes since on the free plan of the api I only get 10 request per minute the interval is set to 10 seconds.
    this.timeInterval = interval(10000)
      .pipe(
        startWith(0),
        takeUntil(this.closeTimer$),
        switchMap(() => this.footballService.getMatchDetails(this.compId))
      )
      .subscribe({
        next: (res: Match) => {
          this.match = res;
          // When the match is no longer INPLAY then we set the timer to true and we end the polling
          if (this.match.status !== this.footballStatus.IN_PLAY) {
            this.closeTimer$.next(true);
          }
        },
      });
  }

  getMatchesURL(): void {
    this.footballService.getMatchDetails(this.compId);
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
}
