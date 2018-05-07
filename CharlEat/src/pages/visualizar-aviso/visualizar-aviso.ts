import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso.model';
import { Observable } from 'rxjs/Observable';

import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';


/**
 * Generated class for the VisualizarAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-aviso',
  templateUrl: 'visualizar-aviso.html',
})
export class VisualizarAvisoPage {

  aviso: Aviso;
  avisos$: Observable<Aviso[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private avisosService: AvisosService) {
    this.aviso = navParams.data;
    this.avisos$ = this.avisosService
      .getAviso(this.aviso)  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)s
      .map(
        changes => {
          return changes.map(c=> ({
            key: c.payload.key, ...c.payload.val()
          }));
        });

  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);
  }
  // onLoadMenu() {
  //   this.navCtrl.push(VerMenuUsuarioPage);
  // }

  onAvisoRemove($event) {
    this.avisosService.removeAviso(this.aviso);
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarAvisoPage');

  }

}
