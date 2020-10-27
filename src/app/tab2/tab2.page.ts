import { async } from "@angular/core/testing";
import { ModalAgendamentoPage } from "./../modal-agendamento/modal-agendamento.page";
import { Component, Input, OnInit } from "@angular/core";
import { AgendamentoService } from "../services/agendamento.service";

import { LoadingController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  public agendas: Array<any> = [];
  public carregando = null;

  constructor(
    public modal: ModalController,
    public agenda: AgendamentoService,
    public loading: LoadingController
  ) {}
  async abrirModalAgendamento() {
    const modal = await this.modal.create({
      component: ModalAgendamentoPage,
    });
    modal.onDidDismiss().then(async () => {
      await this.getAgendas();
    });
    return await modal.present();
  }

  async ngOnInit() {
    //await this.showCarregando();
    await this.getAgendas();
    // await this.showCarregando();
  }

  async getAgendas() {
    // await this.showCarregando();
    this.agendas = await this.agenda.getAll();
    // await this.fecharCarregando();
  }
  public async remover(id: number) {
    await this.agenda.remover(id);
    await this.getAgendas();
  }

  public async editar(idAgenda: number) {
    //console.log(id);
    // await this.showCarregando();
    const modal = await this.modal.create({
      component: ModalAgendamentoPage,
      componentProps: {
        id: idAgenda,
      },
    });
    modal.onDidDismiss().then(async () => {
      await this.getAgendas();
    });
    // await this.fecharCarregando();
    return await modal.present();
  }

  async showCarregando() {
    this.carregando = await this.loading.create({
      message: "Aguarde",
    });
    await this.carregando.present();
  }
  async fecharCarregando() {
    await this.carregando.dismiss();
  }
}
