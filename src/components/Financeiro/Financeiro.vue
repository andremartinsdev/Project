<template>
  <b-card header="Financeiro" class="text-center ml-1 mr-1">
    <b-card class="shadow">
      <div class="flexDiv ml-2 fluid">
        <div class="mb-3 mr-2">
          <label> Data Inicial</label>

          <b-form-input
            size="sm"
            type="date"
            v-model="dataInicial"
            class="mr-2"
          ></b-form-input>
        </div>
        <div class="mb-3 mr-2">
          <label> Data Final</label>

          <b-form-input
            size="sm"
            type="date"
            v-model="dataFinal"
            class="mr-2"
          ></b-form-input>
        </div>
        <div class="mb-3 mr-2">
          <label> Forma de Pagamento</label>

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
        </div>

        <div class="ml-5">
          <b-button variant="primary" @click="gerarRelatorio" size="sm"
            >Gerar Relatório</b-button
          >
        </div>

        <div class="ml-5">
          <b-button variant="danger" size="sm" @click="openDespesa"
            >Cadastrar Despesa
            <b-icon-graph-down variant="light" class="ml-3"></b-icon-graph-down>
          </b-button>
        </div>

        <div class="mb-2 ml-5">
          <b-button variant="success" @click="openReceita" size="sm"
            >Cadastrar Receita
            <b-icon-graph-up variant="light" class="ml-3"></b-icon-graph-up>
          </b-button>
        </div>
      </div>
    </b-card>

    <div class="mt-4 shadow p-4 containerPagas">
      <h4 class="mb-4">Finanças Pagas</h4>
      <b-card-group deck>
        <b-card
          header-tag="header"
          bg-variant="success"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Receita : Composto por todas as receitas cadastradas e Atendimentos Finalizados'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-up variant="light"></b-icon-arrow-up>
            Receitas Pagas
          </h6>
          <h6 class="text-white">
            {{
              valorReceitasPagas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

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
            Despesas Pagas
          </h6>
          <h6 class="text-white">
            {{
              valorDespesasPagas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

        <b-card
          header-tag="header"
          bg-variant="light"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6>
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Saldo
          </h6>
          <h6>
            {{
              valorSaldoPagas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

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
      <h4 class="mb-4">Finanças a Receber</h4>
      <b-card-group deck>
        <b-card
          header-tag="header"
          bg-variant="success"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Receita : Composto por todas as receitas cadastradas e Atendimentos Finalizados'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-up variant="light"></b-icon-arrow-up>
            Receitas a Receber
          </h6>
          <h6 class="text-white">
            {{
              valorReceitasFuturas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

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
            Despesas a Receber
          </h6>
          <h6 class="text-white">
            {{
              valorDespesasFuturas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

        <b-card
          header-tag="header"
          bg-variant="light"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Despesas : Composta por todas Despesas Cadastradas'
          "
        >
          <h6>
            <b-icon-arrow-down variant="light"></b-icon-arrow-down>
            Saldo
          </h6>
          <h6>
            {{
              valorSaldoFuturas.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

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
<b-button variant="primary" pill block  v-b-toggle.collapse-2 class="mt-4 mb-4">Gráfico</b-button>
      <b-collapse id="collapse-2">
    <b-card>
      <Chart/>
    </b-card>
  </b-collapse>
  
</div>
    
    <ModalDespesa @reloadForma="readFormaPagamento" />
    <ModalReceber @reloadForma="readFormaPagamento" />
  </b-card>

  <!-- <div>
    <b-card>
      <div class="flexDiv ml-2 fluid">
        <div class="mb-3 mr-2">
          <label> Data Inicial</label>

          <b-form-input
            size="sm"
            type="date"
            v-model="dataInicial"
            class="mr-2"
          ></b-form-input>
        </div>
        <div class="mb-3 mr-2">
          <label> Data Final</label>

          <b-form-input
            size="sm"
            type="date"
            v-model="dataFinal"
            class="mr-2"
          ></b-form-input>
        </div>
        <div class="mb-3 mr-2">
          <label> Forma de Pagamento</label>

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
        </div>

        <div class="ml-5">
          <b-button variant="primary" @click="gerarRelatorio" size="sm"
            >Gerar Relatório</b-button
          >
        </div>

        <div class="ml-5">
          <b-button variant="danger" size="sm" v-b-modal.modalDespesa
            >Cadastrar Despesa
            <b-icon-graph-down variant="light" class="ml-3"></b-icon-graph-down>
          </b-button>
        </div>

        <div class="mb-2 ml-5">
          <b-button variant="success" v-b-modal.modalReceita size="sm"
            >Cadastrar Receita
            <b-icon-graph-up variant="light" class="ml-3"></b-icon-graph-up>
          </b-button>
        </div>
      </div>
    </b-card>

    <div class="mt-3">
      <b-card-group deck>
        <b-card
          header-tag="header"
          bg-variant="success"
          footer-tag="footer"
          v-b-popover.hover.bottom="
            'Receita : Composto por todas as receitas cadastradas e Atendimentos Finalizados'
          "
        >
          <h6 class="text-white">
            <b-icon-arrow-up variant="light"></b-icon-arrow-up>
            Receitas
          </h6>
          <h6 class="text-white">
            {{
              valorReceita.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            }}
          </h6>
        </b-card>

        <b-card
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
            Despesas
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
      </b-card-group>
    </div>





    <b-modal
      @ok="handleOk"
      id="modalDespesa"
      title="Cadastro de Despesa"
      header-bg-variant="danger"
      header-text-variant="light"
      size="lg"
      @hidden="resetModalDespesa"
    >
      <div>
        <b-tabs content-class="mt-3" v-model="tabIndexDespesa">
          <b-tab title="Cadastro">
            <div>
              <b-input hidden v-model="despesa.idDespesa"></b-input>
              <label for="">Descrição da Despesa</label>
              <b-input size="sm" v-model="despesa.descricaoDespesa"></b-input>
              <div class="containerData">
                <div>
                  <label for="" class="mt-2">Data do Pagamento</label>
                  <b-form-input
                    size="sm"
                    type="date"
                    v-model="despesa.data"
                    class="mr-2 col-sm-4"
                  ></b-form-input>
                </div>
              </div>

              <label for="" class="mt-2">Valor da Despesa</label>
              <b-form-input
                v-model.lazy="despesa.valor"
                class="form-control bg-danger text-white col-sm-3"
                v-money="money2"
              ></b-form-input>
              <div class="form-group w-50 mr-2 mt-2">
                <label class="mr-2">Forma de Pagamento </label>
                <b-icon-plus-circle
                  class="iconsAgenda ml-2"
                  variant="primary"
                  @click="openFormaPagamento"
                ></b-icon-plus-circle>
                <b-form-select
                  size="sm"
                  v-model="despesa.idFormaPagamento"
                  :options="formaDePagamento"
                >
                  <template #first>
                    <b-form-select-option :value="null"
                      >-- Selecione --</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </div>

              <div>
                <b-form-textarea
                  id="textarea"
                  placeholder="Observação"
                  rows="3"
                  max-rows="6"
                  v-model="despesa.observacao"
                ></b-form-textarea>
              </div>
              <b-card
                class="mt-4"
                v-if="despesa.despesaPaga === false"
                bg-variant="danger"
              >
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="despesa.despesaPaga"
                  name="checkbox-1"
                  class="text-white text-center"
                >
                  Despesa não Paga
                </b-form-checkbox>
              </b-card>
              <b-card class="mt-4" v-else bg-variant="success">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="despesa.despesaPaga"
                  name="checkbox-1"
                  class="text-white text-center"
                >
                  Despesa Paga
                </b-form-checkbox>
              </b-card>
            </div>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card class="mt-3 cardTableDespesa">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Data Pagamento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="despesa in despesas[0]" :key="despesa.uuid">
                    <th v-if="despesa.despesaPaga">
                      <b-icon-check2 variant="success"></b-icon-check2>
                    </th>
                    <th v-else>
                      <b-icon-x variant="danger"></b-icon-x>
                    </th>
                    <th>{{ despesa.descricaoDespesa }}</th>
                    <td>{{ despesa.data }}</td>
                    <td>
                      {{
                        despesa.valor.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      }}
                    </td>
                    <td>
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="editarDespesa(despesa.uuid)"
                        >Editar</b-button
                      >
                    </td>
                    <td>
                      <b-button
                        size="sm"
                        variant="danger"
                        @click="excluirDespesa(despesa.uuid)"
                        class="ml-2"
                      >
                        Excluir
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </b-tab>
        </b-tabs>
      </div>

      <template #modal-footer="{ ok }">
        <b-button size="sm" variant="primary" @click="ok()"> Salvar </b-button>
        <b-button size="sm" variant="primary" @click="resetModalDespesa">
          Limpar
        </b-button>
      </template>
    </b-modal>





    <b-modal
      @ok="handleOkReceita"
      id="modalReceita"
      title="Cadastro de Receita"
      header-bg-variant="success"
      header-text-variant="light"
      size="lg"
      @hidden="resetModalReceita"
    >
      <div>
        <b-tabs content-class="mt-3" v-model="tabIndexReceita">
          <b-tab title="Cadastro">
            <div>
              <b-input hidden v-model="despesa.idDespesa"></b-input>
              <label for="">Descrição da Receita</label>
              <b-input
                size="sm"
                v-model="receitaData.descricaoReceita"
              ></b-input>
              <div class="containerData">
                <div>
                  <label for="" class="mt-2">Data do Pagamento</label>
                  <b-form-input
                    size="sm"
                    type="date"
                    v-model="receitaData.data"
                    class="mr-2 col-sm-4"
                  ></b-form-input>
                </div>
              </div>

              <label for="" class="mt-2">Valor da Receita</label>
              <b-form-input
                v-model.lazy="receitaData.valor"
                class="form-control bg-success text-white col-sm-3"
                v-money="money2"
              ></b-form-input>
              <div class="form-group w-50 mr-2 mt-2">
                <label class="mr-2">Forma de Pagamento </label>
                <b-icon-plus-circle
                  class="iconsAgenda ml-2"
                  variant="primary"
                  @click="openFormaPagamento"
                ></b-icon-plus-circle>
                <b-form-select
                  @change="testeForma"
                  size="sm"
                  v-model="receitaData.idFormaPagamento"
                  :options="formaDePagamento"
                >
                  <template #first>
                    <b-form-select-option :value="null"
                      >-- Selecione --</b-form-select-option
                    >
                  </template>
                </b-form-select>
              </div>

              <div>
                <b-form-textarea
                  id="textarea"
                  placeholder="Observação"
                  rows="3"
                  max-rows="6"
                  v-model="receitaData.observacao"
                ></b-form-textarea>
              </div>
              <b-card
                class="mt-4"
                v-if="receitaData.receitaPaga === false"
                bg-variant="danger"
              >
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="receitaData.receitaPaga"
                  name="checkbox-1"
                  class="text-white text-center"
                >
                  Receita não Recebida
                </b-form-checkbox>
              </b-card>
              <b-card class="mt-4" v-else bg-variant="success">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="receitaData.receitaPaga"
                  name="checkbox-1"
                  class="text-white text-center"
                >
                  Receita Recebida
                </b-form-checkbox>
              </b-card>
            </div>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card class="mt-3 cardTableDespesa">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Data Pagamento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="receita in receitas[0]" :key="receita.uuid">
                    <th v-if="receita.receitaPaga">
                      <b-icon-check2 variant="success"></b-icon-check2>
                    </th>
                    <th v-else>
                      <b-icon-x variant="danger"></b-icon-x>
                    </th>
                    <th>{{ receita.descricaoReceita }}</th>
                    <td>{{ receita.data }}</td>
                    <td>
                      {{
                        receita.valor.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })
                      }}
                    </td>
                    <td>
                      <b-button
                        size="sm"
                        variant="success"
                        @click="editarReceita(receita.uuid)"
                        >Editar</b-button
                      >
                    </td>
                    <td>
                      <b-button
                        size="sm"
                        variant="success"
                        @click="excluirReceita(receita.uuid)"
                        class="ml-2"
                      >
                        Excluir
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </b-tab>
        </b-tabs>
      </div>

      <template #modal-footer="{ ok }">
        <b-button size="sm" variant="primary" @click="ok()"> Salvar </b-button>
        <b-button size="sm" variant="primary" @click="resetModalReceita">
          Limpar
        </b-button>
      </template>
    </b-modal>

    <b-card class="mt-3 cardTable">
      <Chart />
    </b-card>
  </div> -->
</template>

<script>
import ModalDespesa from "../Financeiro/Modals/ModalContasPagar";
import ModalReceber from "../Financeiro/Modals/ModalContasReceber";
import AgendaService from "../../services/agenda";
import moment from "moment";
import DespesaService from "../../services/despesas";
import ReceitaService from "../../services/receita";
import FormaDePagamentoService from "../../services/formaDePagamento";
//  import Chart from "../Chart/Chart";
export default {
  components: {
    Chart: () => import("../Chart/Chart"),
    ModalDespesa,
    ModalReceber,
  },
  created() {
    this.readFormaPagamento();
  },
  data() {
    return {
      despesas: [],
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
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
    async financasPagas() {
      const receitasPagas = await ReceitaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      const receitasPagasAgendamento = await AgendaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      const despesasPagas = await DespesaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        true
      );
      this.valorReceitasPagas =
        receitasPagas.data.result[0].valorTotalReceita ??
        0 +
          receitasPagasAgendamento.data.agendamentos[0]
            .totalReceitaAgendamento ??
        0;
      this.valorDespesasPagas =
        despesasPagas.data.result[0].valorTotalDespesa ?? 0;
      this.valorSaldoPagas = this.valorReceitasPagas - this.valorDespesasPagas;
    },

    async financasPagasFormaPagamento() {
      const receitasPagas = await ReceitaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );
      const receitasPagasAgendamento = await AgendaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );
      const despesasPagas = await DespesaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        true
      );
      const valorAgenda =
        receitasPagasAgendamento.data.consultaReceber[0].valorTotalAgenda ?? 0;
      const valorReceita = receitasPagas.data.result[0].valorTotalReceita ?? 0;
      this.valorReceitasPagas = valorAgenda + valorReceita;
      this.valorDespesasPagas =
        despesasPagas.data.result[0].valorTotalDespesa ?? 0;
      this.valorSaldoPagas = this.valorReceitasPagas - this.valorDespesasPagas;
    },

    async financasFuturas() {
      const receitasPagas = await ReceitaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        false
      );
      const receitasPagasAgendamento = await AgendaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        false
      );
      const despesasPagas = await DespesaService.readDatePagas(
        this.dataInicial,
        this.dataFinal,
        false
      );
      this.valorReceitasFuturas =
        receitasPagas.data.result[0].valorTotalReceita ??
        0 +
          receitasPagasAgendamento.data.agendamentos[0]
            .totalReceitaAgendamento ??
        0;
      this.valorDespesasFuturas =
        despesasPagas.data.result[0].valorTotalDespesa ?? 0;
      this.valorSaldoFuturas =
        this.valorReceitasFuturas - this.valorDespesasFuturas;

      console.log(this.valorSaldoFuturas);
    },

    async financasFuturasFormaPagamento() {
      const receitasPagas = await ReceitaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        false
      );
      const receitasPagasAgendamento = await AgendaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        false
      );
      const despesasPagas = await DespesaService.readDatePagasPagamento(
        this.dataInicial,
        this.dataFinal,
        this.formaDePagamentoSelect,
        false
      );
      const valorAgenda =
        receitasPagasAgendamento.data.consultaReceber[0].valorTotalAgenda ?? 0;
      const valorReceita = receitasPagas.data.result[0].valorTotalReceita ?? 0;
      this.valorReceitasFuturas = valorAgenda + valorReceita;
      this.valorDespesasFuturas =
        despesasPagas.data.result[0].valorTotalDespesa ?? 0;
      this.valorSaldoFuturas =
        this.valorReceitasFuturas - this.valorDespesasFuturas;
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
      if (
        this.formaDePagamentoSelect != null &&
        this.dataInicial != "" &&
        this.dataFinal != ""
      ) {
        console.log("entrooooou com forma");
        this.valorReceita = 0;
        this.valorReceber = 0;
        this.valorDespesa = 0;
        this.financasPagasFormaPagamento();
        this.financasFuturasFormaPagamento();
      } else {
        this.valorReceita = 0;
        this.valorReceber = 0;
        this.valorDespesa = 0;
        this.financasPagas();
        this.financasFuturas();
      }
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