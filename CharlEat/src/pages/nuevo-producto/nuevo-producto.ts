import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/producto.model';



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



  constructor(public navCtrl: NavController, private productService: ProductService) {


  }

  onAddProduct(value: Product){

    this.productService.addProduct(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }



}
