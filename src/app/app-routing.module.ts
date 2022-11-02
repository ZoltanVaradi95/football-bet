import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/components/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () => import('src/app/main/main.module').then(m => m.MainModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
