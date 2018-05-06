import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Category } from "../models/categoria.model";

@Injectable()
export class CategoryService {

    private categoriasRef = this.db.list<Category>('Categorias');

    constructor (private db:AngularFireDatabase) {

    }

    addProduct(value: Category){
      return this.categoriasRef.push(value);
    }

    updateProduct(value: Category){
      return this.categoriasRef.update(value.key, value);
    }

    removeProduct(value: Category){
      return this.categoriasRef.remove(value.key);
    }

    getProduct(){
      return this.categoriasRef;
    }
}
