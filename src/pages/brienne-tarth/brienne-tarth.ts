import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BrienneTarthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brienne-tarth',
  templateUrl: 'brienne-tarth.html',
})
export class BrienneTarthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrienneTarthPage');
  }

  openBrienne(){
    this.navCtrl.push('GwenChristiePage');
  }


}