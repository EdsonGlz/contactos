import { Component } from '@angular/core';
import { IonicPage, NavController,  Alert, AlertController, NavParams } from 'ionic-angular';

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
  icono= "../assets/Hbarba.png";
  nombre="";
  insta="";
  facebook="";
  email="";
  twitter="";
  apodo="";
  numero="";


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos=this.navParams.get("contactos");

  }



  contactos=[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregar(){
    if (this.numero.length == 0 || this.nombre.length == 0 || this.insta.length == 0 || this.facebook.length == 0 || this.email.length == 0 || this.twitter.length == 0 || this.apodo.length == 0){
      const alert = this.alertCtrl.create({
        title: 'Oops',
        subTitle: 'La nota esta vacia',
        buttons: ['OK']
      });

      alert.present();
  }

      else{
        this.contactos.push({icono: this.icono, numero: this.numero, nombre: this.nombre, insta: this.insta, facebook: this.facebook, email: this.email, twitter: this.twitter, apodo:this.apodo})
      }
    }

  }

