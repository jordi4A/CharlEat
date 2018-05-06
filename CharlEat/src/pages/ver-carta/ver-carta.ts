import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BebidasPage} from '../bebidas/bebidas';
import { MenuPage } from '../menu/menu';
import {PaginaPrincipalPage} from '../pagina-principal/pagina-principal';

import { VerCategoriaPage } from '../ver-categoria/ver-categoria';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the VerCartaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-carta',
  templateUrl: 'ver-carta.html',
})
export class VerCartaPage {

  categories$: Observable<Category[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {

  }

  ionViewDidLoad() {
    this.categories$ = this.categoryService
      .getProduct()  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)
      .map(
        changes => {
          return changes.map(c=> ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }
  onLoadPaginaPrincipal(){
    // Reset the content nav to have just this page
    //this.navCtrl.push(PaginaPrincipalPage);
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
  onLoadBebidas() {
    // Reset the content nav to have just this page
    this.navCtrl.push(BebidasPage);
  }
  onLoadMenu() {
    // Reset the content nav to have just this page
    this.navCtrl.push(MenuPage);
  }

  onItemTapped($event, category) {
    this.navCtrl.push(VerCategoriaPage, category);
  }
}
