import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Menu } from "../models/menu.model";

@Injectable()
export class MenuService {

    private menuRef = this.db.list<Menu>('Menu');

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

    getMenu(){
      return this.menuRef;
    }
}
