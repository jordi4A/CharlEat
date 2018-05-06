import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import {NuevoMenuPage, PaginaPrincipalPage, ModificarMenuPage} from '../pages'
import { ContactService } from '../../services/contacts.service';
import { Menu } from '../../models/menu.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RealizarEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realizar-encuesta',
  templateUrl: 'realizar-encuesta.html',
})
export class RealizarEncuestaPage {

  menus$: Observable<Menu[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private MenuService:ContactService, private alertCtrl: AlertController) {
    
  }

  ionViewWillEnter(){

    //this.contacts=this.ContactService.getContacts();
 
    this.menus$ = this.MenuService
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
     this.navCtrl.push(NuevoMenuPage);
   }
 
   onItemTapped($event, menu){
     this.navCtrl.push(ModificarMenuPage, menu);
    
   }

   crearGrafico(){



    

   }

}
