import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Comentario } from '../../models/comentario.model';
import { TablonService } from '../../services/tablon.service';

/**
 * Generated class for the EscribirComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escribir-comentario',
  templateUrl: 'escribir-comentario.html',
})
export class EscribirComentarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tablonService: TablonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscribirComentarioPage');
  }

  onEscribirComentario(value: Comentario){

    this.tablonService.addComentario(value).then(ref => {
      console.log(ref.key);
    });
    this.navCtrl.pop();
  }

}
