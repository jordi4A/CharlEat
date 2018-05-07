import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { PedidoEspera } from "../models/pedidosEspera.model";

@Injectable()
export class PedidosEsperaService {

    private menuRef = this.db.list<PedidoEspera>('PedidosEspera');

    constructor (private db:AngularFireDatabase) {

    }
    addPedidoEspera(value: PedidoEspera){
      return this.menuRef.push(value);
    }
    updatePedidoEspera(value: PedidoEspera){
      return this.menuRef.update(value.key, value);
    }
    removePedidoEspera(value: PedidoEspera){
      return this.menuRef.remove(value.key);
    }
    getPedidoEspera(){
      return this.menuRef;
    }
}