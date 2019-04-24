import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TyrellPage } from './tyrell';

@NgModule({
  declarations: [
    TyrellPage,
  ],
  imports: [
    IonicPageModule.forChild(TyrellPage),
  ],
})
export class TyrellPageModule {}