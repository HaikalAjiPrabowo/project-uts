import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMateriPage } from './list-materi.page';

const routes: Routes = [
  {
    path: '',
    component: ListMateriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMateriPageRoutingModule {}
