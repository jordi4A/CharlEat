import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage} from '../pagina-principal/pagina-principal'
import { PedidosAceptadosPage, PedidosEnEsperaPage } from '../pages';
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
    //this.navCtrl.push(PaginaPrincipalPage);
    this.navCtrl.setRoot(PaginaPrincipalPage);
  }
  onLoadPedidosAceptados() {
    // Reset the content nav to have just this page
    this.navCtrl.push(PedidosAceptadosPage);
  }
  onLoadPedidosEspera() {
    // Reset the content nav to have just this page
    this.navCtrl.push(PedidosEnEsperaPage);
  }
}
