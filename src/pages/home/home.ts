import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { ContactoPage } from '../contacto/contacto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  agregar = AgregarPage;
  contacto = ContactoPage; 

  constructor(public navCtrl: NavController) {

  }
  contactos =[
    {icono: "../assets/Hblanco.png", nombre: "Edson Gonzalez", numero: "(871) 178-5027", email: "gonzalez.edson.a@gmail.com", facebook: "EdsonGlz", twitter: "@EdsonGonzalez", insta: "Edson Gonzalez", apodo: "Torreon"},
    {icono: "../assets/Hlentes.png", nombre: "Ernesto Palacios", numero: "(55) 178-5027", email: "epalacioscacho@gmail.com", facebook: "Ernesto Palacios", twitter: "@ErnestoPalacios", insta: "Ernesto Palacioss", apodo: "CDMX" },
    {icono: "../assets/Hafro.png", nombre: "Daniel de la Torre", numero: "(33) 178-5027", email: "danydlt@gmail.com", facebook: "Daniel de la Torre", twitter: "@DanieldelaTorre", insta: "Dany DLT", apodo: "Luisito Comunica" }
  
  ];

  clickMas(){
    this.navCtrl.push(this.agregar, {contactos: this.contactos});
  }

  clickAvatar(c){

    this.navCtrl.push(this.contacto, c);


  }


}
