import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisualizarAvisoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-aviso-usuario',
  templateUrl: 'visualizar-aviso-usuario.html',
})
export class VisualizarAvisoUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarAvisoUsuarioPage');
  }

}
