import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarriorsPage } from './warriors';

@NgModule({
  declarations: [
    WarriorsPage,
  ],
  imports: [
    IonicPageModule.forChild(WarriorsPage),
  ],
})
export class WarriorsPageModule {}
