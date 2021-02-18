<template>
  <div>
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
        @ok="saveProcedimento"
        id="modal-lg-addProcedimento"
        header-bg-variant="light"
        title="Novo Procedimento"
        @hidden="resetModal"
      >
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Cadastro" active>
            <label class="mt-2">Descrição do Procedimento</label>
            <b-form-input
              size="sm"
              type="text"
              hidden
              v-model="procedimento.uuid"
            ></b-form-input>
            <b-form-input
              size="sm"
              type="text"
              v-model="procedimento.text"
            ></b-form-input>
          </b-tab>
          <b-tab title="Pesquisar">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Descrição Procedimento</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="procedimento in optionsPro" :key="procedimento.uuid">
                  <td>{{ procedimento.text }}</td>
                  <td>
                    <b-button
                      pill
                      v-b-modal.modal-lg
                      variant="primary"
                      @click="editarProcedimento(procedimento.uuid)"
                      >Editar</b-button
                    >
                  </td>
                  <td>
                    <b-button
                      pill
                      v-b-modal.modal-lg
                      variant="primary"
                      @click="excluirProcedimento(procedimento.uuid)"
                      >Excluir</b-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </b-tab>
        </b-tabs>

        <template #modal-footer="{ ok, hide }">
          <b-button size="sm" variant="primary" @click="ok()">
            Salvar
          </b-button>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="limparProcedimento()"
          >
            Novo
          </b-button>
          <b-button
            size="sm"
            variant="outline-secondary"
            @click="hide('forget')"
          >
            Fechar
          </b-button>
        </template>
      </b-modal>

      <b-modal
        id="modal-lg-pagamento"
        header-bg-variant="primary"
        header-text-variant="light"
        title="Pagamento"
        size="lg"
        @hidden="resetModal"
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
            <label for="exampleInputEmail1">Data Nascimento</label>
            <input
              type="text"
              v-model="agendamento.dataNascimento"
              disabled
              class="form-control bg-primary text-white"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Valor da Consulta</label>
          <b-input-group prepend="R$" class=" ">
            <b-form-input
              v-model.lazy="agendamento.valorConsulta"
              class="form-control bg-primary text-white col-sm-2"
              v-money="money2"
            ></b-form-input>
          </b-input-group>

          <div class="dadosPaciente mt-4">
            <div class="form-group w-50 mr-2">
              <label>Forma de Pagamento</label>
              <b-form-select
                size="sm"
                v-model="formaPagamentoSelect"
                :options="formaDePagamento"
              ></b-form-select>
            </div>
            <div class="form-group w-50">
              <label for="exampleInputEmail1">Ótica Parceira</label>
              <b-form-select
                :options="oticasParceiras"
                v-model="oticasParceirasSelect"
                size="sm"
              ></b-form-select>
            </div>
          </div>
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
        </div>

        <template #modal-footer="{ hide }">
          <b-button size="sm" variant="primary" @click="savePagamento()">
            Salvar
          </b-button>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="limparProcedimento()"
          >
            Novo
          </b-button>
          <b-button
            size="sm"
            variant="outline-secondary"
            @click="hide('forget')"
          >
            Fechar
          </b-button>
        </template>
      </b-modal>

      <b-modal
        id="modal-lg-detalhes"
        header-bg-variant="primary"
        header-text-variant="light"
        size="lg"
        class="text-center"
        title="Detalhes Agendamento"
        @hidden="resetModal"
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
          <b-button size="sm" variant="primary" @click="ok()">
            Salvar
          </b-button>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="hide('forget')"
          >
            Fechar
          </b-button>

          <b-button
            size="sm"
            variant="outline-danger"
            @click="excluirAgendamento(agendamento.uuid)"
          >
            Excluir
          </b-button>

          <b-button size="sm" variant="outline-success" @click="resetModal">
            Limpar
          </b-button>
        </template>
        <div>
          <b-card no-body>
            <b-tabs v-model="tabIndexAgendamento" pills card>
              <b-tab title="Adicionar Agendamento" active>
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
                      v-model="agendamento.procedimento"
                      :options="optionsPro"
                      size="sm"
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
                      @change="pacienteSelect"
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

                    <label class="mt-2">Valor do Procedimento</label>
                    <b-form-input
                      v-model.lazy="agendamento.valorConsulta"
                      class="form-control bg-primary text-white col-sm-2"
                      v-money="money"
                    ></b-form-input>

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
              <b-tab title="Pesquisa">
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
                      v-model="idPacientePesquisa"
                      :options="this.ListaPaciente"
                      size="sm"
                      @change="pacienteSelectPesquisa"
                    ></b-form-select>
                  </div>
                  <div class="mt-2 mb-2">
                    <div>
                    <b-button variant="primary"     size="sm" class="mr-4" @click="pesquisarAgendamentos"
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
                      class="mr-2  ml-2"
                          size="sm"
                      >Pagina Anterior</b-button
                    >
                    <b-button
                      pill
                      variant="primary"
                      disabled
                      v-else
                          size="sm"
                      class="mr-2  ml-2"
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
      </b-modal>
    </div>
  </div>
