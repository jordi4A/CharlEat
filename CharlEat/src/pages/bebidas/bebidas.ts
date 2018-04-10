import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import {NuevoProductoPage, VerProductoPage} from '../pages'
import { ContactService } from '../../services/contacts.service';
import { Product } from '../../models/contacto.model';
import { Observable } from '@firebase/util';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService, private alertCtrl: AlertController) {
    
  }

  ionViewWillEnter(){

   //this.contacts=this.ContactService.getContacts();

   this.products$ = this.ContactService
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