import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TormundGiantsbanePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tormund-giantsbane',
  templateUrl: 'tormund-giantsbane.html',
})
export class TormundGiantsbanePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TormundGiantsbanePage');
  }

  openKristofer(){
    this.navCtrl.push('KristoferHivjuPage');
  }

}