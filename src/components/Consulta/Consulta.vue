<template>
  <div>
    <b-container fluid class="consulta">
      <div class="mb-5">
        <b-card no-body>
          <b-tabs card v-model="tabIndexConsulta">
            <b-tab title="Agendados para Hoje" active>
              <b-card class="agendadosHoje">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Atendido</th>
                      <th scope="col">Nome Paciente</th>
                      <th scope="col">Data do Atendimento</th>
                      <th scope="col">Horário do Atendimento</th>
                      <th scope="col">Iniciar Consulta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="agendamento in this.agendamentos"
                      :key="agendamento.uuid"
                    >
                      <td v-if="agendamento.atendido === 1">
                        <b-icon-check2
                          class="h3"
                          variant="success"
                        ></b-icon-check2>
                      </td>
                      <td v-else>
                        <b-icon-x class="h3"></b-icon-x>
                      </td>
                      <td>{{ agendamento.nomePaciente }}</td>
                      <td>{{ agendamento.data }}</td>
                      <td>{{ agendamento.horario }}</td>
                      <td>
                        <b-button
                          variant="warning"
                          pill
                          size="sm"
                          @click="
                            inicioConsulta(
                              agendamento.idPaciente,
                              agendamento.uuid,
                              agendamento.pacienteUuid,
                              agendamento.procedimento,
                              agendamento.atendido
                            )
                          "
                        >
                          Consultar Paciente
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-2 mb-2">
                  <div>
                    <b-button
                      pill
                      variant="primary"
                      class="mr-2"
                      @click="proximaPageAgHoje"
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
                      @click="anteriorPageAgHoje"
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
              </b-card>
            </b-tab>
            <b-tab title="Consulta">
              <b-card class="agendadosHoje">
                <div class="dadosPaciente">
                  <div class="mb-2">
                    <b-avatar
                      size="3rem"
                      variant="primary"
                      :text="abreviaNome"
                    ></b-avatar>
                  </div>
                  <div>
                    <p>
                      Nome do Paciente :
                      <b-input
                        class="text-primary"
                        v-model="nomePaciente"
                        disabled
                      ></b-input>
                    </p>
                  </div>
                  <div>
                    <p>
                      Data de Nascimento:
                      <b-input
                        class="text-primary"
                        disabled
                        v-model="dataPaciente"
                      ></b-input>
                    </p>
                  </div>
                  <div>
                    <p>
                      Procedimento:
                      <b-input
                        class="text-primary"
                        disabled
                        v-model="procedimentoConsulta"
                      ></b-input>
                    </p>
                  </div>
                </div>
              </b-card>
            </b-tab>
            <b-tab title="Pesquisar">
              <div class="jumb">
                <b-jumbotron id="tabelaPac">
                  <div class="flex mb-4">
                    <div class="mr-3">
                      <label>Data Inicial</label>
                      <input
                        type="date"
                        size="sm"
                        class="form-control col-sm-12"
                        v-model="dataInicial"
                      />
                    </div>
                    <div>
                      <label>Data Final</label>
                      <input
                        type="date"
                        class="form-control col-sm-12"
                        v-model="dataFinal"
                      />
                    </div>
                    <div class="ml-4">
                      <label>Procedimento</label>

                      <b-form-select
                        size="sm"
                        v-model="typePesquisa"
                        :options="this.Options"
                        @change="alteraProcedimento"
                      ></b-form-select>
                    </div>
                    <div class="ml-2">
                      <b-button @click="listConsulta" block variant="primary"
                        >Pesquisar</b-button
                      >
                    </div>
                  </div>

                  <div>
                    <label>Paciente</label>
                    <b-form-select
                      size="sm"
                      @change="pacienteSelectPesquisa"
                      v-model="selectPesquisa"
                      :options="this.ListaPaciente"
                    ></b-form-select>
                  </div>
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Data Cadastro</th>
                        <th scope="col">Visualizar</th>
                        <th scope="col">Imprimir</th>
                        <th scope="col">Excluir</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="lista in ListaConsulta" :key="lista.uuid">
                        <b-form-checkbox
                          v-model="selectVisualizar"
                          v-show="false"
                          :value="lista.uuid"
                        ></b-form-checkbox>
                        <th scope="row">{{ ListaConsulta.titulo }}</th>
                        <td>{{ retornaData(lista.data) }}</td>
                        <td>
                          <b-button
                            pill
                            variant="warning"
                            v-if="selectVisualizar === lista.uuid"
                            @click="visualizar(lista.uuid)"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-search class="mr-3"></b-icon-search
                            >Visualizar
                          </b-button>
                          <b-button
                            pill
                            v-else
                            variant="primary"
                            @click="visualizar(lista.uuid)"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-search class="mr-3"></b-icon-search
                            >Visualizar
                          </b-button>
                        </td>
                        <td>
                          <b-button
                            pill
                            variant="primary"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-file-earmark-text
                              class="mr-3"
                            ></b-icon-file-earmark-text
                            >Imprimir
                          </b-button>
                        </td>
                        <td>
                          <b-button
                            pill
                            @click="delet(lista.uuid)"
                            variant="primary"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-trash-fill class="mr-3"></b-icon-trash-fill
                            >Excluir
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="mt-2 mb-2">
                    <div>
                      <b-button
                        pill
                        variant="primary"
                        class="mr-2"
                        @click="proximaPagePesquisa"
                        v-if="pagePesquisa < totalPagePesquisa"
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
                        <b-badge variant="primary">{{
                          totalPagePesquisa
                        }}</b-badge>
                      </label>
                      <label class="ml-4">
                        Página Atual
                        <b-badge variant="primary">{{ pagePesquisa }}</b-badge>
                      </label>
                      <b-button
                        pill
                        variant="primary"
                        @click="anteriorPagePesquisa"
                        v-if="pagePesquisa > 1"
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
                </b-jumbotron>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <div v-if="tabIndexConsulta === 1 || tabIndexConsulta === 2">
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Prescrição para Óculos" active>
              <b-card class="prescricao">
                <PrescricaoOculos :PrescricaoProps="this.prescricaoOculos" />
              </b-card>
            </b-tab>
            <b-tab title="Prescrição para Lente de Contato">
              <b-card class="prescricao">
                <PrescricaoLente :PrescricaoLenteProps="this.prescricaoLente" />
              </b-card>
            </b-tab>
            <b-tab title="Laudo">
              <b-card class="prescricao">
                <div>
                  <b-card-group deck class="mb-3">
                    <b-card header-tag="header" footer-tag="footer">
                      <template #header>
                        <h6 class="mb-0">OLHO DIREITO</h6>
                      </template>
                      <label for="">LONGE: S/C = </label>
                      <b-input
                        type="text"
                        name=""
                        v-model="laudo.od_longe_sc"
                        size="sm"
                      /><br />
                      <label for="">LONGE: C/C = </label
                      ><b-input
                        type="text"
                        name=""
                        size="sm"
                        v-model="laudo.od_longe_cc"
                      /><br />
                      <label for="">PERTO: S/C = </label
                      ><b-input
                        type="text"
                        name=""
                        v-model="laudo.od_perto_sc"
                        size="sm"
                      /><br />
                      <label for="">PERTO: C/C = </label
                      ><b-input
                        type="text"
                        name=""
                        v-model="laudo.od_perto_cc"
                        size="sm"
                      />
                    </b-card>

                    <b-card header-tag="header" footer-tag="footer">
                      <template #header>
                        <h6 class="mb-0">OLHO ESQUERDO</h6>
                      </template>

                      <label for="">LONGE: S/C = </label>
                      <b-input
                        type="text"
                        name=""
                        v-model="laudo.oe_longe_sc"
                        size="sm"
                      /><br />
                      <label for="">LONGE: C/C = </label
                      ><b-input
                        type="text"
                        name=""
                        v-model="laudo.oe_longe_cc"
                        size="sm"
                      /><br />
                      <label for="">PERTO: S/C = </label
                      ><b-input
                        type="text"
                        name=""
                        v-model="laudo.oe_perto_sc"
                        size="sm"
                      /><br />
                      <label for="">PERTO: C/C = </label
                      ><b-input
                        type="text"
                        name=""
                        v-model="laudo.oe_perto_cc"
                        size="sm"
                      />
                    </b-card>
                  </b-card-group>
                  <div class="mt-2 mb-3 text-center">
                    <b-button pill variant="primary" @click="saveLaudo"
                      >Salvar Laudo</b-button
                    >
                  </div>
                </div>

                <b-button variant="primary" block pill @click="gerarLaudo">
                  Gerar Laudo
                </b-button>
              </b-card>
            </b-tab>
            <b-tab title="Atestado">
              <b-card class="prescricao">
                <b-button variant="primary" block pill @click="imprimirAtestado"
                  >Gerar Atestado</b-button
                >
              </b-card>
            </b-tab>
            <b-tab title="Declaração">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Encaminhamento">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Ficha Clínica">
              <b-card class="fichaClinica">
                <Accordion
                  :fichaClinicaProps="this.fichaClinica"
                  :Visualizar="this.VisualizarBool"
                  :uuidFichaProps="this.uuidFicha"
                  :editarProps="this.editar"
                  :iniciarConsultaProps="this.iniciarConsulta"
                  @mudarEditar="mudarEditar"
                  @finalizado="limparUser"
                />
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div v-if="tabIndexConsulta === 0">
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Pesquisar Agendamentos" active>
              <b-card class="agendadosHoje">
                <div class="flex mb-4">
                  <div class="mr-3">
                    <label>Data Inicial</label>
                    <input
                      type="date"
                      size="sm"
                      class="form-control col-sm-12"
                      v-model="dataInicialAg"
                    />
                  </div>
                  <div>
                    <label>Data Final</label>
                    <input
                      type="date"
                      class="form-control col-sm-12"
                      v-model="dataFinalAg"
                    />
                  </div>

                  <div class="ml-2">
                    <b-button @click="listAgendamento" block variant="primary"
                      >Pesquisar</b-button
                    >
                  </div>
                </div>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Nome Paciente</th>
                      <th scope="col">Data do Atendimento</th>
                      <th scope="col">Horário do Atendimento</th>
                      <th scope="col">Iniciar Consulta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="agendamento in this.agendamentosData"
                      :key="agendamento.uuid"
                    >
                      <td>{{ agendamento.nomePaciente }}</td>
                      <td>{{ agendamento.data }}</td>
                      <td>{{ agendamento.horario }}</td>
                      <td>
                        <b-button
                          variant="warning"
                          pill
                          size="sm"
                          @click="
                            inicioConsulta(
                              agendamento.idPaciente,
                              agendamento.uuid,
                              agendamento.pacienteUuid,
                              agendamento.procedimento
                            )
                          "
                        >
                          Consultar Paciente
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-2 mb-2">
                  <div>
                    <b-button
                      pill
                      variant="primary"
                      class="mr-2"
                      @click="proximaPageAg"
                      v-if="pageAg < totalPageAg"
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
                      <b-badge variant="primary">{{ totalPageAg }}</b-badge>
                    </label>
                    <label class="ml-4">
                      Página Atual
                      <b-badge variant="primary">{{ pageAg }}</b-badge>
                    </label>
                    <b-button
                      pill
                      variant="primary"
                      @click="anteriorPageAg"
                      v-if="pageAg > 1"
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
              </b-card>
            </b-tab>
            <b-tab title="Pesquisar Consultas Realizadas">
              <b-card class="prescricao agendadosHoje">
                <div class="flex mb-4">
                  <div class="mr-3">
                    <label>Data Inicial</label>
                    <input
                      type="date"
                      size="sm"
                      class="form-control col-sm-12"
                      v-model="dataInicialAgFinalizado"
                    />
                  </div>
                  <div>
                    <label>Data Final</label>
                    <input
                      type="date"
                      class="form-control col-sm-12"
                      v-model="dataFinalAgFinalizado"
                    />
                  </div>

                  <div class="ml-2">
                    <b-button
                      @click="listAgendamentoRealizado"
                      block
                      variant="primary"
                      >Pesquisar</b-button
                    >
                  </div>
                </div>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Nome Paciente</th>
                      <th scope="col">Data do Atendimento</th>
                      <th scope="col">Horário do Atendimento</th>
                      <th scope="col">Iniciar Consulta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="agendamento in this.agendamentosDataFinalizado"
                      :key="agendamento.uuid"
                    >
                      <td>{{ agendamento.nomePaciente }}</td>
                      <td>{{ agendamento.data }}</td>
                      <td>{{ agendamento.horario }}</td>
                      <td>
                        <b-button variant="primary" pill size="sm">
                          Visualizar
                        </b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-2 mb-2">
                  <div>
                    <b-button
                      pill
                      variant="primary"
                      class="mr-2"
                      @click="proximaPageFinalizado"
                      v-if="pageFinalizado < totalPageFinalizado"
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
                      <b-badge variant="primary">{{
                        totalPageFinalizado
                      }}</b-badge>
                    </label>
                    <label class="ml-4">
                      Página Atual
                      <b-badge variant="primary">{{ pageFinalizado }}</b-badge>
                    </label>
                    <b-button
                      pill
                      variant="primary"
                      @click="anteriorPageFinalizado"
                      v-if="pageFinalizado > 1"
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
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Accordion from "./Accordion";
import PrescricaoOculos from "./PrescricaoOculos";
import PrescricaoLente from "./PrescricaoLente";
//import Atestado from "./Atestado";
import Editor from "../editor_text/editor";
import { mapActions, mapState } from "vuex";
import FichaClinicaService from "../../services/fichaClinica";
//import ServicePrescricaoUltEx from "../../services/prescricaoUltEx";
import PrescricaoOculosService from "../../services/prescricaoOculos";
import PacienteService from "../../services/paciente";
import PrescricaoLenteService from "../../services/prescicaoLente";
import Pesquisa from "../../services/pesquisaConsulta";
import AgendaService from "../../services/agenda";
import ServicoConsulta from "../../services/consulta";

