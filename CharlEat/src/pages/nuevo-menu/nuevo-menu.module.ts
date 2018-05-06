import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMenuPage } from './nuevo-menu';

@NgModule({
  declarations: [
    NuevoMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMenuPage),
  ],
})
export class NuevoMenuPageModule {}
