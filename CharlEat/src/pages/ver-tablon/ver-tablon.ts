import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TablonService } from '../../services/tablon.service';
import { Comentario } from '../../models/comentario.model';
import { EscribirComentarioPage } from '../escribir-comentario/escribir-comentario';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the VerTablonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-tablon',
  templateUrl: 'ver-tablon.html',
})
export class VerTablonPage {

  comentarios$: Observable<Comentario[]>
  constructor(public navCtrl: NavController, public navParams: NavParams, public tablonService: TablonService) {
    console.log('ionViewDidLoad VerTablonPage');
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
    this.navCtrl.setRoot(PaginaPrincipalPage);
  }

  onRemove($event, value: Comentario){
    this.tablonService.removeComentario(value);
  }

  onEscribir($event) {
    this.navCtrl.push(EscribirComentarioPage);
  }

}
