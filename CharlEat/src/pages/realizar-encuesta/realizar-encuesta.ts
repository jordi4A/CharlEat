import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoMenuPage, ModificarMenuPage } from '../pages';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RealizarEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realizar-encuesta',
  templateUrl: 'realizar-encuesta.html',
})
export class RealizarEncuestaPage {

  menus$: Observable<Menu[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
   this.menus$ = this.menuService
     .getProduct("")  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }

  onLoadNewPage() {
    // Reset the content nav to have just this page
    this.navCtrl.push(NuevoMenuPage);
  }

  onItemTapped($event, product){
    this.navCtrl.push(ModificarMenuPage, product);
  }
}
