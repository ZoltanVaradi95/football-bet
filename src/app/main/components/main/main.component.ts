import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Competition } from '../../interfaces/competition.interface';
import { MatchesBase } from '../../interfaces/matches.base.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  readonly displayedColumns: string[] = [
    'name',
    'code',
    'type',
    'actionButtons',
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<Competition>;

  constructor(private footballService: MainService) {}

  // Load competitions
  ngOnInit(): void {
    this.footballService
      .getCompetitions()
      .subscribe(
        (item: MatchesBase) =>
          (this.dataSource = new MatTableDataSource(item.competitions))
      );
  }
}
