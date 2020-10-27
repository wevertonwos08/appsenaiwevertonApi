import { LoadingController, ModalController } from "@ionic/angular";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AgendamentoService } from "../services/agendamento.service";

@Component({
  selector: "app-modal-agendamento",
  templateUrl: "./modal-agendamento.page.html",
  styleUrls: ["./modal-agendamento.page.scss"],
})
export class ModalAgendamentoPage implements OnInit {
  @Input() id: number;
  public isEdit: boolean = false;
  public carregando = null;

  public form: FormGroup;
  constructor(
    public modal: ModalController,
    public formBuilder: FormBuilder,
    public agenda: AgendamentoService,
    public loading: LoadingController
  ) {
    this.form = formBuilder.group({
      nome: [""],
      sexo: [""],
      dn: [""],
      cpf: [""],
      endereco: [""],
      telefone: [""],
      especialidade: [""],
      data_hora: [""],
    });
  }

  async ngOnInit() {
    if (this.id || this.id == 0) {
      this.editarAgenda(this.id);
      this.isEdit = true;
    }
  }
  fecharModal(): void {
    this.modal.dismiss();
  }
  async salvarAgendamento() {
    //console.log(this.form.value);
    // await this.showCarregando();
    await this.agenda.salvarAgendamento(this.form.value, this.id);
    // await this.fecharCarregando();
    await this.fecharModal();
  }
  public async editarAgenda(id: number) {
    const edAgenda = await this.agenda.getAgenda(this.id);
    this.form.patchValue(edAgenda);
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
