    
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JonSnowPage } from './jon-snow';

@NgModule({
  declarations: [
    JonSnowPage,
  ],
  imports: [
    IonicPageModule.forChild(JonSnowPage),
  ],
})
export class JonSnowPageModule {}