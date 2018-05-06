import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MandarAvisoPage } from './mandar-aviso';

@NgModule({
  declarations: [
    MandarAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(MandarAvisoPage),
  ],
})
export class MandarAvisoPageModule {}
