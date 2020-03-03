import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Segment1Page } from './segment1.page';

const routes: Routes = [
  {
    path: '',
    component: Segment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Segment1PageRoutingModule {}
