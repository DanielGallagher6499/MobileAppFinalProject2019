import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargaryenPage } from './targaryen';

@NgModule({
  declarations: [
    TargaryenPage,
  ],
  imports: [
    IonicPageModule.forChild(TargaryenPage),
  ],
})
export class TargaryenPageModule {}