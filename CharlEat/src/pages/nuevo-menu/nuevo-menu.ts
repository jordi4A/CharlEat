import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.model';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NuevoMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-menu',
  templateUrl: 'nuevo-menu.html',
})
export class NuevoMenuPage {

  categories$: Observable<Menu[]>;

  constructor(public navCtrl: NavController, private menuService: MenuService, categoryService: CategoryService) {
    this.categories$ = categoryService
      .getProduct()  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)
      .map(
        changes => {
          return changes.map(c=> ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  onAddMenu(value: Menu){

    this.menuService.addMenu(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }



}
