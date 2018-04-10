import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoraLibrePage } from './hora-libre';

@NgModule({
  declarations: [
    HoraLibrePage,
  ],
  imports: [
    IonicPageModule.forChild(HoraLibrePage),
  ],
})
export class HoraLibrePageModule {}
