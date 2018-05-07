import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NuevoMenuPage, ModificarMenuPage, PaginaPrincipalPage, InfoPage, PrincipalUsuarioPage } from '../pages';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the VotarEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votar-encuesta',
  templateUrl: 'votar-encuesta.html',
})
export class VotarEncuestaPage {

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
    this.navCtrl.setRoot(PrincipalUsuarioPage);  // De este modo se reinicia la barra de arriba
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


  onLoadMenu1(){
    alert("Su voto ha sido registrado correctamente");
    var num1: number = this.doughnutChartData[0];
    num1++;
    this.doughnutChartData = [num1,this.doughnutChartData[1],this.doughnutChartData[2],this.doughnutChartData[3]];
    this.menus$.subscribe(items => {
      items.forEach(menu => {
        if(menu.name == "Menu 1"){
          menu.votos = num1;
          this.menuService.updateMenu(menu);
          console.log("Solo viendo si llega aqui");
        };
      })
    });
  }


  onLoadMenu2(){
    alert("Su voto ha sido registrado correctamente");
    var num2: number = this.doughnutChartData[1];
    num2++;
    this.doughnutChartData = [this.doughnutChartData[0],num2,this.doughnutChartData[2],this.doughnutChartData[3]];
    this.menus$.subscribe(items => {
      items.forEach(menu => {
        if(menu.name == "Menu 2"){
          menu.votos = num2;
          this.menuService.updateMenu(menu);
          console.log("Solo viendo si llega aqui");
        };
      })
    });
  }
  onLoadMenu3(){
    alert("Su voto ha sido registrado correctamente");
    var num3: number = this.doughnutChartData[2];
    num3++;
    this.doughnutChartData = [this.doughnutChartData[0],this.doughnutChartData[1],num3,this.doughnutChartData[3]];
    this.menus$.subscribe(items => {
      items.forEach(menu => {
        if(menu.name == "Menu 3"){
          menu.votos = num3;
          this.menuService.updateMenu(menu);
          console.log("Solo viendo si llega aqui");
        };
      })
    });
  }
  onLoadMenu4(){
    alert("Su voto ha sido registrado correctamente");
    var num4: number = this.doughnutChartData[3];
    num4++;
    this.doughnutChartData = [this.doughnutChartData[0],this.doughnutChartData[1],this.doughnutChartData[2],num4];
    this.menus$.subscribe(items => {
      items.forEach(menu => {
        if(menu.name == "Menu 4"){
          menu.votos = num4;
          this.menuService.updateMenu(menu);
          console.log("Solo viendo si llega aqui");
        };
      })
    });
  }
  onLoadCerrarSesion(){
    this.navCtrl.push(InfoPage);

  }
  onUpdateMenu() {
    this.menu.votos = 0;
    this.menuService.updateMenu(this.menu);
    this.navCtrl.pop();
  }

}
