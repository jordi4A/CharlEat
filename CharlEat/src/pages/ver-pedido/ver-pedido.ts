import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoMenuPage, ModificarMenuPage, PaginaPrincipalPage, InfoPage, PrincipalUsuarioPage } from '../pages';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido.model';
import { Observable } from 'rxjs/Observable';
import { VerEncuestaDelDiaPage } from '../ver-encuesta-del-dia/ver-encuesta-del-dia';


@IonicPage()
@Component({
  selector: 'page-ver-pedido',
  templateUrl: 'ver-pedido.html',
})
export class VerPedidoPage {

  menus$: Observable<Pedido[]>;
  menu: Pedido;
  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidoService: PedidoService, private alertCtrl: AlertController) {
    this.menu = this. navParams.data;
    this.menus$ = this.pedidoService
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

