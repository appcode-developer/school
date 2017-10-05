import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GradebasePage } from '../pages/gradebase/gradebase';
import { MabraderPage } from '../pages/mabrader/mabrader';
import { WalkPage } from '../pages/walk/walk';
import { SesionPage } from '../pages/sesion/sesion';
import { RegisterPage } from '../pages/register/register';
import { BookbraderPage } from '../pages/bookbrader/bookbrader';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
 


 // AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyBod7KNBBGk22VOM_h4MliQT1iYNkG9gf4",
    authDomain: "proionic-111e8.firebaseapp.com",
    databaseURL: "https://proionic-111e8.firebaseio.com",
    projectId: "proionic-111e8",
    storageBucket: "proionic-111e8.appspot.com",
    messagingSenderId: "832130569102"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GradebasePage,
    WalkPage,
    SesionPage,
    RegisterPage,
    ResetpwdPage,
    BookbraderPage,
    MabraderPage


    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp,
    HomePage,
    GradebasePage,
    WalkPage,
    SesionPage,
    RegisterPage,
    ResetpwdPage,
    BookbraderPage,
    MabraderPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
