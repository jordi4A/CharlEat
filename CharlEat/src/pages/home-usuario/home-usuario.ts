import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomeUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-usuario',
  templateUrl: 'home-usuario.html',
})
export class HomeUsuarioPage {

  users$: Observable<User[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeUsuarioPage');
  }

  ionViewWillEnter(){
    this.users$ = this.UserService.getUsers().snapshotChanges().map(
        changes =>{
            return changes.map(c=> ({
                key: c.payload.key, ...c.payload.val()
            }));
        }
    )
}

}
