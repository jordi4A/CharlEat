import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { NuevoProductoPage, VerProductoPage } from '../pages';
import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/producto.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LibretaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  products$: Observable<Product[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
   this.products$ = this.productService
     .getProduct()  //Retorna la DB
     .snapshotChanges() //retorna los cambios en la DB (key and value)
     .map(
       changes => {
         return changes.map(c=> ({
           key: c.payload.key, ...c.payload.val()
         }));
       });
  }

  onLoadNewPage() {
    // Reset the content nav to have just this page
    this.navCtrl.push(NuevoProductoPage);
  }

  onItemTapped($event, product){
    this.navCtrl.push(VerProductoPage, product);
  }
}
