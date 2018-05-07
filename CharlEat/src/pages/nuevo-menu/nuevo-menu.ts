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

  }
  onAddMenu(value: Menu){
    this.menuService.addMenu(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }
}
