import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WarriorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warriors',
  templateUrl: 'warriors.html',
})
export class WarriorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarriorsPage');
  }

  btnJonClicked(){
    this.navCtrl.push('JonSnowPage');
  }

  btnBrienneClicked(){
    this.navCtrl.push('BrienneTarthPage');
  }

  btnAryaClicked(){
    this.navCtrl.push('AryaStarkPage');
  }

  btnBarristenClicked(){
    this.navCtrl.push('BarristenSelmyPage');
  }

  btnTormundClicked(){
    this.navCtrl.push('TormundGiantsbanePage');
  }

  btnBronnClicked(){
    this.navCtrl.push('BronnPage');
  }

  btnJaimeClicked(){
    this.navCtrl.push('JaimeLannisterPage');
  }

}