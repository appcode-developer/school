import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import firebase from 'firebase';

/**
 * Generated class for the BookbraderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@Component({
  selector: 'page-mabrader',
  templateUrl: 'mabrader.html'
})

export class MabraderPage {
  private optionesHttp;
  private loading : any;
  private trampolin: boolean = false;
  private learningJourneys: boolean = false;
  private colegio: string = null;
  private color: string = null;
  private pago: string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    this.optionesHttp = new RequestOptions({ headers: headers });

    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Enviando...'
    });

    console.log(this.navParams.get("colegio")+" "+this.navParams.get("grado"))

  }

  enviarDatos() {
    this.loading.present();
    //console.log(this.convertirInformacion());

   this.http.post("http://www.schoolbookspty.com/psite/api/enviarMail.php",
    JSON.stringify(this.convertirInformacion()), this.optionesHttp)
      .subscribe(
      data => {
        this.mostrarAlerta();
        this.loading.dismiss();
        this.limpiarCampos();
      },
      error => {
        alert(error);
        this.loading.dismiss();
      });

  }

    limpiarCampos() {
    this.trampolin = false;
    this.learningJourneys = false;
    this.colegio = null;
    this.color = null;
    this.pago = null;
  }



  convertirInformacion() {
    var libros = [];

    if(this.trampolin != false)
      libros.push('trampolin')
    if(this.learningJourneys != false)
      libros.push('learningJourneys');
    

    let data = {
      email: firebase.auth().currentUser.email,	
      libros: libros,
      colegio: this.navParams.get("colegio"),
      grado: this.navParams.get("grado"),
      color: this.color[0],
      pago: this.pago[0],
    }

    return data;
  }

  mostrarAlerta() {
    let alert = this.alertCtrl.create({
      title: 'Obteniendo datos..',
      subTitle: 'Datos Enviados',
      buttons: ['OK']
    });
    alert.present();
  }




  }
