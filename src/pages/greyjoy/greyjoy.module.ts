import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreyjoyPage } from './greyjoy';

@NgModule({
  declarations: [
    GreyjoyPage,
  ],
  imports: [
    IonicPageModule.forChild(GreyjoyPage),
  ],
})
export class GreyjoyPageModule {}