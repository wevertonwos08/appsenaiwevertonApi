import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAgendamentoPage } from './modal-agendamento.page';

describe('ModalAgendamentoPage', () => {
  let component: ModalAgendamentoPage;
  let fixture: ComponentFixture<ModalAgendamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgendamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAgendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
