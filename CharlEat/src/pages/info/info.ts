import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  cerrarSesion(){
    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      subTitle: 'Cierre de sesión realizado con éxito',
      buttons: ['Aceptar'] 
    });
    alert.present();
      this.auth.logout();
  }

}
