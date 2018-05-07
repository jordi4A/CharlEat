import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Menu } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {VerCartaPage, HoraServicioPage, PaginaPrincipalPage, PrincipalUsuarioPage, 
  LoginPage, EncuestaPage, ModificarMenuPage, NuevoMenuPage, VerAvisosUsuarioPage, VisualizarAvisoUsuarioPage, VotarEncuestaPage, InfoPage, MenuPage} from '../pages/pages'
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { VerEncuestaDelDiaPage } from '../pages/ver-encuesta-del-dia/ver-encuesta-del-dia';
import { AuthProvider } from '../providers/auth/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = PaginaPrincipalPage;
  //rootPage: any = EncuestaPage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthProvider
  ) {
    this.initializeApp();/*
    this.auth.Session.subscribe(session=>{
      if(session){
          this.rootPage = PrincipalUsuarioPage;
      }
        else{
          this.rootPage = LoginPage;
        }
    });*/
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage},
      { title: 'Pagina Principal', component: PaginaPrincipalPage},
      { title: 'Ver Carta', component: VerCartaPage },
      { title: 'Ver Encuesta', component: VerEncuestaDelDiaPage },
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
