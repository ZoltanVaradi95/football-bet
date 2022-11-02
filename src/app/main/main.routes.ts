import { Routes } from '@angular/router';
import { EventComponent } from './components/events/event.component';
import { MainComponent } from './components/main/main.component';
import { MatchComponent } from './components/matches/match.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    component: EventComponent,
  },
  {
    path: ':eventid/:matchid',
    component: MatchComponent,
  },
]