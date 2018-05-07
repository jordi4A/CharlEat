import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../pages';

/**
 * Generated class for the TodosLosPedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos-los-pedidos',
  templateUrl: 'todos-los-pedidos.html',
})
export class TodosLosPedidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosLosPedidosPage');
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }

}
