import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { VerMenuUsuarioPage } from '../ver-menu-usuario/ver-menu-usuario';
import { PrincipalUsuarioPage} from '../principal-usuario/principal-usuario';

import { VerCategoriaUsuarioPage } from '../ver-categoria-usuario/ver-categoria-usuario';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';
import { InfoPage } from '../pages';


@IonicPage()
@Component({
  selector: 'page-ver-carta-usuario',
  templateUrl: 'ver-carta-usuario.html',
})
export class VerCartaUsuarioPage {

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
    //this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
    this.navCtrl.setRoot(PrincipalUsuarioPage);
  }
  onLoadMenu() {
    // Reset the content nav to have just this page
    //this.navCtrl.push(MenuPage);
    this.navCtrl.push(VerMenuUsuarioPage);
  }
  onItemTapped($event, category) {
    this.navCtrl.push(VerCategoriaUsuarioPage, category);
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
}
