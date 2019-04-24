import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaratheonPage } from './baratheon';

@NgModule({
  declarations: [
    BaratheonPage,
  ],
  imports: [
    IonicPageModule.forChild(BaratheonPage),
  ],
})
export class BaratheonPageModule {}