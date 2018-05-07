import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage, InfoPage } from '../pages';

/**
 * Generated class for the PedidosAceptadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-aceptados',
  templateUrl: 'pedidos-aceptados.html',
})
export class PedidosAceptadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosAceptadosPage');
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
}
