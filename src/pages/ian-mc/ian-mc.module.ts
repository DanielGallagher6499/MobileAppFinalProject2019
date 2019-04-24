import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IanMcPage } from './ian-mc';

@NgModule({
  declarations: [
    IanMcPage,
  ],
  imports: [
    IonicPageModule.forChild(IanMcPage),
  ],
})
export class IanMcPageModule {}
