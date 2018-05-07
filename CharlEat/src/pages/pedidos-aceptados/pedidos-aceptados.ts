import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoMenuPage, ModificarMenuPage, PaginaPrincipalPage, InfoPage, PrincipalUsuarioPage, AceptarPedidoPage } from '../pages';
import { PedidosAceptadosService } from '../../services/pedidosAceptados.service';
import { PedidosAceptados } from '../../models/pedidosAceptados.model';
import { Observable } from 'rxjs/Observable';
import { VerEncuestaDelDiaPage } from '../ver-encuesta-del-dia/ver-encuesta-del-dia';

/**
 * Generated class for the PedidosAceptadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-aceptados',
  templateUrl: 'pedidos-aceptados.html',
})
export class PedidosAceptadosPage {

  pedidos$: Observable<PedidosAceptados[]>;
  pedido: PedidosAceptados;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidoService: PedidosAceptadosService, private alertCtrl: AlertController) {
    this.pedido = this. navParams.data;
    this.pedidos$ = this.pedidoService
    .getPedido()  //Retorna la DB
    .snapshotChanges() //retorna los cambios en la DB (key and value)
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }


  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PrincipalUsuarioPage);  // De este modo se reinicia la barra de arriba
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
}
