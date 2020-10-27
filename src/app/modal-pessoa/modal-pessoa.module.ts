import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPessoaPageRoutingModule } from './modal-pessoa-routing.module';

import { ModalPessoaPage } from './modal-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPessoaPageRoutingModule
  ],
  declarations: [ModalPessoaPage]
})
export class ModalPessoaPageModule {}
