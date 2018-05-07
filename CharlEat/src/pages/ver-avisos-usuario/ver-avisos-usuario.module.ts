import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerAvisosUsuarioPage } from './ver-avisos-usuario';

@NgModule({
  declarations: [
    VerAvisosUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(VerAvisosUsuarioPage),
  ],
})
export class VerAvisosUsuarioPageModule {}
