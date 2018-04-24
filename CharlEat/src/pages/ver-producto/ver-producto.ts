import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/producto.model';
import { ProductService } from '../../services/producto.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
    this.product = this.navParams.data;
  }

  onUpdateProduct(value: Product){
    this.productService.updateProduct(value);
    this.navCtrl.pop();
  }

  onRemoveProduct(value: Product){
    this.productService.removeProduct(value);
    this.navCtrl.pop();
  }
}
