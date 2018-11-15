import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombre="";
  insta="";
  facebook="";
  email="";
  twitter="";
  apodo="";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  contactos=[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregar(){
    if (this.nombre.length == 0 || this.insta.length == 0 || this.facebook.length == 0 || this.email.length == 0 ||){

    }

  }

}
