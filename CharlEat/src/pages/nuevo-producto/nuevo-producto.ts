import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contacts.service';
import { Product } from '../../models/contacto.model';



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



  constructor(public navCtrl: NavController, private contactService: ContactService) {

   
  }

  onAddProduct(value: Product){

    this.contactService.addProduct(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

 

}
