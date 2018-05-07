import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotarEncuestaPage } from './votar-encuesta';

@NgModule({
  declarations: [
    VotarEncuestaPage,
  ],
  imports: [
    IonicPageModule.forChild(VotarEncuestaPage),
  ],
})
export class VotarEncuestaPageModule {}
