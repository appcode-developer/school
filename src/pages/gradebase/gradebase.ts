import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MabraderPage } from '../mabrader/mabrader'


@Component({
  selector: 'page-gradebase',
  templateUrl: 'gradebase.html'
})

export class GradebasePage {

constructor(public navCtrl: NavController) {}

  comprarProductos() {
  	this.navCtrl.push (MabraderPage);

  }




	
  

  }