import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMateriPageRoutingModule } from './list-materi-routing.module';

import { ListMateriPage } from './list-materi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMateriPageRoutingModule
  ],
  declarations: [ListMateriPage]
})
export class ListMateriPageModule {}
