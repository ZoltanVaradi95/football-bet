import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { finalize, pipe, take } from 'rxjs';
import { Status } from '../../enums/status.enum';
import { Match } from '../../interfaces/match.interface';
import { MatchesBase } from '../../interfaces/matches.base.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  readonly eventStatus = Status;

  compId!: string;

  eventStatusFilter!: Status;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'area',
    'home',
    'score',
    'away',
    'utcDate',
    'status',
    'actionButtons',
  ];
  dataSource!: MatTableDataSource<Match>;

  constructor(
    private footballService: MainService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.compId = JSON.parse(this.route.snapshot.paramMap.get('id')!);
    this.footballService
      .getMatches(this.compId)
      .pipe(
        take(1),
        finalize(() => (this.dataSource.paginator = this.paginator))
      )
      .subscribe(
        (item: MatchesBase) =>
          (this.dataSource = new MatTableDataSource(item.matches))
      );
  }

  onFilterChange(filter: MatSelectChange) {
    this.footballService
      .getMatches(this.compId, filter.value.value)
      .pipe(
        take(1),
        finalize(() => (this.dataSource.paginator = this.paginator))
      )
      .subscribe(
        (item: MatchesBase) =>
          (this.dataSource = new MatTableDataSource(item.matches))
      );
  }
}
