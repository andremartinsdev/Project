<template>
  <b-modal
    id="modal-lg-pagamento"
    :header-bg-variant="colorHeader"
    header-text-variant="light"
    title="Pagamento"
    size="lg"
  >
    <h5 class="text-center">Informações Pagamento</h5>
    <div class="dadosPaciente">
      <div class="form-group w-100 mr-2">
        <label for="exampleInputEmail1">Nome Paciente</label>
        <input
          type="text"
          disabled
          v-model="agendamento.nomePaciente"
          class="form-control bg-primary text-white"
        />
      </div>
      <div class="form-group w-50">
        <label for="exampleInputEmail1">Data do Pagamento</label>
        <b-form-input
          class="bg-primary text-white col-sm-12"
          type="date"
          v-model="agendamento.dataPagamento"
          v-b-popover.hover.bottom="
            'Campo Obrigatorio, Informe a Data que a consulta será realizada'
          "
        ></b-form-input>
      </div>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Valor da Consulta</label>
      <b-input-group prepend="R$" class="">
        <b-form-input
          v-model.lazy="agendamento.valorConsulta"
          disabled
          class="form-control bg-primary text-white col-sm-2"
          v-money="money2"
        ></b-form-input>
      </b-input-group>

      <h6 class="text-center">
        Procedimento : <label for="">{{ agendamento.titulo }}</label>
      </h6>

      <div class="dadosPaciente mt-4">
        <div class="form-group w-50 mr-2"></div>
      </div>
      <div class="flexDiv">
        <div>
          <b-form-checkbox
            size="md"
            v-model="agendamento.recebido"
            name="check-button"
            switch
          >
            Recebido
          </b-form-checkbox>
        </div>
        <div v-if="agendamento.recebido" class="mr-4">
          <b-icon-check2-circle
            class="h1"
            variant="success"
          ></b-icon-check2-circle>
        </div>
      </div>
    </div>

    <template #modal-footer="{ hide }">
      <b-button size="sm" variant="primary" @click="savePagamento()">
        Salvar
      </b-button>

      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Fechar
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import AgendaService from "../../services/agenda";
import moment from "moment";
export default {
  props: {
    uuidAgendamento: {
      type: String,
    },
  },
  watch: {
    uuidAgendamento() {
      this.detalhesAgendamento();
    },
  },

  data() {
    return {
      colorHeader: "primary",
      money2: {
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
      agendamento: {
        nomePaciente: "",
        dataNascimento: "",
        valorConsulta: "",
        recebido: false,
        titulo: "",
        dataPagamento: "",
      },
      formaDePagamento: [],
      oticasParceiras: [],
    };
  },

  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },
    savePagamento() {
      console.log({
        recebido: this.agendamento.recebido,
        dataPagamento: this.agendamento.dataPagamento,
      });
      console.log(this.agendamento)
      AgendaService.updatePagmento(this.agendamento.uuid, {
        recebido: this.agendamento.recebido,
        dataPagamento: this.agendamento.dataPagamento,
      })
        .then(() => {
          this.showAlert("success", "Pagamento Salvo com Sucesso");
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um erro ao realizar pagamento");
        });
    },

    detalhesAgendamento() {
      if (this.uuidAgendamento === "") {
        // console.log("não passou");
        return;
      }
      AgendaService.readAgendaJoinPaciente(this.uuidAgendamento)
        .then((result) => {
          console.log(result);
          this.agendamento = result.data.agendamento;
          this.agendamento.titulo = result.data.agendamento.descricao;
          this.agendamento.dataPagamento = moment(
            result.data.agendamento.dataPagamento
          ).format("YYYY-MM-DD");
          this.agendamento.data = moment(result.data.agendamento.data).format(
            "YYYY-MM-DD"
          );
          this.agendamento.valorConsulta =
            result.data.agendamento.valorConsulta.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          this.agendamento.dataNascimento =
            this.agendamento.dataNascimento === ""
              ? "00/00/0000"
              : moment(result.data.agendamento.dataNascimento).format(
                  "DD/MM/YYYY"
                );
          if (this.agendamento.recebido === 0) {
            this.agendamento.recebido = false;
          } else if (this.agendamento.recebido === 1) {
            this.agendamento.recebido = true;
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ocorreu um erro ao carregar detalhes do agendamento"
          );
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
.flexDiv {
  display: flex;
  justify-content: space-between;
}

.titulo {
  font-family: "Lobster", cursive;
}

#modal-lg-pagamento {
  height: 85%;
}
</style>