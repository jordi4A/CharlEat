import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosLosPedidosPage } from './todos-los-pedidos';

@NgModule({
  declarations: [
    TodosLosPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosLosPedidosPage),
  ],
})
export class TodosLosPedidosPageModule {}
