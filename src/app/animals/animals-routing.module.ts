import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsPage } from './animals.page';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage
  },
  {
    path: ':id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsPageRoutingModule { }
