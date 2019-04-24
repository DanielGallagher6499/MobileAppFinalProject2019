import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AryaStarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arya-stark',
  templateUrl: 'arya-stark.html',
})
export class AryaStarkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AryaStarkPage');
  }

  openMaisie(){
    this.navCtrl.push('MaisieWilliamsPage');
  }

}