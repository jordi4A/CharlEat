import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/producto.model';

import { SubmitPedidoUsuarioPage } from '../submit-pedido-usuario/submit-pedido-usuario';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-ver-categoria-usuario',
  templateUrl: 'ver-categoria-usuario.html',
})
export class VerCategoriaUsuarioPage {

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
    this.navCtrl.push(SubmitPedidoUsuarioPage, product);
  }
}
