import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarAvisoPage } from './visualizar-aviso';

@NgModule({
  declarations: [
    VisualizarAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarAvisoPage),
  ],
})
export class VisualizarAvisoPageModule {}
