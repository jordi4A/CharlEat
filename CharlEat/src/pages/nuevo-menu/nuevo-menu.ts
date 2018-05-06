import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contacts.service';
import { Menu } from '../../models/menu.model';



/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-menu',
  templateUrl: 'nuevo-menu.html',
})
export class NuevoMenuPage {



  constructor(public navCtrl: NavController, private menuService: ContactService) {

   
  }

  onAddProduct(value: Menu){

    this.menuService.addProduct(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

 

}
