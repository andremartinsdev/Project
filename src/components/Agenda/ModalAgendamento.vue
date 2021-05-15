<template>
  <b-modal
    @ok="handleOk"
    id="modal-lg"
    header-bg-variant="primary"
    header-text-variant="light"
    size="lg"
    title="Informações do Agendamento"
    @hidden="resetModal"
  >
    <template #modal-footer="{ ok, hide }">
      <b-button size="sm" variant="primary" @click="ok()"> Salvar </b-button>

      <b-button size="sm" variant="outline-secondary" @click="hide()">
        Fechar
      </b-button>

      <b-button size="sm" variant="outline-danger"> Excluir </b-button>

      <b-button size="sm" variant="outline-success" @click="resetModal">
        Limpar
      </b-button>
    </template>
    <div>
      <b-card no-body>
        <b-tabs v-model="tabIndexAgendamento" pills card>
          <b-tab active>
            <template v-if="tabIndexAgendamento != 1" #title>
              <b-spinner type="border" small class="mb-1 mr-2"></b-spinner>
              Adicionar Agendamento
            </template>
            <template v-else #title> Adicionar Agendamento </template>
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group>
                <div class="procedimento">
                  <b-form-input
                    type="text"
                    hidden
                    v-model="agendamento.uuid"
                  ></b-form-input>
                  <label>Procedimento </label>
                  <b-icon-plus-circle
                    class="iconsAgenda h5"
                    variant="primary"
                    @click="adicionarProcedimento"
                  ></b-icon-plus-circle>
                </div>
                <b-form-select
                  v-model="agendamento.idProcedimento"
                  :options="optionsProcedimento"
                  size="sm"
                  @change="testeidProc"
                ></b-form-select>
                <label class="mt-2">Titulo</label>

                <b-form-input
                  type="text"
                  size="sm"
                  v-model="agendamento.titulo"
                ></b-form-input>
                <label class="mt-2">Paciente</label>

                <b-form-select
                  v-model="agendamento.idPaciente"
                  :options="this.ListaPaciente"
                  size="sm"
                  @change="pacienteSelecionado"
                ></b-form-select>

                <label class="mt-2">Data do Procedimento</label>

                <b-form-input
                  class="bg-primary text-white"
                  size="sm"
                  type="date"
                  v-model="agendamento.data"
                ></b-form-input>

                <label class="mt-2">Horário do Procedimento</label>
                <input
                  v-mask="'##:##'"
                  type="text"
                  v-model="agendamento.horario"
                  class="form-control bg-primary text-white col-sm-2"
                />
                <label class="mt-2 mr-2">Valor do Procedimento</label>
                <b-form-input
                  v-model.lazy="agendamento.valorConsulta"
                  class="form-control bg-primary text-white col-sm-2"
                  v-money="money"
                ></b-form-input>
                <b-form inline class="mt-3">
                  <label class="mr-2"
                    >Forma de Pagamento
                    <b-icon-plus-circle
                      class="iconsAgenda h6 ml-2"
                      variant="primary"
                      @click="openFormaPagamento"
                    ></b-icon-plus-circle>
                  </label>

                  <b-form-select
                    v-model="agendamento.idFormaPagamento"
                    :options="this.formaDePagamento"
                    size="sm"
                    class="col-3"
                    @change="testeForma"
                  >
                    
                  </b-form-select>

                  <label class="mr-2 ml-2"
                    >Ótica Parceira
                    <b-icon-plus-circle
                      class="iconsAgenda h6 ml-2"
                      variant="primary"
                      @click="openModalOticaParceira"
                    ></b-icon-plus-circle>
                  </label>
                  <b-form-select
                    v-model="agendamento.idOticaParceira"
                    :options="this.oticasParceiras"
                    size="sm"
                    class="col-3"
                    @change="testeOtica"
                  >
                   
                  </b-form-select>
                </b-form>

                <label class="mt-2">Descrição</label>

                <b-form-textarea
                  id="textarea"
                  v-model="agendamento.observacao"
                  placeholder="Descrição ..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </form>
          </b-tab>
          <b-tab>
            <template v-if="tabIndexAgendamento === 1" #title>
              <b-spinner type="border" small class="mb-1 mr-2"></b-spinner>
              Pesquisa
            </template>
            <template v-else #title> Pesquisa </template>
            <div class="conteudo">
              <div>
                <div class="mb-2">
                  <label> Data Inicial</label>

                  <b-form-input
                    size="sm"
                    type="date"
                    v-model="dataInicial"
                    class="mr-2 w-1"
                  ></b-form-input>
                </div>
                <div class="mb-2">
                  <label> Data Final</label>

                  <b-form-input
                    size="sm"
                    type="date"
                    v-model="dataFinal"
                    class="mr-2"
                  ></b-form-input>
                </div>
              </div>
              <div class="w-100 mb-2">
                <label> Paciente</label>
                <b-form-select
                  v-model="pacientePesquisa"
                  :options="this.ListaPaciente"
                  size="sm"
                  @change="pacienteSelectPesquisa"
                ></b-form-select>
              </div>
              <div class="mt-2 mb-2">
                <div>
                  <b-button
                    variant="primary"
                    size="sm"
                    class="mr-4"
                    @click="pesquisarAgendamentos"
                    >Pesquisar</b-button
                  >
                  <b-button
                    pill
                    variant="primary"
                    class="mr-2"
                    @click="proximaPage"
                    v-if="page < totalPage"
                    size="sm"
                    >Proxima Pagina</b-button
                  >
                  <b-button
                    pill
                    variant="primary"
                    class="mr-2"
                    disabled
                    size="sm"
                    v-else
                    >Proxima Pagina</b-button
                  >
                  <label>
                    Total de Páginas
                    <b-badge variant="primary">{{ totalPage }}</b-badge>
                  </label>
                  <label class="ml-4">
                    Página Atual
                    <b-badge variant="primary">{{ page }}</b-badge>
                  </label>
                  <b-button
                    pill
                    variant="primary"
                    @click="anteriorPage"
                    v-if="page > 1"
                    class="mr-2 ml-2"
                    size="sm"
                    >Pagina Anterior</b-button
                  >
                  <b-button
                    pill
                    variant="primary"
                    disabled
                    v-else
                    size="sm"
                    class="mr-2 ml-2"
                    >Pagina Anterior</b-button
                  >
                </div>
              </div>
            </div>
            <div class="tabela">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Titúlo Agendamento</th>
                    <th scope="col">Data Agendamento</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="agendamento in agendamentoPesquisa"
                    :key="agendamento.uuid"
                  >
                    <td>{{ agendamento.titulo }}</td>
                    <td>{{ agendamento.data }}</td>
                    <td>
                      <b-button
                        pill
                        v-b-modal.modal-lg
                        variant="primary"
                        @click="editarAgendamento(agendamento.uuid)"
                        >Editar</b-button
                      >
                    </td>
                    <td>
                      <b-button
                        pill
                        v-b-modal.modal-lg
                        variant="primary"
                        @click="excluirAgendamento(agendamento.uuid)"
                        >Excluir</b-button
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <ModalFormaPagamento @reloadForma="readFormaPagamento" />
    <ModalOticaParceira />
  </b-modal>
