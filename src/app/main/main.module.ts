import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutes } from './main.routes';
import { IMainSource } from './interfaces/main-source.interface';
import { MainSourceService } from './services/main-source.service';
import { MainComponent } from './components/main/main.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventComponent } from './components/events/event.component';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './components/matches/match.component';
import { MatCardModule } from '@angular/material/card';
import { DisplayScore } from './pipe/display-score.pipe';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(MainRoutes),
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  declarations: [MainComponent, EventComponent, MatchComponent, DisplayScore],
  providers: [
    MainService,
    {
      provide: IMainSource,
      useClass: MainSourceService,
    },
  ],
})
export class MainModule {}
