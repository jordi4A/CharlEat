import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage, InfoPage } from '../pages';

/**
 * Generated class for the PedidosEnEsperaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-en-espera',
  templateUrl: 'pedidos-en-espera.html',
})
export class PedidosEnEsperaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosEnEsperaPage');
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
}
