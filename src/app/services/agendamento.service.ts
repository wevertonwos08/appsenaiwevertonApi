import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class AgendamentoService {
  constructor(public storage: Storage) {
    // this.removeAll();
    //  storage.set("Agendamentos", [{ nome: "maria" }]);
    // Or to get a key/value pair
    //   storage.get("Agendamentos").then((val) => {
    //     console.log("Agendamentos", val);
    //   });
  }

  public async getAll() {
    // return this.storage.get("agendas");

    let agendas = await this.storage.get("agendas");
    agendas = JSON.parse(agendas);
    return agendas;
  }
  public async salvarAgendamento(agenda, id: number) {
    if (id || id === 0) {
      await this.update(id, agenda);
      return;
    }
    await this.save(agenda);
  }
  //--------------------------------------------------------
  public async save(agenda) {
    let agendas = await this.getAll();
    if (!agendas) {
      agendas = [];
    }
    agendas.push(agenda);
    this.storage.set("agendas", JSON.stringify(agendas));
  }
  //-------------------------------------------------------------
  public async update(id: number, agenda) {
    let agendas = await this.getAll();

    agendas = agendas.map((data, idc) => {
      if (id === idc) {
        return id === idc ? agenda : data;
      }
    });
    this.storage.set("agendas", JSON.stringify(agendas));
  }
  //--------------------------------------------------------------
  public async removeAll() {
    await this.storage.remove("agendas");
  }

  public async remover(id: number) {
    let agendas = await this.getAll();
    agendas.splice(id, 1);
    await this.storage.set("agendas", JSON.stringify(agendas));
    console.log(agendas);
  }

  public async getAgenda(id: number) {
    let agendas = await this.getAll();
    const agendaEncontrada = agendas.find((agenda, idc) => {
      if (idc === id) {
        return agenda;
      }
    });
    return agendaEncontrada;
  }
}
