import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { User } from "../models/user";

@Component({
  selector: "app-modal-pessoa",
  templateUrl: "./modal-pessoa.page.html",
  styleUrls: ["./modal-pessoa.page.scss"],
})
export class ModalPessoaPage implements OnInit {
  @Input() userPessoa: string;

  constructor(public modal: ModalController) {}

  ngOnInit() {
    //console.log(this.users);
  }

  fecharModal() {
    this.modal.dismiss({
      dismissed: true,
    });
  }
}
