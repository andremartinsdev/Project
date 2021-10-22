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
      <div class="mt-4 shadow p-3" style="background: rgb(212, 212, 211)">
        <h6 class="text-center p-2">Relatório Financeiro</h6>
        <b-button  v-b-popover.hover.bottom="
      'Informe o período antes de gerar o relatório'
    " class="mr-2 mt-1" @click="gerar" variant="info"
          >Fluxo de Contas (Pagar/Receber)</b-button
        >
      </div>

      <div class="mt-4 shadow p-4 containerPagas">
        <h4 class="mb-4">Contas a Pagar</h4>
        <b-card-group deck>
          <!-- CARD 1 -->
          <CardContasAPagar :search="search" />
          <CardContasAPagarPagas :search="search" />
          <CardContasAPagarAbertas :search="search" />
        </b-card-group>
      </div>

      <div class="mt-4 shadow p-4 containerPagas">
        <h4 class="mb-4">Contas a Receber</h4>
        <b-card-group deck>
          <!-- CARD 1 -->
          <CardContasAReceber :search="search" />
          <CardContasAReceberRecebidas :search="search" />
          <CardContasAReceberAbertas :search="search" />
         
        </b-card-group>
      </div>
      <div>
        <b-button
          variant="primary"
          pill
          v-show="false"
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
      <table id="receita"  v-show="false">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Forma de Pag.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(desp, index) in receitaRelatorio" :key="index">
            <td>{{ desp.descricaoReceita }}</td>
            <td>{{ desp.valor }}</td>
            <td>{{ desp.data }}</td>
            <td>{{ desp.descFormaPagamento }}</td>
          </tr>
          <tr>
            <th>Valor Total</th>
            <td>{{ totalReceber }}</td>
          </tr>
        </tbody>
      </table>

      <table id="despe"  v-show="false">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data Vencimento</th>
            <th>Data Pag.</th>
            <th>Forma de Pag.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(desp, index) in despesaRelatorio" :key="index">
            <td>{{ desp.descricaoDespesa }}</td>
            <td>{{ desp.valor }}</td>
            <td>{{ desp.dataVencimento }}</td>
            <td>{{ desp.dataPagamento }}</td>
            <td>{{ desp.descFormaPagamento }}</td>
          </tr>
          <tr>
            <th>Valor Total</th>
            <td>{{ totalPagar }}</td>
          </tr>
        </tbody>
      </table>

      <table id="agenda" v-show="false">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Procedimento</th>
            <th>Paciente</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Data Pagamento</th>
            <th>Forma de Pag.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(desp, index) in agendaRelatorio" :key="index">
            <td>{{ desp.titulo }}</td>
            <td>{{ desp.text }}</td>
            <td>{{ desp.nomePaciente }}</td>
            <td>{{ desp.valorConsulta }}</td>
            <td>{{ desp.data }}</td>
            <td>{{ desp.dataPagamento }}</td>
            <td>{{ desp.descricao }}</td>
          </tr>

          <tr>
            <th>Valor Total</th>
            <td>{{ totalAgenda }}</td>
          </tr>
        </tbody>
      </table>

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
// import moment from "moment";
import DespesaService from "../../services/despesas";
import ReceitaService from "../../services/receita";
import FormaDePagamentoService from "../../services/formaDePagamento";
import Sidebar from "../../components/SidebarNavbar.vue";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
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
      totalAgenda: 0,
      totalReceber: 0,
      totalPagar: 0,
      despesaRelatorio: [],
      receitaRelatorio: [],
      agendaRelatorio: [],
      search: { dataInicial: "", dataFinal: "", formaDePagamento: null },
      despesas: [],
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },

     
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
    async gerar() {
      if (this.dataInicial === "" || this.dataFinal === "") {
        this.showAlert("info", "Por favor Informe o Período inicial e Final");
        return;
      }
      
     
      
      await this.relatorioContasReceber();
      await this.relatorioContasPagar();
      await this.relatorioAgenda();
      var doc = new jsPDF();
      doc.setFontSize(15).text("Relatório Financeiro", 85, 10);
      doc.setFontSize(10).text("Contas a Pagar", 35, 43);
      doc.autoTable({
        html: "#despe",
        margin: { horizontal: 2 },
        styles: { fontSize: 7 },
        startY: 47,
        tableWidth: 100,
      });

      doc.setFontSize(10).text("Contas a Receber", 145, 43);
      doc.autoTable({
        html: "#receita",
        margin: { horizontal: 110 },
        styles: { fontSize: 7 },
        startY: 47,
        drawHeaderCell: [255, 0, 0],
        tableWidth: 100,
      });

      doc.addPage();
      doc.setFontSize(10).text("Contas a Receber", 145, 43);
      doc.autoTable({
        html: "#agenda",
        margin: { horizontal: 2 },
        styles: { fontSize: 10 },
        startY: 10,
        drawHeaderCell: [255, 0, 0],
        tableWidth: 205,
      });

      window.open(doc.output("bloburl"));
    },

    async relatorioAgenda() {
      const { data } = await AgendaService.readDateFinanceiro(
        this.dataInicial,
        this.dataFinal
      );
      console.log(data);
      this.totalAgenda = 0;
      this.agendaRelatorio = data.agendamentos;
      this.agendaRelatorio.forEach((element) => {
        this.totalAgenda = this.totalAgenda + element.valorConsulta;
        element.dataPagamento = moment(element.dataPagamento)
          .add("day", 1)
          .format("DD/MM/YYYY");
        element.valorConsulta = element.valorConsulta.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        element.data = moment(element.data).add("day", 1).format("DD/MM/YYYY");
      });

      this.totalAgenda = this.totalAgenda.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
    async relatorioContasPagar() {
      try {
        const { data } = await DespesaService.readDateAll(
          this.dataInicial,
          this.dataFinal
        );
        this.totalPagar = 0;
        this.despesaRelatorio = data.result;
        this.despesaRelatorio.forEach((element) => {
          this.totalPagar += element.valor;
          element.dataPagamento = moment(element.dataPagamento)
            .add("day", 1)
            .format("DD/MM/YYYY");
          element.valor = element.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
          element.dataVencimento = moment(element.dataVencimento)
            .add("day", 1)
            .format("DD/MM/YYYY");
        });

        this.totalPagar = this.totalPagar.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        console.log(this.despesaRelatorio);
      } catch (error) {
        console.log(error);
      }
    },

    async relatorioContasReceber() {
      try {
        const { data } = await ReceitaService.readDateAll(
          this.dataInicial,
          this.dataFinal
        );
         this.totalReceber = 0;
        this.receitaRelatorio = data.result;
        this.receitaRelatorio.forEach((element) => {
          this.totalReceber += element.valor;
          element.data = moment(element.data)
            .add("day", 1)
            .format("DD/MM/YYYY");
          element.valor = element.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        });
        this.totalReceber = this.totalReceber.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
        console.log(this.receitaRelatorio);
       
      } catch (error) {
        console.log(error);
      }
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

      this.search = {
        dataInicial: this.dataInicial,
        dataFinal: this.dataFinal,
        formaDePagamento: this.formaDePagamentoSelect,
      };
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
.containerrelatorio {
  display: flex;
  overflow: auto;
  border-radius: 10px;
  justify-content: center;
}
</style>