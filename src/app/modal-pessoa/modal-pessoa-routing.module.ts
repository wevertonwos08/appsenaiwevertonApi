import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPessoaPage } from './modal-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPessoaPageRoutingModule {}
