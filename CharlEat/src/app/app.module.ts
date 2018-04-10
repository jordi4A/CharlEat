import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidasPage, TodoPage,NuevoProductoPage, VerProductoPage } from '../pages/pages';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import { HoraServicioPage} from '../pages/hora-servicio/hora-servicio';
import { HoraLibrePage} from '../pages/hora-libre/hora-libre';
import { EncuestaPage} from '../pages/encuesta/encuesta';
import { RealizarEncuestaPage} from '../pages/realizar-encuesta/realizar-encuesta';
import { TablonComentariosPage} from '../pages/tablon-comentarios/tablon-comentarios';
import { TodosLosPedidosPage} from '../pages/todos-los-pedidos/todos-los-pedidos';
import { VerCartaPage} from '../pages/ver-carta/ver-carta';
import { VerEncuestaDelDiaPage} from '../pages/ver-encuesta-del-dia/ver-encuesta-del-dia';


import{ContactService} from '../services/contacts.service';
import {FIREBASE_CONFIG} from '../app/firebase.credentials';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidasPage,
    TodoPage,
    NuevoProductoPage,
    VerProductoPage,
    PaginaPrincipalPage,
    HoraLibrePage,
    HoraServicioPage,
    EncuestaPage,
    RealizarEncuestaPage,
    TablonComentariosPage,
    TodosLosPedidosPage,
    VerCartaPage,
    VerEncuestaDelDiaPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidasPage,
    TodoPage,
    NuevoProductoPage,
    VerProductoPage,
    PaginaPrincipalPage,
    HoraLibrePage,
    HoraServicioPage,
    EncuestaPage,
    RealizarEncuestaPage,
    TablonComentariosPage,
    TodosLosPedidosPage,
    VerCartaPage,
    VerEncuestaDelDiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}