import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../../models/producto.model';
import { PedidosEsperaService } from '../../services/pedidosEspera.service';
import { PedidosAceptados } from '../../models/pedidosAceptados.model';
import { PedidosAceptadosService } from '../../services/pedidosAceptados.service';

@IonicPage()
@Component({
  selector: 'page-aceptar-pedido',
  templateUrl: 'aceptar-pedido.html',
})
export class AceptarPedidoPage {

  product: Product;
  pedido: PedidosAceptados;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pedidoService: PedidosAceptadosService) {
    this.product = this.navParams.data; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPedidoUsuarioPage');
  }
  onAddPedido(value: PedidosAceptados){
    this.pedidoService.addPedido(value).then(ref => {
      console.log(ref.key);
      alert("Pedido aceptado");
    });
    this.pedidoService.removePedido(this.pedido);
    this.navCtrl.pop();
  }

  onRemovePedido(event) {
    this.pedidoService.removePedido(this.pedido);
    this.navCtrl.pop();
  }
  cancelOperation() {
    this.navCtrl.pop();
  }
}
