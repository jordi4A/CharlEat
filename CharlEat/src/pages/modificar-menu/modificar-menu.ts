import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs/Observable';
import { PaginaPrincipalPage } from '../pages';

/**
 * Generated class for the ModificarMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modificar-menu',
  templateUrl: 'modificar-menu.html',
})
export class ModificarMenuPage {

  menus$: Observable<Menu[]>;
  menu : Menu;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService, private alertCtrl: AlertController) {
    this.menu = this.navParams.data;
    this.menus$ = menuService
      .getMenu()  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)
      .map(
        changes => {
          return changes.map(c=> ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }



  onUpdateMenu() {
    this.menuService.updateMenu(this.menu);
    this.navCtrl.pop();
  }

  onRemoveMenu() {
    this.menuService.removeMenu(this.menu);
    this.navCtrl.pop();
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
}
