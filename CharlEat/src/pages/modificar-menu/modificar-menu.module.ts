import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarMenuPage } from './modificar-menu';

@NgModule({
  declarations: [
    ModificarMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarMenuPage),
  ],
})
export class ModificarMenuPageModule {}
