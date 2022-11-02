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
  timeInterval!: Subscription;
  compId!: string;
  match!: Match;
  closeTimer$ = new Subject<any>();
  readonly footballStatus = Status;

  constructor(
    private footballService: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.compId = JSON.parse(this.route.snapshot.paramMap.get('matchid')!);

    this.timeInterval = interval(10000)
      .pipe(
        startWith(0),
        takeUntil(this.closeTimer$),
        switchMap(() => this.footballService.getMatchDetails(this.compId))
      )
      .subscribe({
        next: (res: Match) => {
          this.match = res;
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
