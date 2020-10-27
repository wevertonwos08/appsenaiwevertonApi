import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-pessoa',
    loadChildren: () => import('./modal-pessoa/modal-pessoa.module').then( m => m.ModalPessoaPageModule)
  },
  {
    path: 'modal-agendamento',
    loadChildren: () => import('./modal-agendamento/modal-agendamento.module').then( m => m.ModalAgendamentoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
