import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NuevoMenuPage, ModificarMenuPage, PaginaPrincipalPage, InfoPage } from '../pages';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.model';
import { Observable } from 'rxjs/Observable';


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

  menus$: Observable<Menu[]>;
  menu: Menu;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuService: MenuService, private alertCtrl: AlertController) {
    this.menu = this. navParams.data;
    this.menus$ = this.menuService
    .getMenu()  //Retorna la DB
    .snapshotChanges() //retorna los cambios en la DB (key and value)
    .map(
      changes => {
        return changes.map(c=> ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }
   
  public doughnutChartLabels:string[] = ["Menu 1", 'Menú 2', 'Menú 3','Menu 4'];
  public doughnutChartData:number[] = [1, 1, 1, 1];
  public doughnutChartType:string = 'doughnut';
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  ionViewDidLoad() {
    this.iniciarData();
  }
  onLoadPaginaPrincipal(){
    this.navCtrl.setRoot(PaginaPrincipalPage);  // De este modo se reinicia la barra de arriba
  }

  iniciarData(){
    //Se inicia con los valores de votos que hay en la base de datos
    this.menus$.subscribe(items => {
      items.forEach(menu => {
        this.doughnutChartData[items.indexOf(menu)] = menu.votos;
        console.log(items.indexOf(menu) + ": " + this.doughnutChartData[items.indexOf(menu)]);
      })
    });
    
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }

}