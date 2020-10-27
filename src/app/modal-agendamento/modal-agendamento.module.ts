import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalAgendamentoPageRoutingModule } from "./modal-agendamento-routing.module";

import { ModalAgendamentoPage } from "./modal-agendamento.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAgendamentoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalAgendamentoPage],
})
export class ModalAgendamentoPageModule {}
