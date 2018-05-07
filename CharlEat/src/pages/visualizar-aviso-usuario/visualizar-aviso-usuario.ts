import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso.model';
import { Observable } from 'rxjs/Observable';

import { VerMenuUsuarioPage } from '../ver-menu-usuario/ver-menu-usuario';
import { PrincipalUsuarioPage} from '../principal-usuario/principal-usuario';
/**
 * Generated class for the VisualizarAvisoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-aviso-usuario',
  templateUrl: 'visualizar-aviso-usuario.html',
})
export class VisualizarAvisoUsuarioPage {
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
    this.navCtrl.setRoot(PrincipalUsuarioPage);
  }
  onLoadMenu() {
    this.navCtrl.push(VerMenuUsuarioPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarAvisoUsuarioPage');

  }

}
