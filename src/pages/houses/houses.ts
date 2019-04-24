import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HousesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html',
})
export class HousesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousesPage');
  }

  btnStarkClicked(){
    this.navCtrl.push('StarkPage');
  }

  btnLannisterClicked(){
    this.navCtrl.push('LannisterPage');
  }

  btnTargaryenClicked(){
    this.navCtrl.push('TargaryenPage');
  }

  btnTyrellClicked(){
    this.navCtrl.push('TyrellPage');
  }

  btnGreyjoyClicked(){
    this.navCtrl.push('GreyjoyPage');
  }

  btnBaratheonClicked(){
    this.navCtrl.push('BaratheonPage');
  }

}
