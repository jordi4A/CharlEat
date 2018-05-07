import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TablonService } from '../../services/tablon.service';
import { Comentario } from '../../models/comentario.model';
import { EscribirComentarioPage } from '../escribir-comentario/escribir-comentario';
import { PrincipalUsuarioPage } from '../principal-usuario/principal-usuario';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the VerTablonUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-tablon-usuario',
  templateUrl: 'ver-tablon-usuario.html',
})
export class VerTablonUsuarioPage {

  comentarios$: Observable<Comentario[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, public tablonService: TablonService) {
    console.log('ionViewDidLoad VerTablonUsuarioPage');
    this.comentarios$ = this.tablonService.getComentarios().snapshotChanges() 
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerTablonPage');
  }

  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PrincipalUsuarioPage);
  }

  onEscribir($event) {
    this.navCtrl.push(EscribirComentarioPage);
  }

}
