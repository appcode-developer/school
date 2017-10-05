import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

public fireAuth: any;
public userData: any;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
    this.fireAuth = firebase.auth();
  this.userData = firebase.database().ref('/userData');
  }

  doLogin(email: string, password: string): any {
  return this.fireAuth.signInWithEmailAndPassword(email, password);
}

doLogout(): any {
  return this.fireAuth.signOut();
}

 register(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userData.child(newUser.uid).set({email: email});
      });
  }

   resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }



}
