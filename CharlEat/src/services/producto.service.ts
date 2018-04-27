import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Product } from "../models/producto.model";

@Injectable()
export class ProductService {

    private productosRef = this.db.list<Product>('Productos');

    constructor (private db:AngularFireDatabase) {

    }

    addProduct(value: Product){
      return this.productosRef.push(value);
    }

    updateProduct(value: Product){
      return this.productosRef.update(value.key, value);
    }

    removeProduct(value: Product){
      return this.productosRef.remove(value.key);
    }

    getProduct(){
      return this.productosRef;
    }
}
