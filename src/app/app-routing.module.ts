import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Life2DComponent} from './components/Life2D/Life2D.component';
import {TourOfLifeComponent} from './components/TourOfLife/TourOfLife.component';

const routes: Routes = [
  {path: '', redirectTo: '/life2d', pathMatch: 'full'},
  {path: 'life2d', component: Life2DComponent},
  {path: 'life2d/:config', component: Life2DComponent},
  {path: 'touroflife', component: TourOfLifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
