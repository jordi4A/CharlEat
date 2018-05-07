import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModificarProductoPage, PaginaPrincipalPage } from '../pages';
import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/producto.model';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the VerCategoríaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-categoria',
  templateUrl: 'ver-categoria.html',
})
export class VerCategoriaPage {

  products$: Observable<Product[]>;
  category: Category;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
    this.category = navParams.data;
    this.products$ = this.productService
      .getProduct(this.category.valor)  //Retorna la DB
      .snapshotChanges() //retorna los cambios en la DB (key and value)s
      .map(
        changes => {
          return changes.map(c=> ({
            key: c.payload.key, ...c.payload.val()
          }));
        });

  }

  ionViewDidLoad() {
  }
  onItemTapped($event, product){
    this.navCtrl.push(ModificarProductoPage, product);
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }
}
