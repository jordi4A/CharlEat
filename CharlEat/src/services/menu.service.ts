import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Menu } from "../models/menu.model";

@Injectable()
export class MenuService {

    private menuRef = this.db.list<Menu>('Menu');  // Igual se puede quitar

    constructor (private db:AngularFireDatabase) {

    }

    addMenu(value: Menu){
      return this.menuRef.push(value);
    }

    updateMenu(value: Menu){
      return this.menuRef.update(value.key, value);
    }

    removeMenu(value: Menu){
      return this.menuRef.remove(value.key);
    }

    getMenu(category: string){
      this.menuRef = this.db.list<Menu>('Menu', ref => ref.orderByChild("type").equalTo(category));
      return this.menuRef;
    }
}