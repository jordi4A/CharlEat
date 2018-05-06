import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Product } from "../models/contacto.model";

@Injectable()
export class ContactService{

    private contactsRef=this.db.list<Product>('AgendaFirebase');

    constructor(private db:AngularFireDatabase){

    }

    addProduct(value: Product){
       // this.contacts.push(value);
        //console.log('**nav params:', value);
        return this.contactsRef.push(value);
    }

    updateProduct(value: Product){

        return this.contactsRef.update(value.key,value);
    }

    removeProduct(value: Product){
        
        return this.contactsRef.remove(value.key);
    }

    getProduct(){
        
        return this.contactsRef;
    }
}