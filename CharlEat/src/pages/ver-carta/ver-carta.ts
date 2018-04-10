import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BebidasPage} from '../bebidas/bebidas';
import {PaginaPrincipalPage} from '../pagina-principal/pagina-principal';

/**
 * Generated class for the VerCartaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-carta',
  templateUrl: 'ver-carta.html',
})
export class VerCartaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerCartaPage');
  }
  onLoadPaginaPrincipal(){
    // Reset the content nav to have just this page
    this.navCtrl.push(PaginaPrincipalPage);    
  }
  onLoadBebidas() {
    // Reset the content nav to have just this page
    this.navCtrl.push(BebidasPage);
  }
}