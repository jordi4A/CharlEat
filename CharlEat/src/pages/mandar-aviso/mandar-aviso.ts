import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../models/aviso.model';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the MandarAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mandar-aviso',
  templateUrl: 'mandar-aviso.html',
})
export class MandarAvisoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private avisosService: AvisosService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MandarAvisoPage');
  }

  onSendAviso(value: Aviso){
    this.avisosService.addAviso(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
