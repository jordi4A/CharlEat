import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the VerEncuestaDelDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-encuesta-del-dia',
  templateUrl: 'ver-encuesta-del-dia.html',
})
export class VerEncuestaDelDiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public doughnutChartLabels:string[] = ['Menú 1', 'Menú 2', 'Menú 3'];
  public doughnutChartData:number[] = [1, 1, 1];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerEncuestaDelDiaPage');
  }

}
 

