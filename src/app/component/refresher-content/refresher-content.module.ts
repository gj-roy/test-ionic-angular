import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherContentPageRoutingModule } from './refresher-content-routing.module';

import { RefresherContentPage } from './refresher-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherContentPageRoutingModule
  ],
  declarations: [RefresherContentPage]
})
export class RefresherContentPageModule {}
