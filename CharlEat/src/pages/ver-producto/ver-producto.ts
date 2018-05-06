import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/producto.model';
import { ProductService } from '../../services/producto.service';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-producto',
  templateUrl: 'ver-producto.html',
})
export class VerProductoPage {

  product: Product;
  categories$: Observable<Category[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService, categoryService: CategoryService) {
    this.product = this.navParams.data;
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
/*
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
*/
  onUpdateProduct() {
    this.productService.updateProduct(this.product);
    this.navCtrl.pop();
  }

  onRemoveProduct() {
    this.productService.removeProduct(this.product);
    this.navCtrl.pop();
  }

// El código de abajo no funcionaba bien, al darle a update fallaba y al darle a remove borraba todos los elementos.
// Esto sucede porque le pasaba un objeto erróneo y la clave de referencia era nula.
/*
  onUpdateProduct (value: Product) {
    this.productService.updateProduct(value);
    this.navCtrl.pop();
  }

  onRemoveProduct (value: Product) {
    this.productService.removeProduct(value);
    this.navCtrl.pop();
  }
*/
}