</template>
<script>
//import Calendar from "./Calendar";
import PacienteService from "../../services/paciente";
import FormaDePagamentoService from "../../services/formaDePagamento";
import OticasParceirasServices from "../../services/oticasParceiras";
import AgendaService from "../../services/agenda";
import ProcedimentoService from "../../services/procedimento";
import Validation from "../../services/validacoes";
import { mapState } from "vuex";
import moment from "moment";

export default {
  components: {
    Calendar: () => import("./Calendar"),
  },
  data() {
    return {
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
      tabIndex: 0,
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
      teste: "asdasdsa",
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
    }),
  },

  created() {
    this.list();
    this.readAllProcedimentos();
    this.readFormaPagamento();
    this.readOticaParceira();
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

    editarProcedimento(uuid) {
      ProcedimentoService.read(uuid)
        .then((result) => {
          if (result.status === 201) {
            this.procedimento.text = result.data.procedimento[0].text;
            this.procedimento.uuid = result.data.procedimento[0].uuid;
            this.procedimento.value = result.data.procedimento[0].value;
            this.tabIndex = 0;
          }
        })
        .catch(() => {
          this.showAlert("error", "Erro ao carregar procedimento");
        });
    },

    loadEventos2() {
      this.loadEventos = [];
      AgendaService.read()
        .then((result) => {
          console.log(result);
          result.data.consulta.map((resultado) => {
            console.log(this.CreateObject(resultado));
            this.loadEventos.push(this.CreateObject(resultado));
          });
        })
        .catch(() => {
          this.showAlert("error", "Erro ao carregar Eventos");
        });
    },

    CreateObject(dados) {
      console.log(dados);
      return {
        id: dados.uuid,
        title: dados.titulo,
        start: moment(dados.data).format("YYYY-MM-DD"),
        description: dados.observacao,
      };
    },

    excluirProcedimento(uuid) {
      if (!uuid) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        ProcedimentoService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro deletado com Sucesso");
              this.readAllProcedimentos();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Deletar Registro");
          });
      }
    },

    limparProcedimento() {
      this.procedimento = { uuid: "", text: "", value: "" };
    },

    resetModal() {
      this.dataFinal = "";
      this.dataInicial = "";
      this.idPacientePesquisa = -1;
      (this.agendamentoPesquisa = []), this.limparProcedimento();
      this.agendamento = {
        procedimento: "",
        uuid: "",
        data: "",
        horario: "00:00",
        idPaciente: "",
        observacao: "",
        atendido: false,
        titulo: "",
        teste: "teste",
      };
    },
    list() {
      PacienteService.readAll()
        .then((response) => {
          response.data.result.map((paciente) => {
            this.ListaPaciente.push(
              this.Paciente(paciente.nomePaciente, paciente.idPaciente)
            );
          });
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um problema ao listar pacientes");
        });
    },

    editarAgendamento(uuid) {
      if (!uuid) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        AgendaService.readParams(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.agendamento = result.data.agendamento;
              this.agendamento.data = moment(
                result.data.agendamento.data
              ).format("YYYY-MM-DD");
              this.agendamento.procedimento =
                result.data.agendamento.procedimento;
              this.tabIndexAgendamento = 0;
            }
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
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Deletado com Sucesso");
              this.resetModal();
              //this.pesquisarAgendamentos();
              this.loadEventos2();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Deletar Registro");
          });
      }
    },

    pacienteSelect() {
      this.$store.commit("PACIENTE_SELECTED", this.agendamento.idPaciente);
    },

    pacienteSelectPesquisa() {
      this.$store.commit("PACIENTE_SELECTED", this.idPacientePesquisa);
    },

    Paciente(text, value) {
      return {
        text: text,
        value: value,
      };
    },

    saveAgendamento() {
      if (Validation.ValidaAgendamento(this.agendamento)) {
        this.showAlert(
          "info",
          "Ocorreu um erro de validação, verifique se os campos estão preenchidos corretamente"
        );
      } else {
        if (this.agendamento.uuid === "") {
          this.agendamento.valorConsulta = this.agendamento.valorConsulta
            .replace("R$", "")
            .replace(" ", "")
            .replace(".", "")
            .replace(",", ".");
          AgendaService.save(this.agendamento)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Agendamento Realizado com Sucesso");
                this.loadEventos2();
                this.resetModal();
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro ao Realizar agendamento");
            });
        } else {
          console.log(this.agendamento);
          AgendaService.update(this.agendamento.uuid, this.agendamento)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Agendamento Editado");
                this.loadEventos2();
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro ao Atualizar agendamento");
            });
        }
      }
    },

    saveProcedimento(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.procedimento.text != "") {
        if (this.procedimento.uuid === "") {
          bvModalEvt.preventDefault();
          this.procedimento.value = this.procedimento.text;
          ProcedimentoService.save(this.procedimento)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Procedimento Salvo com Sucesso");
                this.readAllProcedimentos();
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro ao salvar Procedimento");
            });
        } else {
          this.procedimento.value = this.procedimento.text;
          ProcedimentoService.update(this.procedimento, this.procedimento.uuid)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Procedimento Atualizado");
                this.readAllProcedimentos();
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro ao atualizar Procedimento");
            });
        }
      } else {
        this.showAlert(
          "info",
          "Ocorreu um erro de Validação, verifique se todos os campos estão preenchidos"
        );
      }
    },

    proximaPage() {
      this.page = this.page + 1;
      AgendaService.readDataPaginationProximo(
        this.dataInicial,
        this.dataFinal,
        this.page
      ).then((result) => {
        this.agendamentoPesquisa = result.data.result.result;
        this.agendamentoPesquisa.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentoPesquisa.sort((a, b) => {
          return parseInt(a.data) - parseInt(b.data);
        });
      });
    },
    anteriorPage() {
      this.page = this.page - 1;
      AgendaService.readDataPaginationProximo(
        this.dataInicial,
        this.dataFinal,
        this.page
      ).then((result) => {
        this.agendamentoPesquisa = result.data.result.result;
        this.agendamentoPesquisa.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentoPesquisa.sort((a, b) => {
          return parseInt(a.data) - parseInt(b.data);
        });
      });
    },

    pesquisarAgendamentos() {
      if (this.dataInicial === "" || this.dataFinal === "") {
        this.showAlert("info", "Informe o periodo");
      } else {
        if (this.idPacientePesquisa === -1) {
          this.agendamentoPesquisa = [];
          AgendaService.readDataPagination(this.dataInicial, this.dataFinal)
            .then((result) => {
              console.log();
              if (result.data.result.result.length === 0) {
                this.showAlert("info", "Nenhuma informação");
              } else {
                this.agendamentoPesquisa = result.data.result.result;
                this.agendamentoPesquisa.map((el) => {
                  el.data = moment(el.data).format("DD/MM/YYYY");
                });
                this.agendamentoPesquisa.sort((a, b) => {
                  return parseInt(a.data) - parseInt(b.data);
                }),
                  (this.totalPage = Math.ceil(
                    result.data.result.total[0].count / 5
                  ));
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro na pesquisa dos agendamentos");
            });
        } else {
          this.agendamentoPesquisa = [];
          AgendaService.readDatePaciente(
            this.dataInicial,
            this.dataFinal,
            this.idPaciente
          )
            .then((result) => {
              this.agendamentoPesquisa = result.data.agendamentos;
            })
            .catch(() => {
              this.showAlert("error", "Ocorreu um erro ao pesquisar");
            });
        }
      }
    },
    readAllProcedimentos() {
      ProcedimentoService.readAll()
        .then((result) => {
          if (result.status === 201) {
            this.optionsPro = result.data.procedimento;
          } else {
            this.showAlert(
              "error",
              "Ocorreu um erro ao carregar procedimentos"
            );
          }
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um erro ao carregar procedimentos");
        });
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
    detalhesAgendamento(event) {
      AgendaService.readAgendaJoinPaciente(event.id)
        .then((result) => {
          console.log(result.data.agendamento);
          this.agendamento = result.data.agendamento;
          this.agendamento.data = moment(result.data.agendamento.data).format(
            "YYYY-MM-DD"
          );
          this.agendamento.valorConsulta = result.data.agendamento.valorConsulta.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          );
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

          this.formaPagamentoSelect = result.data.agendamento.idFormaPagamento;
          this.oticasParceirasSelect = result.data.agendamento.idOticaParceira;
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Ocorreu um erro ao carregar detalhes do agendamento"
          );
        });
      this.$bvModal.show("modal-lg-pagamento");
    },
    dataSelect(event) {
      this.$bvModal.show("modal-lg");
      this.agendamento.data = event;
    },

    adicionarProcedimento() {
      this.$bvModal.show("modal-lg-addProcedimento");
    },

    formaPagamento(descricao, idFormaPagamento) {
      return {
        text: descricao,
        value: idFormaPagamento,
      };
    },

    oticaParceira(nome, idOticaParceira) {
      return {
        text: nome,
        value: idOticaParceira,
      };
    },

    readFormaPagamento() {
      FormaDePagamentoService.read().then((result) => {
        result.data.formasPagamento.map((el) => {
          this.formaDePagamento.push(
            this.formaPagamento(el.descricao, el.idFormaPagamento)
          );
        });
      });
    },

    readOticaParceira() {
      OticasParceirasServices.read().then((result) => {
        console.log(result);
        result.data.oticaParceira.map((el) => {
          this.oticasParceiras.push(
            this.oticaParceira(el.nome, el.idOticaParceira)
          );
        });
        console.log(this.oticasParceiras);
      });
    },

    savePagamento() {
      console.log(this.agendamento.valorConsulta);
      if (
        Validation.ValidaAgendamento(this.agendamento) &&
        parseInt(this.agendamento.valorConsulta) > 0 &&
        this.agendamento.valorConsulta != "00,00" &&
        this.formaPagamentoSelect != null &&
        this.agendamento.recebido === true
      ) {
        AgendaService.update(this.agendamento.uuid, {
          recebido: this.agendamento.recebido,
          valorConsulta: this.agendamento.valorConsulta
            .replace(".", "")
            .replace(",", "."),
          idFormaPagamento: this.formaPagamentoSelect,
          idOticaParceira: this.oticasParceirasSelect,
          dataPagamento: moment().format("YYYY-MM-DD"),
        })
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Pagamento Realizado com Sucesso");
            }
          })
          .catch(() => {
            this.showAlert("error", "Ocorreu um erro ao realizar pagamento");
          });
      } else {
        this.showAlert(
          "info",
          "Ocorreu um erro, verifique se todos os campos estão preenchidos"
        );
      }
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
  margin-top: 100px;
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