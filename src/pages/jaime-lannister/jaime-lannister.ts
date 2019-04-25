import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JaimeLannisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jaime-lannister',
  templateUrl: 'jaime-lannister.html',
})
export class JaimeLannisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JaimeLannisterPage');
  }

  openNikolajCoster(){
    this.navCtrl.push('NikolajCosterPage');
  }

}