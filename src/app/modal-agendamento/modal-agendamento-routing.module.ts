import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAgendamentoPage } from './modal-agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAgendamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAgendamentoPageRoutingModule {}
