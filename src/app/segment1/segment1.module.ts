import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Segment1PageRoutingModule } from './segment1-routing.module';

import { Segment1Page } from './segment1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Segment1PageRoutingModule
  ],
  declarations: [Segment1Page]
})
export class Segment1PageModule {}
