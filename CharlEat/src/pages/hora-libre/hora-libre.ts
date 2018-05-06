import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaPrincipalPage} from '../pagina-principal/pagina-principal';
import { EncuestaPage} from '../encuesta/encuesta';
import { TablonComentariosPage} from '../tablon-comentarios/tablon-comentarios';
import { TodosLosPedidosPage} from '../todos-los-pedidos/todos-los-pedidos';
import { VerCartaPage} from '../ver-carta/ver-carta';
/**
 * Generated class for the HoraLibrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hora-libre',
  templateUrl: 'hora-libre.html',
})
export class HoraLibrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoraLibrePage');
  }

  onLoadPaginaPrincipal() {
    // Reset the content nav to have just this page
    //this.navCtrl.push(PaginaPrincipalPage);
    this.navCtrl.setRoot(PaginaPrincipalPage);
  }
  onLoadTramitesCarta() {
    // Reset the content nav to have just this page
    this.navCtrl.push(VerCartaPage);
  }
  onLoadEncuesta() {
    // Reset the content nav to have just this page
    this.navCtrl.push(EncuestaPage);
  }
  onLoadTodosLosPedidos() {
    // Reset the content nav to have just this page
    this.navCtrl.push(TodosLosPedidosPage);
  }
  onLoadTablonComentarios() {
    // Reset the content nav to have just this page
    this.navCtrl.push(TablonComentariosPage);
  }
}
