import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoraServicioPage} from '../hora-servicio/hora-servicio'
import { HoraLibrePage} from '../hora-libre/hora-libre';
/**
 * Generated class for the PaginaPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html',
})
export class PaginaPrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaPrincipalPage');
  }

  onLoadHoraLibre() {
    // Reset the content nav to have just this page
    this.navCtrl.push(HoraLibrePage);
  }
  onLoadHoraServicio() {
    // Reset the content nav to have just this page
    this.navCtrl.push(HoraServicioPage);
  }


}