import LaudoService from "../../services/laudo";

//import { DateTime } from "luxon";
import moment from "moment";

export default {
  components: {
    Accordion,
    //Atestado,
    PrescricaoOculos,
    PrescricaoLente,
    Editor,
  },
  data() {
    return {
      iniciarConsulta: false,
      editar: false,
      uuidFicha: "",
      nomePaciente: "",
      dataPaciente: "",
      abreviaNome: "",
      selectVisualizar: "",
      color: "primary",
      dataInicialAg: "",
      dataFinalAg: "",
      pagePesquisa: 1,
      totalPagePesquisa: 1,
      dataInicialAgFinalizado: "",
      dataFinalAgFinalizado: "",
      agendamentos: [],
      procedimentoConsulta: "",
      agendamentosDataFinalizado: [],
      agendamentosData: [],
      select: null,
      prescricaoOculos: {},
      prescricaoLente: {},
      fichaClinica: {},
      selectPesquisa: null,
      tabIndexConsulta: 0,
      ListaPaciente: [],
      ListaConsulta: {},
      typePesquisa: {},
      page: 1,
      totalPage: 1,
      pageAg: 1,
      totalPageAg: 1,
      pageFinalizado: 1,
      totalPageFinalizado: 1,
      dadosConsulta: {
        idPaciente: 0,
        data: "",
        titulo: "Laudo",
      },
      Options: [
        { text: "Prescrição Lente", value: "prescricao_lente" },
        { text: "Prescrição Óculos", value: "prescricao_oculos" },
        { text: "Laudo", value: "laudo" },
        { text: "Atestado", value: "atestado" },
        { text: "Encaminhamento", value: "encaminhamento" },
        { text: "Ficha Clínica", value: "ficha_clinica" },
      ],
      VisualizarConsulta: [],
      VisualizarBool: false,
      tabIndex: 0,
      dataInicial: "",
      dataFinal: "",
      uuidPaciente: "",
      laudo: {
        uuid: "",
        idConsulta:"",
        data: moment().format("YYYY-MM-DD"),
        idPaciente: "",
        od_perto_sc: "",
        od_perto_cc: "",
        od_longe_sc: "",
        od_longe_cc: "",
        oe_perto_sc: "",
        oe_perto_cc: "",
        oe_longe_sc: "",
        oe_longe_cc: "",
      },
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
  computed: {
    ...mapState({
      anamnese: (state) => state.anamnese,
      idPaciente: (state) => state.pacienteSelected,
    }),
  },
  methods: {
    ...mapActions(["pacienteSelected"]),

    mudarEditar() {
      this.editar = false;
    },

    imprimirAtestado() {
      if (this.uuidPaciente) {
        window.open(
          `/Impressao/atestado/${this.uuidPaciente}`,
          "_blank",
          "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=1000, height=1000"
        );
      } else {
        this.showAlert("info", "Por favor selecione o Paciente");
      }
    },

    gerarLaudo() {
      if (this.uuidPaciente) {
        window.open(
          `/Impressao/laudo/${this.uuidPaciente}`,
          "_blank",
          "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=1000, height=1000"
        );
      } else {
        this.showAlert("info", "Por favor selecione o Paciente");
      }
    },
    anteriorPageAg() {
      this.pageAg = this.pageAg - 1;
      AgendaService.readDateRelatorioPaginationNavigation(
        this.dataInicialAg,
        this.dataFinalAg,
        this.pageAg
      ).then((result) => {
        this.agendamentosData = result.data.agendamentos.result;
        this.agendamentosData.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentos.sort(this.compararHora);
      });
    },

    proximaPageAg() {
      this.pageAg = this.pageAg + 1;
      AgendaService.readDateRelatorioPaginationNavigation(
        this.dataInicialAg,
        this.dataFinalAg,
        this.pageAg
      ).then((result) => {
        this.agendamentosData = result.data.agendamentos.result;
        this.agendamentosData.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentos.sort(this.compararHora);
      });
    },

    proximaPageAgHoje() {
      this.page = this.page + 1;
      AgendaService.readDateInnerPaginationNavigation(
        moment().format("YYYY-MM-DD"),
        this.page
      ).then((result) => {
        this.agendamentos = result.data.agendamentos.result;
        this.agendamentos.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentos.sort(this.compararHora);
      });
    },

    proximaPageFinalizado() {
      this.pageFinalizado = this.pageFinalizado + 1;
      this.agendamentosDataFinalizado = [];
      AgendaService.readDateAgendamentoFinalizadoPaginationNavigation(
        this.dataInicialAgFinalizado,
        this.dataFinalAgFinalizado,
        this.pageFinalizado
      ).then((result) => {
        console.log(result);
        this.agendamentosDataFinalizado = result.data.agendamentos.result;
        this.agendamentosDataFinalizado.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
      });
    },

    anteriorPageFinalizado() {
      this.pageFinalizado = this.pageFinalizado - 1;
      this.agendamentosDataFinalizado = [];
      AgendaService.readDateAgendamentoFinalizadoPaginationNavigation(
        this.dataInicialAgFinalizado,
        this.dataFinalAgFinalizado,
        this.pageFinalizado
      ).then((result) => {
        console.log(result);
        this.agendamentosDataFinalizado = result.data.agendamentos.result;
        this.agendamentosDataFinalizado.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
      });
    },

    anteriorPageAgHoje() {
      this.page = this.page - 1;
      AgendaService.readDateInnerPaginationNavigation(
        moment().format("YYYY-MM-DD"),
        this.page
      ).then((result) => {
        this.agendamentos = result.data.agendamentos.result;
        this.agendamentos.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        this.agendamentos.sort(this.compararHora);
      });
    },

    listAgendamento() {
      AgendaService.readDateRelatorioPagination(
        this.dataInicialAg,
        this.dataFinalAg
      ).then((result) => {
        this.agendamentosData = result.data.agendamentos.result;
        this.totalPageAg = Math.ceil(
          result.data.agendamentos.total[0].count / 5
        );
        console.log(Math.ceil(result.data.agendamentos.total[0].count / 5));
        this.agendamentosData.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        if (this.dataInicialAg === this.dataFinalAg) {
          this.agendamentosData.sort(this.compararHora);
        } else {
          this.agendamentosData.sort(this.compararData);
        }
      });
    },

    listAgendamentoRealizado() {
      this.totalPageFinalizado = 1;
      this.pageFinalizado = 1;
      this.agendamentosDataFinalizado = [];
      AgendaService.readDateAgendamentoFinalizadoPagination(
        this.dataInicialAgFinalizado,
        this.dataFinalAgFinalizado
      ).then((result) => {
        console.log(result);
        this.agendamentosDataFinalizado = result.data.agendamentos.result;
        this.totalPageFinalizado = Math.ceil(
          result.data.agendamentos.total[0].count / 5
        );
        console.log(Math.ceil(result.data.agendamentos.total[0].count / 5));
        this.agendamentosDataFinalizado.map((el) => {
          el.data = moment(el.data).format("DD/MM/YYYY");
        });
        if (this.dataInicialAgFinalizado === this.dataFinalAgFinalizado) {
          this.agendamentosDataFinalizado.sort(this.compararHora);
        } else {
          this.agendamentosDataFinalizado.sort(this.compararData);
        }
      });
    },

    inicioConsulta(
      idPaciente,
      uuidAgendamento,
      pacienteUuid,
      procedimento,
      atendido
    ) {
      console.log(idPaciente);
      if (atendido === 1) {
        this.showAlert("info", "Paciente já foi Atendido");
      } else {
        this.$store.commit("PACIENTE_SELECTED", idPaciente);
        this.$store.commit("UUID_AGENDAMENTO", uuidAgendamento);
        this.procedimentoConsulta = procedimento;
        PacienteService.read(pacienteUuid).then((result) => {
          this.uuidPaciente = pacienteUuid;
          this.nomePaciente = result.data.paciente.nomePaciente;
          this.dataPaciente = moment(
            result.data.paciente.dataNascimento
          ).format("DD/MM/YYYY");
          this.abreviaNome = this.nomePaciente[0];
        });
        this.tabIndexConsulta = 1;
        this.showAlert("success", "Pronto para Iniciar consulta");
      }
    },

    compararHora(a, b) {
      console.table("entroo");
      return parseInt(a.horario) - parseInt(b.horario);
    },

    compararData(a, b) {
      console.table("entroo");
      return parseInt(a.data) - parseInt(b.data);
    },

    loadAgendamentos() {
      this.page = 1;
      this.totalPage = 1;
      AgendaService.readDateInnerPagination(moment().format("YYYY-MM-DD")).then(
        (result) => {
          this.agendamentos = result.data.agendamentos.result;
          //this.totalPage = result.data.agendamentos.total[0].count
          this.totalPage = Math.ceil(
            result.data.agendamentos.total[0].count / 5
          );
          console.log(result.data.agendamentos.total[0].count);
          this.agendamentos.map((el) => {
            el.data = moment(el.data).format("DD/MM/YYYY");
          });
        }
      );
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

    alteraProcedimento() {
      this.ListaConsulta = {};
    },

    retornaTipoConsulta() {
      if (this.typePesquisa === "prescricao_lente") {
        return "Prescrição Lente";
      } else if (this.typePesquisa === "prescricao_oculos") {
        return "Prescrição Óculos";
      } else if (this.typePesquisa === "ficha_clinica") {
        return "Ficha Clínica";
      } else if (this.typePesquisa === "laudo") {
        return "Laudo";
      } else if (this.typePesquisa === "atestado") {
        return "Atestado";
      } else if (this.typePesquisa === "encaminhamento") {
        return "Encaminhamento";
      }
    },

    limparUser() {
      this.nomePaciente = "";
      this.dataPaciente = "";
      this.abreviaNome = "";
      this.procedimentoConsulta = "";
      this.$store.commit("PACIENTE_SELECTED", -1);
      this.$store.commit("UUID_AGENDAMENTO", "");
    },
    atualizaPesquisa() {
      Pesquisa(this.typePesquisa, {
        idPaciente: this.idPaciente,
        dataInicial: this.dataInicial,
        dataFinal: this.dataFinal,
      }).then((result) => {
        this.ListaConsulta = result.data.result;
        this.ListaConsulta.titulo = this.retornaTipoConsulta();
      });
    },

    proximaPagePesquisa() {
      this.pagePesquisa = this.pagePesquisa + 1;
      if(this.typePesquisa === "ficha_clinica"){
        FichaClinicaService.readPagination(
          this.idPaciente,
          this.dataInicial,
          this.dataFinal,
          this.pagePesquisa
        ).then((result) => {
          this.ListaConsulta = result.data.result.result;
          this.ListaConsulta.titulo = this.retornaTipoConsulta();
        });
      }else if(this.typePesquisa === "laudo"){
        LaudoService.read(this.dataInicial, this.dataFinal, this.idPaciente, this.pagePesquisa).then(result =>{
          console.log(result)
          this.ListaConsulta = result.data.result.result;
          this.ListaConsulta.titulo = this.retornaTipoConsulta();

        })
         
      }
    },

    anteriorPagePesquisa() {

      this.pagePesquisa = this.pagePesquisa - 1;
      if(this.typePesquisa === "ficha_clinica"){
        FichaClinicaService.readPagination(
          this.idPaciente,
          this.dataInicial,
          this.dataFinal,
          this.pagePesquisa
        ).then((result) => {
          this.ListaConsulta = result.data.result.result;
          this.ListaConsulta.titulo = this.retornaTipoConsulta();
        });
      }else if(this.typePesquisa === "laudo"){
        LaudoService.read(this.dataInicial, this.dataFinal, this.idPaciente, this.pagePesquisa).then(result =>{
          console.log(result)
          this.ListaConsulta = result.data.result.result;
          this.ListaConsulta.titulo = this.retornaTipoConsulta();

        })
         
      }
    },

    async listConsulta() {
      this.ListaConsulta = {};
      if (this.idPaciente != -1) {
        await Pesquisa(this.typePesquisa, {
          idPaciente: this.idPaciente,
          dataInicial: this.dataInicial,
          dataFinal: this.dataFinal,
        }).then((result) => {
          console.log(result.data.result.result);
          if (Object.keys(result.data.result).length === 0) {
            this.showAlert("info", "Nenhuma Informação Encontrada");
          } else {
            this.totalPagePesquisa = Math.ceil(
              result.data.result.total[0].count / 5
            );
            this.ListaConsulta = result.data.result.result;
            console.log(this.ListaConsulta);
            this.ListaConsulta.titulo = this.retornaTipoConsulta();
          }
        });
      } else {
        this.showAlert("info", "Selecione um Paciente !");
      }
    },

    retornaData(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    pacienteSelectPesquisa() {
      this.$store.commit("PACIENTE_SELECTED", this.selectPesquisa);
      this.ListaConsulta = {};
    },

    pacienteSelect() {
      this.$store.commit("PACIENTE_SELECTED", this.select);
    },

    visualizar(uuid) {
      this.selectVisualizar = uuid;
      if (this.typePesquisa === "prescricao_oculos") {
        PrescricaoOculosService.read(uuid).then((result) => {
          console.log(result);
          this.prescricaoOculos = result.data.prescricao;
          this.tabIndex = 0;
          this.editar = true;
        });
      } else if (this.typePesquisa === "prescricao_lente") {
        PrescricaoLenteService.read(uuid).then((result) => {
          this.prescricaoLente = result.data.prescricao;
          console.log(result.data.prescricao);
          this.tabIndex = 1;
          this.editar = true;
        });
      } else if (this.typePesquisa === "ficha_clinica") {
        FichaClinicaService.read(uuid).then((result) => {
          this.fichaClinica = result.data.ficha.json_fichaClinica;
          console.log(this.fichaClinica);
          this.uuidFicha = result.data.ficha.uuid;
          this.$store.commit("UUID_FICHACLINICA", result.data.ficha.uuid);
          console.log("ooooooooooooooooooo");
          this.tabIndex = 6;
          this.editar = true;
        });
      }

      this.VisualizarBool = false;
    },

    delet(uuid) {
      if (this.typePesquisa === "prescricao_lente") {
        PrescricaoLenteService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Deletado com Sucesso");
              this.listConsulta();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao deletar registro");
          });
      } else if (this.typePesquisa === "prescricao_oculos") {
        PrescricaoOculosService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Deletado com Sucesso");
              this.listConsulta();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao deletar registro");
          });
      } else if (this.typePesquisa === "ficha_clinica") {
        FichaClinicaService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Deletado com Sucesso");
              this.listConsulta();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao deletar registro");
          });
      } else if (this.typePesquisa === "laudo") {
        this.ListaConsulta.titulo = "Laudo";
      } else if (this.typePesquisa === "atestado") {
        this.ListaConsulta.titulo = "Atestado";
      } else if (this.typePesquisa === "encaminhamento") {
        this.ListaConsulta.titulo = "Encaminhamento";
      }
    },

    Paciente(text, value, uuid) {
      return {
        text: text,
        value: value,
        uuid: uuid,
      };
    },

    list() {
      PacienteService.readAll()
        .then((response) => {
          console.log(response);
          response.data.result.map((paciente) => {
            this.ListaPaciente.push(
              this.Paciente(
                paciente.nomePaciente,
                paciente.idPaciente,
                paciente.uuid
              )
            );
          });
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um problema ao listar pacientes");
        });
    },

    readLaudo() {
      LaudoService.read();
    },
    async saveLaudo() {
      let consulta;
      try {
        this.dadosConsulta.idPaciente = this.idPaciente;
        this.dadosConsulta.data = moment().format("YYYY-MM-DD");
        this.dadosConsulta.titulo = "Laudo";
        consulta = await ServicoConsulta.save(this.dadosConsulta);
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro ao Salvar consulta");
      }


      try {
        this.laudo.data = moment().format("YYYY-MM-DD");
        this.laudo.idPaciente = this.idPaciente;
        this.laudo.idConsulta = consulta.data.result.idConsulta[0]
        await LaudoService.save(this.laudo);
        this.showAlert("success", "Laudo Registrado com Sucesso");
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro ao Salvar Laudo");
      }
    },
  },
  created() {
    this.loadAgendamentos();
    this.list();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.flex {
  display: flex;
  align-items: flex-end;
}

.avatar {
  display: flex;
}

.consulta {
  margin-top: 100px;
  font-family: "Monda", sans-serif;
}
.check {
  display: flex;
  flex-wrap: wrap;
}

#tabelaPac {
  overflow: auto;
}
.dadosPaciente {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (max-width: 700px) {
  #tabelaPac button {
    height: 40px;
    font-size: 10px;
  }
  .dadosPaciente {
    overflow-y: auto;
    width: 800px;
  }
  .agendadosHoje {
    overflow-y: auto;
  }
  .agendadosHoje table {
    width: 600px;
  }
}
.divFlex {
  border: 1px solid black;
}
</style>