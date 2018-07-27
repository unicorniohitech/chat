import { CadastroPage } from './../pages/cadastro/cadastro';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import * as firebase from 'firebase';
 
const config = {
   apiKey: "AIzaSyDurfMuUFvQ1wVNdu2yL22HLdU6Mv21x3A",
    authDomain: "chat-46d82.firebaseapp.com",
    databaseURL: "https://chat-46d82.firebaseio.com",
    projectId: "chat-46d82",
    storageBucket: "chat-46d82.appspot.com",
    messagingSenderId: "329995602173"
};
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CadastroPage;
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}