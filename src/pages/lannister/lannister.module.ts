    
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LannisterPage } from './lannister';

@NgModule({
  declarations: [
    LannisterPage,
  ],
  imports: [
    IonicPageModule.forChild(LannisterPage),
  ],
})
export class LannisterPageModule {}