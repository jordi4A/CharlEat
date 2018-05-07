import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso.model';
import { VisualizarAvisoUsuarioPage } from '../visualizar-aviso-usuario/visualizar-aviso-usuario';
import { Observable } from 'rxjs/Observable';

import { VerMenuUsuarioPage } from '../ver-menu-usuario/ver-menu-usuario';
import { PrincipalUsuarioPage} from '../principal-usuario/principal-usuario';
import { InfoPage } from '../pages';

/**
 * Generated class for the VerAvisosUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-avisos-usuario',
  templateUrl: 'ver-avisos-usuario.html',
})
export class VerAvisosUsuarioPage {

  avisos$: Observable<Aviso[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private avisosService: AvisosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerAvisosUsuarioPage');
    this.avisos$ = this.avisosService.getAvisosUsuario("Luis").snapshotChanges() 
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
  onAvisoTapped($event, aviso) {
    this.navCtrl.push(VisualizarAvisoUsuarioPage, aviso);
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }


}
