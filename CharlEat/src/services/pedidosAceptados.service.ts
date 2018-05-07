import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { PedidosAceptados } from "../models/pedidosAceptados.model";

@Injectable()
export class PedidosAceptadosService {

    private menuRef = this.db.list<PedidosAceptados>('Pedidos Aceptados');

    constructor (private db:AngularFireDatabase) {

    }
    addPedido(value: PedidosAceptados){
      return this.menuRef.push(value);
    }
    updatePedido(value: PedidosAceptados){
      return this.menuRef.update(value.key, value);
    }
    removePedido(value: PedidosAceptados){
      return this.menuRef.remove(value.key);
    }
    getPedido(){
      return this.menuRef;
    }
}