import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './component.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPage
  },
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentPageRoutingModule {}