</template>

<script>
import { mapState } from "vuex";
import FormaDePagamentoService from "../../services/formaDePagamento";
import PacienteService from "../../services/paciente";
//import ProcedimentoService from "../../services/procedimento";
import OticasParceirasServices from "../../services/oticasParceiras";
import AgendaService from "../../services/agenda";
//import Validation from "../../services/validacoes";

import moment from "moment";

export default {
  props: {
    dataAgenda: {
      type: String,
    },
  },
  components: {
    ModalFormaPagamento: () => import("./ModalFormaPagamento"),
    ModalOticaParceira: () => import("./ModalOticaParceira"),
  },
  data() {
    return {
      pacientePesquisa: "",
      agendamentoPesquisa: [],
      idPacientePesquisa: -1,
      oticasParceirasSelect: null,
      dataInicial: "",
      dataFinal: "",
      oticasParceiras: [],
      formaPagamentoSelect: null,
      formaDePagamento: [],
      optionsProcedimento: [],
      ListaPaciente: [],
      tabIndexAgendamento: 0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
      loadEventos: [],
      totalPage: 0,
      page: 0,
      pagePaciente: 0,
      agendamento: {
        uuid: "",
        idProcedimento: "",
        idFormaPagamento: "",
        idOticaParceira: "",
        idPaciente: "",
        data: "",
        valorConsulta: "00,00",
        horario: "00:00",
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
      pacienteSelect: (state) => state.pacienteSelect,
      procedimentoSelect: (state) => state.procedimentoSelect,
    }),
  },
  methods: {
    testeOtica() {
      // console.log(this.agendamento.idOticaParceira);
    },
    testeForma() {
      // console.log(this.agendamento.idFormaPagamento);
    },
    testeidProc() {
      // console.log(this.agendamento.idProcedimento);
    },
    pacienteSelecionado() {
      // (this.agendamento.idPacienteconsole.log);
    },

    adicionarProcedimento() {
      this.$emit("openModalProcedimento");
    },

    loadEventosEmit() {
      this.$emit("reloadAgendamentos");
    },

    CreateObject(dados) {
      return {
        id: dados.uuid,
        title: dados.titulo,
        start: moment(dados.data).format("YYYY-MM-DD"),
        description: dados.observacao,
      };
    },

    async saveAgendamento() {
      try {
        if (this.agendamento.uuid === "") {
          this.agendamento.valorConsulta = this.agendamento.valorConsulta
            .replace("R$", "")
            .replace(" ", "")
            .replace(".", "")
            .replace(",", ".");
          await AgendaService.save(this.agendamento);
          this.showAlert("success", "Agendamento Realziado Com Sucesso");
          this.loadEventosEmit();
          return;
        }
        delete this.agendamento.nomePaciente;
        delete this.agendamento.uuidProcedimento;
        delete this.agendamento.uuidOticaParceira;
        delete this.agendamento.uuidFormaPagamento;
        delete this.agendamento.uuidPaciente;
        delete this.agendamento.descricao;
         this.agendamento.valorConsulta = this.agendamento.valorConsulta
            .replace("R$", "")
            .replace(" ", "")
            .replace(".", "")
            .replace(",", ".");
        await AgendaService.update(this.agendamento.uuid, this.agendamento);
        this.showAlert("success", "Agendamento Atualizado com Sucesso");
        this.loadEventosEmit();
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro");
      }
    },

    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      // Exit when the form isn't valid
      this.saveAgendamento();
    },

    async pesquisarAgendamentos(msg = true) {
      try {
        if (this.dataInicial === "" || this.dataFinal === "") {
          this.showAlert("info", "Informe o periodo");
          return;
        }
        if (this.pacientePesquisa === "") {
          this.agendamentoPesquisa = [];
          const agendamentos = await AgendaService.readDataPagination(
            this.dataInicial,
            this.dataFinal
          );
          // console.log(agendamentos);
          if (agendamentos.data.result.result.length === 0) {
            this.showAlert("info", "Nenhuma informação Encontrada");
            return;
          }
          this.agendamentoPesquisa = agendamentos.data.result.result;
          this.agendamentoPesquisa.map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
          });

          this.agendamentoPesquisa.sort((a, b) => {
            return parseInt(a.data) - parseInt(b.data);
          }),
            (this.totalPage = Math.ceil(
              agendamentos.data.result.total[0].count / 5
            ));
        } else {
          this.agendamentoPesquisa = [];

          const agendamentos = await AgendaService.readDatePacienteNext(
            this.dataInicial,
            this.dataFinal,
            this.pacientePesquisa
          );
          
          this.agendamentoPesquisa = agendamentos.data.agendamentos.result;
          this.agendamentoPesquisa.forEach((element) => {
            element.data = moment(element.data).format("DD/MM/YYYY");
          });
          if (agendamentos.data.agendamentos.total[0].count > 6 && msg === true) {
            this.showAlert(
              "info",
              "Existem mais registros, Altere o périodo caso queira ter acesso"
            );
          }

          // const agendamentos = await AgendaService.readDatePaciente(
          //   this.dataInicial,
          //   this.dataFinal,
          //   this.agendamento.idPaciente
          // );
          // this.agendamentoPesquisa = agendamentos.data.agendamentos.result;
          // this.agendamentoPesquisa.forEach(element => {
          //   element.data = moment(element.data).format("DD/MM/YYYY")
          // });
          // this.totalPage = Math.ceil(agendamentos.data.agendamentos.total[0].count / 5);
          // console.log(this.totalPage)
        }
      } catch (error) {
        this.showAlert("error", "erro ao Pesquisar consulta");
      }
    },

    proximaPage() {
      this.page = this.page + 1;
      AgendaService.readDataPaginationProximo(
        this.dataInicial,
        this.dataFinal,
        this.page
      )
        .then((result) => {
          this.agendamentoPesquisa = result.data.result.result;
          this.agendamentoPesquisa.map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
          });
          this.agendamentoPesquisa.sort((a, b) => {
            return parseInt(a.data) - parseInt(b.data);
          });
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Erro na pesquisa dos agendamentos #pagination"
          );
        });
    },

    anteriorPage() {
      this.page = this.page - 1;
      AgendaService.readDataPaginationProximo(
        this.dataInicial,
        this.dataFinal,
        this.page
      )
        .then((result) => {
          this.agendamentoPesquisa = result.data.result.result;
          this.agendamentoPesquisa.map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
          });
          this.agendamentoPesquisa.sort((a, b) => {
            return parseInt(a.data) - parseInt(b.data);
          });
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Erro na pesquisa dos agendamentos #pagination"
          );
        });
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

    createFormaPagamento(descricao, idFormaPagamento) {
      return {
        text: descricao,
        value: idFormaPagamento,
      };
    },

    createOticaParceira(descricao, uuid) {
      return {
        text: descricao,
        value: uuid,
      };
    },

    async readOticaParceira() {
      try {
        const oticasParceira = await OticasParceirasServices.read();
        oticasParceira.data.oticaParceira.map((el) => {
          this.oticasParceiras.push(
            this.createOticaParceira(el.descricao, el.uuid)
          );
        });
      } catch (error) {
        this.showAlert("error", "Erro na pesquisa ótica parceira");
      }
    },

    async readFormaPagamento() {
      try {
        this.formaDePagamento = [];
        const formaPagamento = await FormaDePagamentoService.read();
        formaPagamento.data.formasPagamento.map((el) => {
          this.formaDePagamento.push(
            this.createFormaPagamento(el.descricao, el.uuid)
          );
        });
      } catch (error) {
        this.showAlert("error", "Erro ao carregar forma de pagamento");
      }
    },

    Paciente(text, value) {
      return {
        text: text,
        value: value,
      };
    },

    procedimento(text, value) {
      return {
        text: text,
        value: value,
      };
    },

    list() {
      PacienteService.readAll()
        .then((response) => {
          response.data.map((paciente) => {
            this.ListaPaciente.push(
              this.Paciente(paciente.nomePaciente, paciente.uuid)
            );
          });
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um problema ao listar pacientes");
        });
    },

    resetModal() {
      this.dataFinal = "";
      this.dataInicial = "";
      this.idPacientePesquisa = -1;
      this.agendamento = {
        uuid: "",
        idProcedimento: "",
        idFormaPagamento: "",
        idOticaParceira: "",
        idPaciente: "",
        data: "",
        valorConsulta: "00,00",
        horario: "00:00",
        atendido: false,
        recebido: false,
        observacao: "",
        titulo: "",
        dataPagamento: null,
      };
    },

    readAllProcedimentos() {
      this.optionsProcedimento = this.procedimentoSelect;
    },

    pacienteSelectPesquisa() {
      this.$store.commit("PACIENTE_SELECTED", this.idPacientePesquisa);
    },

    openFormaPagamento() {
      this.$bvModal.show("modal-lg-addFormaPagamento");
    },

    openModalOticaParceira() {
      this.$bvModal.show("modal-lg-addOticaParceira");
    },

    editarAgendamento(uuid) {
      if (!uuid) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        AgendaService.readParams(uuid)
          .then((result) => {
            Object.assign(this.agendamento, result.data.agendamento);
            this.agendamento.data = moment(this.agendamento.data).format(
              "YYYY-MM-DD"
            );
            this.agendamento.idProcedimento =
              result.data.agendamento.uuidProcedimento;
            this.agendamento.idFormaPagamento =
              result.data.agendamento.uuidFormaPagamento;
            this.agendamento.idOticaParceira =
              result.data.agendamento.uuidOticaParceira;
            this.tabIndexAgendamento = 0;
          })
          .catch(() => {
            this.showAlert("error", "Erro ao editar Agendamento");
          });
      }
    },

    excluirAgendamento(uuid) {
      if (!uuid) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        AgendaService.delete(uuid)
          .then(() => {
            this.showAlert("success", "Registro Deletado com Sucesso");
            this.pesquisarAgendamentos(false);
            this.loadEventosEmit();
            // this.resetModal();
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Deletar Registro");
          });
      }
    },
  },

  updated() {
    this.readAllProcedimentos();
  },

  created() {
    this.readFormaPagamento();
    this.readOticaParceira();

    this.list();
  },

  watch: {
    dataAgenda() {
      this.agendamento.data = this.dataAgenda;
    },
    procedimentoSelect() {
      this.optionsProcedimento = this.procedimentoSelect;
    },
  },
};
</script>

<style>
</style>