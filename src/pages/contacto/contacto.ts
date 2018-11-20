import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  email =""; 
  icono = "";
  facebook="";
  twitter="";
  instagram = "";
  numero="";
  nombre="";
  apodo="";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.nombre = this.navParams.get("nombre");
    this.email = this.navParams.get("email"); 
    this.facebook = this.navParams.get("facebook");
    this.icono = this.navParams.get("icono");
    this.twitter = this.navParams.get("twitter");
    this.instagram = this.navParams.get("insta");
    this.numero = this.navParams.get("numero");
    this.apodo = this.navParams.get("apodo");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
