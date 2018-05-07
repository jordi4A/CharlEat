import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { VerCartaPage, EncuestaPage,  TodosLosPedidosPage, TablonComentariosPage, VerAvisosPage, InfoPage, VerTablonPage} from '../pages'
=======
import { VerCartaPage, EncuestaPage,  TodosLosPedidosPage, TablonComentariosPage, VerAvisosPage, VerTablonPage} from '../pages'
>>>>>>> a96ac106f76a7baa4b85eca3da323c591846c9df

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

  onLoadCarta() {
    // Reset the content nav to have just this page
    this.navCtrl.push(VerCartaPage);
  }
  onLoadEncuesta() {
    // Reset the content nav to have just this page
    this.navCtrl.push(EncuestaPage);
  }
  onLoadMenu() {
    // Reset the content nav to have just this page
    this.navCtrl.push(VerCartaPage);
  }
  onLoadPedidos() {
    // Reset the content nav to have just this page
    this.navCtrl.push(TodosLosPedidosPage);
  }
  onLoadTablon() {
    // Reset the content nav to have just this page
    this.navCtrl.push(VerTablonPage);
  }
  onLoadAvisos() {
    // Reset the content nav to have just this page
    this.navCtrl.push(VerAvisosPage);
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }


}
