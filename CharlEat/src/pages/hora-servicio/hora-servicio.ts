import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage} from '../pagina-principal/pagina-principal'
/**
 * Generated class for the HoraServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hora-servicio',
  templateUrl: 'hora-servicio.html',
})
export class HoraServicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoraServicioPage');
  }
  onLoadPaginaPrincipal() {
    // Reset the content nav to have just this page
    this.navCtrl.push(PaginaPrincipalPage);
  }
}