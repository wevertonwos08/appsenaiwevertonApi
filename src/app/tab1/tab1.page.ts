import { ModalPessoaPage } from "./../modal-pessoa/modal-pessoa.page";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { User } from "../models/user";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  public users: Array<User> = [];
  constructor(public apiService: ApiService, public modal: ModalController) {}

  ngOnInit() {
    this.apiService.getUser().subscribe((response) => {
      console.log(response);
      this.users = response.results;
    });
  }
  async abrirModal(user) {
    //console.log(user);
    const modal = await this.modal.create({
      component: ModalPessoaPage,
      componentProps: { user },
    });
    return await modal.present();
  }
}
