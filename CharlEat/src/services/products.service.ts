import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService{

    private productsRef=this.db.list<Product>('AgendaFirebase');

   // private contacts: Contacto []=[{
     //       "nombre":"Andres",
       //     "organizacion":"UC3M",
         //   "movil":"666666666",
           // "correo":"andres@example.com"}];

    constructor(private db:AngularFireDatabase){

    }

    addProduct(value: Product){
       // this.products.push(value);
        //console.log('**nav params:', value);
        return this.productsRef.push(value);
    }

    updateProduct(value: Product){

        return this.productsRef.update(value.key,value);
    }

    removeProduct(value: Product){
        
        return this.productsRef.remove(value.key);
    }

    getProduct(){
        
        return this.productsRef;
    }
}