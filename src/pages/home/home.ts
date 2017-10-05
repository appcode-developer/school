import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GradebasePage } from '../gradebase/gradebase';
import { SesionPage } from '../sesion/sesion';
import firebase from 'firebase';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,) { 

  firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    navCtrl.setRoot(SesionPage);
  }
});

}

  

 myDepartamento() {
  	this.navCtrl.push (GradebasePage);

  }

   myRules() {
    this.navCtrl.push (GradebasePage);

  }

     listaProductos() {
    this.navCtrl.push (GradebasePage);

  }

    verCiudad() {
  	this.navCtrl.push (GradebasePage);

  }

      verGradecult() {
    this.navCtrl.push (GradebasePage);

  }




}
