<template>
  <div>
    <Sidebar />

    <b-card header="Financeiro" class="text-center ml-1 mr-1">
      <b-card class="shadow">
        <b-row>
          <b-form-group label="Data Inicial" class="col-sm-3">
            <b-form-input
              size="sm"
              type="date"
              v-model="dataInicial"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Data Final" class="col-sm-3">
            <b-form-input
              size="sm"
              type="date"
              v-model="dataFinal"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Forma de Pagamento" class="col-sm-3">
            <b-form-select
              :options="this.formaDePagamento"
              size="sm"
              v-model="formaDePagamentoSelect"
            >
              <template #first>
                <b-form-select-option :value="null"
                  >-- Forma de Pagamento --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-form-group>
          <b-form-group label="Gerar Relatório">
            <b-button variant="primary" @click="gerarRelatorio" size="sm"
              >Gerar Relatório</b-button
            >
          </b-form-group>
        </b-row>

        <b-row>
          <b-button variant="danger" size="sm" @click="openDespesa" class="ml-3"
            >Cadastrar de Contas a Pagar
            <b-icon-graph-down variant="light" class="ml-3"></b-icon-graph-down>
          </b-button>

          <b-button
            variant="success"
            @click="openReceita"
            size="sm"
            class="ml-3"
            >Cadastrar de Contas a Receber
            <b-icon-graph-up variant="light" class="ml-3"></b-icon-graph-up>
          </b-button>
        </b-row>
      </b-card>

      <div class="mt-4 shadow p-4 containerPagas">
        <h4 class="mb-4">Contas a Pagar</h4>
        <b-card-group deck>
          <!-- CARD 1 -->
          <CardContasAPagar :search="search" />
          <CardContasAPagarPagas :search="search" />
          <CardContasAPagarAbertas :search="search" />
          <!-- <b-card
          header-tag="header"
          bg-variant="info"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Total à Receber : Composto por todos Atendimentos não Finalizados'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-up variant="light"></b-icon-arrow-up> Total à Receber
          </h6>
          <h6 class="text-white">
            {{
              valorReceber.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card> -->

          <!-- CARD 2 -->

          <!-- CARD 3 -->

          <!-- <b-card
          header-tag="header"
          bg-variant="danger"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Despesas em Aberto
          </h6>
          <h6 class="text-white">
            {{
              valorDespesa.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>


        <b-card
          header-tag="header"
          bg-variant="danger"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Despesas em Aberto
          </h6>
          <h6 class="text-white">
            {{
              valorDespesa.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card> -->
        </b-card-group>
      </div>

      <div class="mt-4 shadow p-4 containerPagas">
        <h4 class="mb-4">Contas a Receber</h4>
        <b-card-group deck>
          <!-- CARD 1 -->
          <CardContasAReceber />
          <CardContasAReceberRecebidas />
          <CardContasAReceberAbertas />
          <!-- <b-card
          header-tag="header"
          bg-variant="info"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Total à Receber : Composto por todos Atendimentos não Finalizados'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-up variant="light"></b-icon-arrow-up> Total à Receber
          </h6>
          <h6 class="text-white">
            {{
              valorReceber.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card> -->

          <!-- <b-card
          header-tag="header"
          bg-variant="danger"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Despesas em Aberto
          </h6>
          <h6 class="text-white">
            {{
              valorDespesa.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>


        <b-card
          header-tag="header"
          bg-variant="danger"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Despesas em Aberto
          </h6>
          <h6 class="text-white">
            {{
              valorDespesa.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card> -->
        </b-card-group>
      </div>
      <div>
        <b-button
          variant="primary"
          pill
          block
          v-b-toggle.collapse-2
          class="mt-4 mb-4"
          >Gráfico</b-button
        >
        <b-collapse id="collapse-2">
          <b-card>
            <Chart />
          </b-card>
        </b-collapse>
      </div>

      <ModalDespesa @reloadForma="readFormaPagamento" />
      <ModalReceber @reloadForma="readFormaPagamento" />
    </b-card>
  </div>
</template>

<script>
import CardContasAPagar from "./Cards/contas-a-pagar/Card-contas-pagar-todas.vue";
import CardContasAPagarPagas from "./Cards/contas-a-pagar/Card-contas-pagar-pagas.vue";
import CardContasAPagarAbertas from "./Cards/contas-a-pagar/Card-contas-pagar-abertas.vue";
import CardContasAReceber from "./Cards/contas-a-receber/Card-contas-areceber-todas.vue";
import CardContasAReceberRecebidas from "./Cards/contas-a-receber/Card-contas-receber-recebidas.vue";
import CardContasAReceberAbertas from "./Cards/contas-a-receber/Card-contas-receber-abertas.vue";
import ModalDespesa from "../Financeiro/Modals/ModalContasPagar";
import ModalReceber from "../Financeiro/Modals/ModalContasReceber";
import AgendaService from "../../services/agenda";
import moment from "moment";
import DespesaService from "../../services/despesas";
import ReceitaService from "../../services/receita";
import FormaDePagamentoService from "../../services/formaDePagamento";
import Sidebar from "../../components/SidebarNavbar.vue";
//  import Chart from "../Chart/Chart";
export default {
  components: {
    Chart: () => import("../Chart/Chart"),
    ModalDespesa,
    ModalReceber,
    Sidebar,
    CardContasAPagar,
    CardContasAPagarPagas,
    CardContasAPagarAbertas,
    CardContasAReceber,
    CardContasAReceberRecebidas,
    CardContasAReceberAbertas,
  },
  created() {
    this.readFormaPagamento();
  },
  data() {
    return {
      search: { dataInicial: "", dataFinal: "", formaDePagamento: null },
      despesas: [],
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },

      totalContasPagar: 0,
      totalContasPagas: 0,
      totalContasAbertas: 0,
      totalContasNaoRecebidas: 0,

      totalReceber: 0,
      totalRecebidas: 0,
      valorReceitasPagas: 0,
      valorDespesasPagas: 0,

      valorReceitasFuturas: 0,
      valorDespesasFuturas: 0,

      valorSaldoPagas: 0,
      valorSaldoFuturas: 0,
      valorReceita: 0,
      valorReceber: 0,
      valorDespesa: 0,
      dataInicial: "",
      dataFinal: "",
      formaDePagamento: [],
      formaDePagamentoSelect: null,
      tabIndexDespesa: 0,
      despesa: [],
      tabIndexReceita: 0,
      receitaData: {},
      receitas: [],
    };
  },

  methods: {
    async contasPagarEReceber() {
      await this.totalPagar();
      await this.totalPago();
      await this.totalAbertas();
      await this.totalContasReceber();
      await this.totalContasRecebidas();
      await this.totalNaoRecebido();
    },

    async contasPagarEReceberFormaPagamento() {
      await this.totalPagarFormaPagamento();
      await this.totalPagoFormaDePagamento();
      await this.totalAbertasFormaPagamento();
      await this.totalContasReceberFormaP();
      await this.totalContasRecebidasFormaP();
      await this.totalContasNaoRecebidasFormaP();
    },

    //contas a pagar e receber sem forma de pagamento

    async totalPagar() {
      const totalPagar = await DespesaService.readDate(
        this.dataInicial,
        this.dataFinal
      );
      this.totalContasPagar = totalPagar.data.result[0].valorTotal;
    },

    async totalPago() {
      const totalPago = await DespesaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      this.totalContasPagas = totalPago.data.result[0].valorTotalDespesa;
    },

    async totalAbertas() {
      const totalAbertas = await DespesaService.readDateAberto(
        this.dataInicial,
        this.dataFinal
      );
      this.totalContasAbertas = totalAbertas.data.result[0].valorTotalDespesa;
      console.log(this.totalContasAbertas);
    },

    async totalContasReceber() {
      const constasPagas = await ReceitaService.readDate(
        this.dataInicial,
        this.dataFinal
      );
      const agenda = await AgendaService.readDateTotal(
        this.dataInicial,
        this.dataFinal
      );
      const total =
        agenda.data.result[0].totalReceitaAgendamento +
        constasPagas.data.result[0].valorTotal;
      this.totalReceber = total;
    },

    async totalContasRecebidas() {
      const totalRecebidas = await AgendaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      const total =
        totalRecebidasReceita.data.result[0].valorTotalReceita +
        totalRecebidas.data.agendamentos[0].totalReceitaAgendamento;
      this.totalRecebidas = total;
    },

    async totalNaoRecebido() {
      const totalRecebidas = await AgendaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        false
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        false
      );
      const total =
        totalRecebidasReceita.data.result[0].valorTotalReceita +
        totalRecebidas.data.agendamentos[0].totalReceitaAgendamento;
      this.totalContasNaoRecebidas = total;
      console.log(total);
    },

    //contas a pagar e receber COM forma de pagamento

    async totalPagarFormaPagamento() {
      const totalPagar = await DespesaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      );
      let valor1 =
        totalPagar.data.result[0].valorTotal === null
          ? 0
          : totalPagar.data.result[0].valorTotal;
      this.totalContasPagar = valor1;
      console.log(this.totalContasPagar);
      //totalPagar
    },

    async totalPagoFormaDePagamento() {
      const totalPago = await DespesaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );
      let valor1 =
        totalPago.data.result[0].valorTotalDespesa === null
          ? 0
          : totalPago.data.result[0].valorTotalDespesa;
      this.totalContasPagas = valor1;
      //totalContasPagasFpagamento
      console.log(totalPago);
    },

    async totalAbertasFormaPagamento() {
      const totalAbertas = await DespesaService.readDateAbertoFP(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      );
      let valor1 =
        totalAbertas.data.result[0].valorTotalDespesa === null
          ? 0
          : totalAbertas.data.result[0].valorTotalDespesa;
      this.totalContasAbertas = valor1;
      //totalAbertas
      console.log(totalAbertas);
    },

    //formaTermina

    async totalContasReceberFormaP() {
      const constasPagas = await ReceitaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      );
      const agenda = await AgendaService.readDateTotalFp(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      );

      let valor1 =
        agenda.data.result[0].totalReceitaAgendamento === null
          ? 0
          : agenda.data.result[0].totalReceitaAgendamento;
      let valor2 =
        constasPagas.data.result[0].totalReceita === undefined
          ? 0
          : constasPagas.data.result[0].totalReceita;
      console.log(constasPagas.data.result[0].totalReceita);

      this.totalReceber = valor1 + valor2;
      console.log(valor1, valor2);
    },

    async totalContasRecebidasFormaP() {
      const totalRecebidas = await AgendaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );

      let valor1 =
        totalRecebidasReceita.data.result === undefined
          ? 0
          : totalRecebidasReceita.data.result[0].valorTotalReceita;
      let valor2 =
        totalRecebidas.data.consultaReceber === undefined
          ? 0
          : totalRecebidas.data.consultaReceber[0].valorTotalAgenda;
      this.totalRecebidas = valor1 + valor2;
      console.log(valor1, valor2);
    },

    async totalContasNaoRecebidasFormaP() {
      const totalRecebidas = await AgendaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        false
      );
      const totalRecebidasReceita = await ReceitaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        false
      );

      let valor1 =
        totalRecebidasReceita.data.result === undefined
          ? 0
          : totalRecebidasReceita.data.result[0].valorTotalReceita;
      let valor2 =
        totalRecebidas.data.consultaReceber === undefined
          ? 0
          : totalRecebidas.data.consultaReceber[0].valorTotalAgenda;

      this.totalContasNaoRecebidas = valor1 + valor2;
      console.log(totalRecebidas);
    },

    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    gerarRelatorio() {
      if (this.dataInicial === "" || this.dataFinal === "") {
        this.showAlert("info", "Por favor Informe o Período inicial e Final");
        return;
      }

      this.search = {dataInicial:this.dataInicial, dataFinal: this.dataFinal, formaDePagamento: this.formaDePagamentoSelect}
    },

    receita() {
      this.valorReceita = 0;
      AgendaService.readDateRelatorioReceita(
        this.dataInicial,
        this.dataFinal
      ).then((result) => {
        result.data.consulta.map((el) => {
          this.valorReceita += el.valorConsulta;
        });
      });
    },

    formaPagamento(descricao, idFormaPagamento) {
      return {
        text: descricao,
        value: idFormaPagamento,
      };
    },

    readFormaPagamento() {
      this.formaDePagamento = [];
      FormaDePagamentoService.read().then((result) => {
        result.data.formasPagamento.map((el) => {
          this.formaDePagamento.push(
            this.formaPagamento(el.descricao, el.uuid)
          );
        });
      });
    },

    receber() {
      this.valorReceber = 0;
      AgendaService.readDateRelatorioReceber(
        this.dataInicial,
        this.dataFinal
      ).then((result) => {
        result.data.consultaReceber.map((el) => {
          this.valorReceber += el.valorConsulta;
        });
      });
    },

    readReceitaData() {
      ReceitaService.readDate(this.dataInicial, this.dataFinal).then(
        (result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorReceita += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        }
      );
    },

    readValorDespesa() {
      this.valorDespesa = 0;
      DespesaService.readDate(this.dataInicial, this.dataFinal)
        .then((result) => {
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorDespesa += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Despesas"
          );
        });
    },

    readValorReceitaFormaPagamento() {
      ReceitaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          console.log("readValorReceitaFormaPagamento", result);
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorReceita += el.valor;
            });
            console.log(this.valorReceita);
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Receitas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Receitas"
          );
        });
    },

    readValorDespesaFormaPagamento() {
      DespesaService.readDateFormaPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          console.log("readValorDespesaFormaPagamento", result);
          if (result.status === 201) {
            result.data.result.map((el) => {
              this.valorDespesa += el.valor;
            });
          } else {
            this.showAlert(
              "error",
              "Ops! ocorreu um erro ao calcular valor das Despesas"
            );
          }
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ops!! ocorreu um erro ao calcular valor das Despesas"
          );
        });
    },

    receitaFormaPagamento() {
      this.valorReceita = 0;
      AgendaService.readDateRelatorioReceitaFormPag(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect
      )
        .then((result) => {
          console.log("receitaFormaPagamento", result);
          if (result.status === 201) {
            this.atendimentos = result.data.consulta;
            this.atendimentos.map((el) => {
              el.dataPagamento = moment(el.dataPagamento).format("DD/MM/YYYY");
            });
            result.data.consulta.map((el) => {
              this.valorReceita += el.valorConsulta;
            });
          } else {
            this.showAlert("error", "Ops! erro no relatorio #1");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! erro no relatorio #1");
        });
    },

    openReceita() {
      this.$bvModal.show("modalReceita");
    },

    openDespesa() {
      this.$bvModal.show("modalDespesa");
    },

    handleOkReceita() {},

    openFormaPagamento() {
      this.$bvModal.show("modal-lg-addFormaPagamento");
    },
    handleOk() {},
    testeForma() {},
    resetModalReceita() {},
    resetModalDespesa() {},
  },
};
</script>

<style>
.containerPagas {
  background: rgb(212, 212, 211);
  border-radius: 10px;
}
</style>