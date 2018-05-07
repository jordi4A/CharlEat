import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoMenuPage, ModificarMenuPage, PaginaPrincipalPage, InfoPage, PrincipalUsuarioPage, AceptarPedidoPage } from '../pages';
import { PedidosEsperaService } from '../../services/pedidosEspera.service';
import { PedidoEspera } from '../../models/pedidosEspera.model';
import { Observable } from 'rxjs/Observable';
import { VerEncuestaDelDiaPage } from '../ver-encuesta-del-dia/ver-encuesta-del-dia';


@IonicPage()
@Component({
  selector: 'page-pedidos-en-espera',
  templateUrl: 'pedidos-en-espera.html',
})
export class PedidosEnEsperaPage {

  pedidos$: Observable<PedidoEspera[]>;
  pedido: PedidoEspera;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidoService: PedidosEsperaService, private alertCtrl: AlertController) {
    this.pedido = this. navParams.data;
    this.pedidos$ = this.pedidoService
    .getPedidoEspera()  //Retorna la DB
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
  onItemTapped($event, pedido) {
    this.navCtrl.push(AceptarPedidoPage, pedido);
  }
}
