import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerPedidoPage } from './ver-pedido';

@NgModule({
  declarations: [
    VerPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(VerPedidoPage),
  ],
})
export class VerPedidoPageModule {}
