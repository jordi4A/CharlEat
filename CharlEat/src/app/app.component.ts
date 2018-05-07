import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {VerCartaPage, HoraServicioPage, PaginaPrincipalPage, PrincipalUsuarioPage, 
<<<<<<< HEAD
  LoginPage, EncuestaPage, ModificarMenuPage, NuevoMenuPage, VerAvisosUsuarioPage, VisualizarAvisoUsuarioPage, RealizarEncuestaPage} from '../pages/pages'
=======
  LoginPage, EncuestaPage, ModificarMenuPage, NuevoMenuPage, VerAvisosUsuarioPage, VisualizarAvisoUsuarioPage} from '../pages/pages'
>>>>>>> 912dc40113ee557c473229cca390d845e8ed2fb4
import { MenuPage } from '../pages/pages'
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { VerEncuestaDelDiaPage } from '../pages/ver-encuesta-del-dia/ver-encuesta-del-dia';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = PaginaPrincipalPage;
  //rootPage: any = EncuestaPage;
<<<<<<< HEAD
  rootPage: any = VerEncuestaDelDiaPage;
=======
  rootPage: any = LoginPage;
>>>>>>> 912dc40113ee557c473229cca390d845e8ed2fb4

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Ver Carta', component: VerCartaPage },
      { title: 'Administrar Pedidos', component: HoraServicioPage },
      { title: 'Acerca de', component: AcercaDePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
