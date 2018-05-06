import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerMenuUsuarioPage} from '../ver-menu-usuario/ver-menu-usuario';
import {VerCartaPage} from '../ver-carta/ver-carta';

/**
 * Generated class for the PrincipalUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-usuario',
  templateUrl: 'principal-usuario.html',
})
export class PrincipalUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalUsuarioPage');
  }

  loadMenuUsuario() {
    this.navCtrl.push(VerMenuUsuarioPage);
  }
  loadVerCarta() {
    this.navCtrl.push(VerCartaPage);
  }
}
