import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../../models/producto.model';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../services/pedido.service';
import { PedidoEspera } from '../../models/pedidosEspera.model';
import {PedidosEsperaService} from '../../services/pedidosEspera.service';

@IonicPage()
@Component({
  selector: 'page-submit-pedido-usuario',
  templateUrl: 'submit-pedido-usuario.html',
})
export class SubmitPedidoUsuarioPage {

  product: Product;
  pedido: Pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidosEsperaService: PedidosEsperaService, private pedidoService: PedidoService) {
    this.product = this.navParams.data; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPedidoUsuarioPage');
  }
  onAddPedido(value: Pedido){
    this.pedidoService.addPedido(value).then(ref => {
      console.log(ref.key);
    });
    this.pedidosEsperaService.addPedidoEspera(value).then(ref => {
      console.log(ref.key);
      alert("Pedido realizado con éxito");
    });

    this.navCtrl.pop();
  }

  cancelOperation() {
    this.navCtrl.pop();
  }
}
