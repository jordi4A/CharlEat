import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

/**
 * Generated class for the VerContactoPage page.
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

  menu: Menu;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService) {

    this.menu = this.navParams.data;
    console.log(this.menu.key);
    
  }

  onUpdateMenu(value: Menu){

    this.menuService.updateMenu(value);
    this.navCtrl.pop();

  }

  onRemoveProduct(value: Menu){

    this.menuService.removeMenu(value);
    this.navCtrl.pop();

  }

  

}