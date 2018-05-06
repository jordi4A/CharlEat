import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/producto.model';
import { ProductService } from '../../services/producto.service';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-modificar-producto',
  templateUrl: 'modificar-producto.html',
})
export class ModificarProductoPage {

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

  onUpdateProduct() {
    this.productService.updateProduct(this.product);
    this.navCtrl.pop();
  }

  onRemoveProduct() {
    this.productService.removeProduct(this.product);
    this.navCtrl.pop();
  }
}
