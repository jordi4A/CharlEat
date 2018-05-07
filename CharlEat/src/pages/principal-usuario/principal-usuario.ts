import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerMenuUsuarioPage} from '../ver-menu-usuario/ver-menu-usuario';
import {VerCartaUsuarioPage} from '../ver-carta-usuario/ver-carta-usuario';
import { MandarAvisoPage } from '../mandar-aviso/mandar-aviso';
import { VerAvisosUsuarioPage } from '../ver-avisos-usuario/ver-avisos-usuario';
import { VerEncuestaDelDiaPage } from '../ver-encuesta-del-dia/ver-encuesta-del-dia';
import { VotarEncuestaPage, InfoPage } from '../pages';

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
    this.navCtrl.push(VerCartaUsuarioPage);
  }
  loadMandarAviso() {
    this.navCtrl.push(MandarAvisoPage);
  }
  loadVerAvisos() {
    this.navCtrl.push(VerAvisosUsuarioPage);
  }
  loadVotarEncuesta(){
    this.navCtrl.push(VotarEncuestaPage);

  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
}
