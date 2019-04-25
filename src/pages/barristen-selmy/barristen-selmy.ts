import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarristenSelmyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barristen-selmy',
  templateUrl: 'barristen-selmy.html',
})
export class BarristenSelmyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarristenSelmyPage');
  }

  openIanMc(){
    this.navCtrl.push('IanMcPage');
  }

}