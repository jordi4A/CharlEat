import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import {PaginaPrincipalPage} from '../pagina-principal/pagina-principal';
import { VerMenuUsuarioPage } from '../ver-menu-usuario/ver-menu-usuario';

import { NuevoProductoPage, ModificarProductoPage } from '../pages';
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
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
  onLoadMenu() {
    this.navCtrl.push(VerMenuUsuarioPage);
  }
  onLoadNewProductPage() {
    this.navCtrl.push(NuevoProductoPage);
  }
  onItemTapped($event, category) {
    this.navCtrl.push(VerCategoriaPage, category);
  }
}
