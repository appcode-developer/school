import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { MabraderPage } from '../mabrader/mabrader'


@Component({
  selector: 'page-gradebase',
  templateUrl: 'gradebase.html'
})

export class GradebasePage {

constructor(public navCtrl: NavController,public navParams: NavParams ) {
	console.log(this.navParams.get("colegio"));

}

  comprarProductos() {
  	this.navCtrl.push (MabraderPage,{
  		colegio:this.navParams.get("colegio"),
  		grado:"maternal"
  	});

  }




	
  

  }
