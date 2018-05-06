import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/producto.model';
import { CategoryService } from '../../services/categoria.service';
import { Category } from '../../models/categoria.model';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-producto',
  templateUrl: 'nuevo-producto.html',
})
export class NuevoProductoPage {

  categories$: Observable<Category[]>;

  constructor(public navCtrl: NavController, private productService: ProductService, categoryService: CategoryService) {
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

  onAddProduct(value: Product){

    this.productService.addProduct(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }



}
