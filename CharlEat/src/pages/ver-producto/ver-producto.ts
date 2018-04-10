import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/contacto.model';
import { ContactService } from '../../services/contacts.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: ContactService) {

    this.product = this.navParams.data;
    console.log(this.product.key);
    
  }

  onUpdateProduct(value: Product){

    this.contactService.updateProduct(value);
    this.navCtrl.pop();

  }

  onRemoveProduct(value: Product){

    this.contactService.removeProduct(value);
    this.navCtrl.pop();

  }

  

}
