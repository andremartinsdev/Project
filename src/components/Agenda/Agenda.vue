<template>
  <div>
  <Sidebar/>
    <div class="card" id="calendario2">
      <div class="card-header text-center">
        Agenda
        <b-button
          pill
          class="mr-2 float-right"
          v-b-modal.modal-lg
          variant="success"
        >
          <b-icon-plus class="mr-3 mb-1"></b-icon-plus>Novo Agendamento
        </b-button>
      </div>
      <div class="card-body">
        <div class="card" id="cardCalender">
          <div class="card-body">
            <Calendar
              :consulta="this.agendamentoProps"
              @selectDate="dataSelect($event)"
              class="calen"
              @detalhesAgenda="detalhesAgendamento($event)"
              :loadEventos="this.loadEventos"
            />
          </div>
        </div>
      </div>
      <b-modal
        id="modal-lg-detalhes"
        header-bg-variant="primary"
        header-text-variant="light"
        size="lg"
        class="text-center"
        title="Detalhes Agendamento"
      >
        <div>
          <h5>Titulo :</h5>
          <h6>{{ detalhesAgenda.titulo }}</h6>
          <hr />
        </div>
        <div>
          <h5>Procedimento :</h5>
          <h6>{{ detalhesAgenda.procedimento }}</h6>
          <hr />
        </div>

        <div>
          <h5>Data :</h5>
          <h6>{{ detalhesAgenda.data }}</h6>
          <hr />
        </div>
        <div>
          <h5>Observação :</h5>
          <div style="overflow: auto; height: 150px">
            <b-textarea :value="detalhesAgenda.observacao"></b-textarea>
          </div>
        </div>
      </b-modal>
     
      <ModalAgendamento
        :dataAgenda="this.dataAgenda"
        @eventos="carregaEventos($event)"
        @reloadAgendamentos="loadEventos2"
      />

      <ModalPagamento :uuidAgendamento="this.uuidAgenda" />

     
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/SidebarNavbar.vue'
import AgendaService from "../../services/agenda";
import ModalPagamento from "./ModalPagamento";
import { mapState } from "vuex";
import moment from "moment";

export default {
  components: {
    Calendar: () => import("./Calendar"),
    ModalAgendamento: () => import("./ModalAgendamento"),
    ModalPagamento,
    Sidebar
  },
  data() {
    return {
      uuidAgenda: "",
      formaPagamentoSelect: null,
      formaDePagamento: [],
      oticasParceirasSelect: null,
      oticasParceiras: [],
      money2: {
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
      dataAgenda: "",
      tabIndex: 0,
      openModalAgendamento: false,
      tabIndexAgendamento: 0,
      procedimento: { uuid: "", text: "", value: "" },
      detalhesAgenda: {},
      ListaPaciente: [],
      loadEventos: [],
      selected: [],
      agendamentoProps: {},
      agendamentoPesquisa: [],
      optionsPro: [],
      dataInicial: "",
      dataFinal: "",
      idPacientePesquisa: -1,
      page: 1,
      totalPage: 0,
      agendamento: {
        uuid: "",
        procedimento: "",
        data: "",
        valorConsulta: "00,00",
        horario: "00:00",
        idPaciente: "",
        atendido: false,
        recebido: false,
        observacao: "",
        titulo: "",
        dataPagamento: null,
      },
    };
  },
  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      procedimentoSelect: (state) => state.procedimentoSelect,
    }),
  },
 

  methods: {
    showAlert(icon, title) {
      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

   
    loadEventos2() {
      this.loadEventos = [];
      AgendaService.read()
        .then((result) => {
          result.data.consulta.map((resultado) => {
            this.loadEventos.push(this.CreateObject(resultado));
          });
        })
        .catch(() => {
          this.showAlert("error", "Erro ao carregar Eventos");
        });
    },
    CreateObject(dados) {
      return {
        id: dados.uuid,
        title: dados.titulo,
        start: moment(dados.data).add('day', 1).format("YYYY-MM-DD"),
        description: dados.observacao,
      };
    },

  
    
    detalhesAgendamento(event) {
      this.uuidAgenda = event.id;
      setTimeout(() => {
        this.$bvModal.show("modal-lg-pagamento");
      }, 200);
    },

    dataSelect(event) {
      this.openModalAgendamento = true;
      this.$bvModal.show("modal-lg");
      this.agendamento.data = event;
      this.dataAgenda = event;
    },

    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.iconsAgenda:hover {
  cursor: pointer;
}

.flex {
  display: flex;
  overflow: auto;
}

.divFlex {
  display: flex;
}

div {
  font-family: "Monda", sans-serif;
}
.procedimento {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.conteudo {
}

#calendario2 {
  margin-top: 10px;
  font-family: "Monda", sans-serif;
  display: flex;
}
#modal-lg,
#modal-lg-addProcedimento {
  font-family: "Monda", sans-serif;
}
.calen {
  width: 100%;
  height: 700px;
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
}
.tabela {
  max-height: 300px;
}
@media (max-width: 700px) {
  .calen {
    width: 100%;
    margin: 0;
    padding: 0;
  }
}

#cardCalender {
}
</style>