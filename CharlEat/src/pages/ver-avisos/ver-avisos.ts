import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso.model';
import { VisualizarAvisoPage } from '../visualizar-aviso/visualizar-aviso';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { Observable } from 'rxjs/Observable';
import { InfoPage } from '../pages';

/**
 * Generated class for the VerAvisosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-avisos',
  templateUrl: 'ver-avisos.html',
})
export class VerAvisosPage {

  avisos$: Observable<Aviso[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private avisosService: AvisosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerAvisosPage');
    this.avisos$ = this.avisosService.getAvisos().snapshotChanges() 
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
  onAvisoTapped($event, aviso) {
    this.navCtrl.push(VisualizarAvisoPage, aviso);
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }

}
