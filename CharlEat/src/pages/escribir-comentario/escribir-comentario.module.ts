import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscribirComentarioPage } from './escribir-comentario';

@NgModule({
  declarations: [
    EscribirComentarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EscribirComentarioPage),
  ],
})
export class EscribirComentarioPageModule {}
