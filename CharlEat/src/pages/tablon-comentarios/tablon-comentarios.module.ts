import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablonComentariosPage } from './tablon-comentarios';

@NgModule({
  declarations: [
    TablonComentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(TablonComentariosPage),
  ],
})
export class TablonComentariosPageModule {}
