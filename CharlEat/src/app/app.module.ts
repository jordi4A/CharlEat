import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { NuevoProductoPage, ModificarProductoPage,NuevoMenuPage, ModificarMenuPage, MenuPage, LoginPage } from '../pages/pages';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';
import { HoraServicioPage } from '../pages/hora-servicio/hora-servicio';
import { HoraLibrePage } from '../pages/hora-libre/hora-libre';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { RealizarEncuestaPage } from '../pages/realizar-encuesta/realizar-encuesta';
import { TablonComentariosPage } from '../pages/tablon-comentarios/tablon-comentarios';
import { TodosLosPedidosPage } from '../pages/todos-los-pedidos/todos-los-pedidos';
import { VerCartaPage } from '../pages/ver-carta/ver-carta';
import { VerEncuestaDelDiaPage } from '../pages/ver-encuesta-del-dia/ver-encuesta-del-dia';
import { VerCategoriaPage } from '../pages/ver-categoria/ver-categoria';
import { MandarAvisoPage } from '../pages/mandar-aviso/mandar-aviso';

// Páginas del usuario
import { PrincipalUsuarioPage } from '../pages/principal-usuario/principal-usuario';
import { VerMenuUsuarioPage} from '../pages/ver-menu-usuario/ver-menu-usuario';
import { VerCartaUsuarioPage } from '../pages/ver-carta-usuario/ver-carta-usuario';
import { VerCategoriaUsuarioPage } from '../pages/ver-categoria-usuario/ver-categoria-usuario';


import { ProductService } from '../services/producto.service';
import { CategoryService } from '../services/categoria.service';
import { AvisosService } from '../services/avisos.service';
import { FIREBASE_CONFIG } from '../app/firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'

//Graficos
import {ChartsModule} from 'ng2-charts'

@NgModule({
  declarations: [
    MyApp,
    NuevoProductoPage,
    ModificarProductoPage,
    MenuPage,
    PaginaPrincipalPage,
    HoraLibrePage,
    HoraServicioPage,
    EncuestaPage,
    RealizarEncuestaPage,
    TablonComentariosPage,
    TodosLosPedidosPage,
    VerCartaPage,
    VerCartaUsuarioPage,
    VerEncuestaDelDiaPage,
    VerCategoriaPage,
    PrincipalUsuarioPage,
    VerMenuUsuarioPage,
    VerCategoriaUsuarioPage,
    MandarAvisoPage,
    LoginPage,
    NuevoMenuPage,
    ModificarMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NuevoProductoPage,
    ModificarProductoPage,
    MenuPage,
    PaginaPrincipalPage,
    HoraLibrePage,
    HoraServicioPage,
    EncuestaPage,
    RealizarEncuestaPage,
    TablonComentariosPage,
    TodosLosPedidosPage,
    VerCartaPage,
    VerCartaUsuarioPage,
    VerEncuestaDelDiaPage,
    VerCategoriaPage,
    PrincipalUsuarioPage,
    VerMenuUsuarioPage,
    VerCategoriaUsuarioPage,
    MandarAvisoPage,
    LoginPage,
    NuevoMenuPage,
    ModificarMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService,
    CategoryService,
    AvisosService
  ]
})
export class AppModule {}
