import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Pedido } from "../models/pedido.model";

@Injectable()
export class PedidosAceptadosService {

    private menuRef = this.db.list<Pedido>('Pedidos');

    constructor (private db:AngularFireDatabase) {

    }
    addPedido(value: Pedido){
      return this.menuRef.push(value);
    }
    updatePedido(value: Pedido){
      return this.menuRef.update(value.key, value);
    }
    removePedido(value: Pedido){
      return this.menuRef.remove(value.key);
    }
    getPedido(){
      return this.menuRef;
    }
}