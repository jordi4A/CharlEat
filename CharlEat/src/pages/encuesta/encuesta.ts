import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VerEncuestaDelDiaPage} from '../ver-encuesta-del-dia/ver-encuesta-del-dia';
import { RealizarEncuestaPage, PaginaPrincipalPage } from '../pages';
/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
  }
  onLoadVerEncuesta(){
    // Reset the content nav to have just this page
    this.navCtrl.push(VerEncuestaDelDiaPage);    
  }
  onLoadRealizarEncuesta(){
    // Reset the content nav to have just this page
    this.navCtrl.push(RealizarEncuestaPage);    
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }

}