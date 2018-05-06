import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosEnEsperaPage } from './pedidos-en-espera';

@NgModule({
  declarations: [
    PedidosEnEsperaPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosEnEsperaPage),
  ],
})
export class PedidosEnEsperaPageModule {}
