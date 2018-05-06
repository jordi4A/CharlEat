import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLoadCocina(){
    // Reset the content nav to have just this page
    this.navCtrl.push(PaginaPrincipalPage);    
  }
  onLoadCliente() {
    // Reset the content nav to have just this page
    this.navCtrl.push(PaginaPrincipalPage);
  }
}
