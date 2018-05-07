import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { PrincipalUsuarioPage, PaginaPrincipalPage } from '../pages';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email : '', password : ''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Registro de Usuario',
        subTitle: 'Registro de usuario realizado con éxito',
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.setRoot(PrincipalUsuarioPage);  // De este modo se reinicia la barra de arriba
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }
  login()
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Iniciar Sesion',
        subTitle: 'Identificación de usuario realizada con éxito',
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
  onLoadCocina(){
    // Reset the content nav to have just this page
    this.navCtrl.push(PaginaPrincipalPage);
  }

}