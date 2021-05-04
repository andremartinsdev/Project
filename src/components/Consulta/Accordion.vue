<template>
  <div role="tablist">
    <b-input hidden></b-input>
    <b-button @click="createPDF">olaaa</b-button>
    <b-input v-model="uuidFichaProps" hidden></b-input>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >Anamnese</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <Anamnese
          @Visualizar="visual"
          :propsAnamnese2="this.AnamneseData"
          :Visualizar="this.Visualizar"
          :LimparAnamnese="this.Limpar"
          :impressao="false"
        />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="light"
          >Prescrição do Último Exame</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <PrescricaoUltimoExame
          id="printMe"
          :Visualizar="this.Visualizar"
          :Limpar="this.Limpar"
          :prescricaoUltExProps="this.PrescricaoUltimoExameData"
          :impressao="false"
        />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info"
          >Acuidade Visual</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <AcuidadeVisual
          :Limpar="this.Limpar"
          :acuidadeProps="this.AcuidadeVisualData"
        />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="light"
          >Cerametria</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Cerametria
            :Limpar="this.Limpar"
            :cerametriaProps="this.CerametriaData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info"
          >Biomicroscopia</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Biomicro :Limpar="this.Limpar" :biomicroProps="this.BiomicroData" />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 variant="light"
          >Oftalmoscopia</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Oftalmoscopia
            :Limpar="this.Limpar"
            :oftalmoProps="this.OftalmoscopiaData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="info"
          >Tonometria</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Tonometria
            :Limpar="this.Limpar"
            :tonometriaProps="this.TonometriaData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-8 variant="light"
          >Reflexos Pupilares</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ReflexosPulpilares
            :Limpar="this.Limpar"
            :reflexosProps="this.ReflexosPulpilaresData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-9 variant="info">PPC</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Ppc :Limpar="this.Limpar" :ppcProps="this.PpcData" />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-10 variant="light"
          >Avaliação Motora</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <AvMotora :Limpar="this.Limpar" :avMotoraProps="this.AvMotoraData" />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-11 variant="info"
          >Reservas Fusionais</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ReservasFusionais
            :Limpar="this.Limpar"
            :reservasProps="this.ReservasFusionaisData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-12 variant="light"
          >Amplitude de Acomodação</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <AmpliAcomodacao
            :Limpar="this.Limpar"
            :amplitudeProps="this.AmpliAcomodacaoData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-13 variant="info"
          >Flexibilidade e Facilidade de Acomodação</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <FlexAcomodacao
            :Limpar="this.Limpar"
            :flexProps="this.FlexAcomodacaoData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-14 variant="light"
          >Retinoscopia Estática</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Retinoscopia
            :Limpar="this.Limpar"
            :retinoscopiaProps="this.RetinoscopiaData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-15 variant="info"
          >Forometria</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Forometria
            :Limpar="this.Limpar"
            :forometriaProps="this.ForometriaData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-16 variant="light"
          >Subjetivo</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Subjetivo
            :Limpar="this.Limpar"
            :subjetivoProps="this.SubjetivoData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-17 variant="info"
          >Afinamento</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Afinamento
            :Limpar="this.Limpar"
            :afinamentoProps="this.AfinamentoData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-18 variant="light"
          >Teste Ambulatorial</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <TesteAmbulatorial
            :Limpar="this.Limpar"
            :testeProps="this.TesteAmbulatorialData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-19 variant="info">Adição</b-button>
      </b-card-header>
      <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Adicao :Limpar="this.Limpar" :adicaoProps="this.AdicaoData" />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-20 variant="light"
          >Rx Final</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <RxFinal :Limpar="this.Limpar" :rxFinalProps="this.RxFinalData" />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-5">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-21 variant="info">DX</b-button>
      </b-card-header>
      <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Dx
            :Limpar="this.Limpar"
            @alteraLimpar="alterLimpar"
            :dxProps="this.DxData"
          />
        </b-card-body>
      </b-collapse>
    </b-card>

    <div>
      <b-modal id="modal-1" title="Data de Vencimento" @ok="finalizarConsulta">
        <label for="">Data de Vencimento da Consulta</label>
        <input type="date" v-model="dataVencimento" class="form-control" />
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
        </template>
      </b-modal>
    </div>

    <footer class="py-2 text-white-50 mb-4" id="sticky-footer">
      <div class="container text-center">
        <b-button
          v-show="editar"
          pill
          @click="updateFicha"
          variant="warning"
          class="mr-2"
        >
          <b-icon-check-circle class="mr-3"></b-icon-check-circle>Salvar
          Alterações
        </b-button>
        <b-button
          v-show="editar"
          pill
          @click="novo"
          variant="success"
          class="mr-2"
        >
          <b-icon-file-plus class="mr-3"></b-icon-file-plus>Novo
        </b-button>
        <b-button
          v-show="!editar"
          v-if="inicioConsulta == false"
          pill
          @click="iniciarConsulta"
          variant="warning"
          class="mr-2"
        >
          <b-icon-play-fill class="mr-3"></b-icon-play-fill>Iniciar Consulta
        </b-button>
        <b-button v-else pill variant="success" class="mr-2" v-b-modal.modal-1>
          <b-icon-check class="mr-3"></b-icon-check>Finalizar Consulta
        </b-button>
        <b-button
          @click="cancelar"
          v-if="inicioConsulta === true"
          pill
          variant="light"
          class="mr-2"
        >
          <b-icon-x class="mr-3"></b-icon-x>Cancelar
        </b-button>
        <b-button @click="limpar" pill variant="light" class="mr-2">
          <b-icon-arrow-counterclockwise
            class="mr-3"
          ></b-icon-arrow-counterclockwise
          >Limpar
        </b-button>

        <b-button
          size="sm"
          variant="outline-secondary"
          v-b-modal.modal-1
          @click="imprimir"
        >
          f
        </b-button>
      </div>
    </footer>
  </div>
</template>

<script>
import Anamnese from "./Anamnese";
import PrescricaoUltimoExame from "./PrescricaoUltExame";
import AcuidadeVisual from "./AcuidadeVisual";
import Cerametria from "./Cerametria";
import Biomicro from "./Biomicro";
import Oftalmoscopia from "./Oftalmoscopia";
import Tonometria from "./Tonometria";
import ReflexosPulpilares from "./ReflexosPulpilares";
import Ppc from "./Ppc";
import AvMotora from "./AvMotora";
import ReservasFusionais from "./ReservasFusionais";
import AmpliAcomodacao from "./AmpliDeAcomodacao";
import FlexAcomodacao from "./FlexAcomodacao";
import Retinoscopia from "./Retinoscopia";
import Forometria from "./Forometria";
import Subjetivo from "./Subjetivo";
import Afinamento from "./Afinamento";
import TesteAmbulatorial from "./TesteAmbulatorial";
import Adicao from "./Adicao";
import RxFinal from "./RxFinal";
import Dx from "./Dx";
//import ImpressaoAnamnese from '../Impressao/ImpressaoFicha'

//import ServicoPaciente from "../../services/paciente";
import ServicoConsulta from "../../services/consulta";
import AgendaService from "../../services/agenda";
import ServicoFichaClinica from "../../services/fichaClinica";
import ValidaObjectEmpty from "../../services/validaObjectEmpty";
import { DateTime } from "luxon";
import jsPDF from "jspdf";

//import axios from "axios";
import { mapState } from "vuex";

export default {
  props: {
    editarProps: {
      type: Boolean,
    },
    uuidFichaProps: {
      type: String,
    },
    fichaClinicaProps: {
      type: Object,
    },
    prescricaoProps: {
      type: Array,
    },
    Visualizar: {
      type: Boolean,
    },
    iniciarConsultaProps: {
      type: Boolean,
    },
  },
  watch: {
    iniciarConsultaProps() {
      this.iniciarConsulta();
    },
    editarProps() {
      this.editar = this.editarProps;
    },
    uuidFichaProps() {
      console.log(this.uuidFicha);
    },
    fichaClinicaProps() {
      this.testeProps = "andreeeeeee";
      //const json = this.fichaClinicaProps
      this.AnamneseData = this.fichaClinicaProps.anamnese;
      this.AcuidadeVisualData = this.fichaClinicaProps.acuidade;
      this.AfinamentoData = this.fichaClinicaProps.afinamento;
      this.AdicaoData = this.fichaClinicaProps.adicao;
      this.AmpliAcomodacaoData = this.fichaClinicaProps.amplitude;
      this.AvMotoraData = this.fichaClinicaProps.avMotora;
      this.BiomicroData = this.fichaClinicaProps.biomicro;
      this.CerametriaData = this.fichaClinicaProps.cerametria;
      this.DxData = this.fichaClinicaProps.dx;
      this.FlexAcomodacaoData = this.fichaClinicaProps.flexiDeAcomodacao;
      this.ForometriaData = this.fichaClinicaProps.forometria;
      this.OftalmoscopiaData = this.fichaClinicaProps.oftalmoscopia;
      this.PpcData = this.fichaClinicaProps.ppc;
      this.PrescricaoUltimoExameData = this.fichaClinicaProps.prescricaoUltimoExame;
      this.ReflexosPulpilaresData = this.fichaClinicaProps.reflexoPulpilar;
      this.ReservasFusionaisData = this.fichaClinicaProps.reservasFusionais;
      this.RetinoscopiaData = this.fichaClinicaProps.retinoscopia;
      this.RxFinalData = this.fichaClinicaProps.rxFinal;
      this.SubjetivoData = this.fichaClinicaProps.subjetivo;
      this.TesteAmbulatorialData = this.fichaClinicaProps.testeAmbulatorial;
      this.TonometriaData = this.fichaClinicaProps.tonometria;
    },
  },
  data() {
    return {
      idConsultaData: -1,
      dataVencimento: "",
      editar: false,
      Limpar: false,
      testeProps: "",
      consulta: {},
      inicioConsulta: false,
      dadosFicha: {},
      AnamneseData: {},
      PrescricaoUltimoExameData: {},
      AcuidadeVisualData: [],
      CerametriaData: {},
      BiomicroData: [],
      OftalmoscopiaData: [],
      TonometriaData: {},
      ReflexosPulpilaresData: {},
      PpcData: {},
      AvMotoraData: {},
      ReservasFusionaisData: {},
      AmpliAcomodacaoData: {},
      FlexAcomodacaoData: {},
      RetinoscopiaData: {},
      ForometriaData: {},
      SubjetivoData: {},
      AfinamentoData: {},
      TesteAmbulatorialData: {},
      AdicaoData: {},
      RxFinalData: {},
      DxData: {},
      dadosConsulta: {
        idPaciente: this.idPaciente,
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        titulo: "Ficha Clínica",
      },
    };
  },
  computed: {
    ...mapState({
      anamnese: (state) => state.anamnese,
      idConsulta: (state) => state.idConsulta,
      idPaciente: (state) => state.pacienteSelected,
      fichaClinica: (state) => state.fichaClinica,
      uuidAgendamento: (state) => state.uuidAgendamento,
      uuidFicha: (state) => state.uuidAgendamento,
    }),
  },
  components: {
    Anamnese,
    PrescricaoUltimoExame,
    AcuidadeVisual,
    Cerametria,
    Biomicro,
    Oftalmoscopia,
    Tonometria,
    ReflexosPulpilares,
    Ppc,
    AvMotora,
    ReservasFusionais,
    AmpliAcomodacao,
    FlexAcomodacao,
    Retinoscopia,
    Forometria,
    Subjetivo,
    Afinamento,
    TesteAmbulatorial,
    Adicao,
    RxFinal,
    Dx,
  },

  methods: {
    imprimir() {
      //window.print(<ImpressaoAnamnese/>)
      window.open(
        `/Impressao/${this.uuidFichaProps}`,
        "_blank",
        "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=1000, height=1000"
      );
    },
    createPDF() {
      let pdfName = "test";
      var doc = new jsPDF();
      var linha = 20;

      doc.text("Ficha Clínica", 105, 10, null, null, "center");



      //ANAMNESE
      if (Object.keys(this.AnamneseData).length > 0) {
        doc.setFontSize(12);
        doc.text("Anamnese", 20, linha + 2, null, null);
        delete this.AnamneseData.DATA;
        delete this.AnamneseData.IDPACIENTE;
        delete this.AnamneseData.IDCONSULTA;
        Object.keys(this.AnamneseData).forEach((item) => {
          linha += 8;

          //segundo parametro e altura, terceiro é largura, quarto espaço interno
          doc.setTextColor(100);
          doc.setFontSize(10);

          doc.text(item, 10, linha, null, null);
          var checkBox = new jsPDF.API.AcroFormCheckBox();
          checkBox.fieldName = "CheckBox1";
          checkBox.Rect = [45, linha - 5, 7, 7];
          doc.addField(checkBox);
        });
      }

      //PRECRIÇÃO ULT EXAME
      if (Object.keys(this.PrescricaoUltimoExameData).length > 0) {
        var linhaPrescricao = 15;
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text(
          "Prescrição do Último Exame",
          100,
          linhaPrescricao + 8,
          null,
          null
        );
        delete this.PrescricaoUltimoExameData.IDPACIENTE;
        delete this.PrescricaoUltimoExameData.IDCONSULTA;
        delete this.PrescricaoUltimoExameData.DATA;
        delete this.PrescricaoUltimoExameData.UUIDCLINICA;
        Object.keys(this.PrescricaoUltimoExameData).forEach((item) => {
          linhaPrescricao += 8;
          doc.setTextColor(100);
          doc.setFontSize(10);

          doc.text(
            `${this.convertNomeColuna(item)} : ${
              this.PrescricaoUltimoExameData[item]
            }`,
            100,
            linhaPrescricao + 8,
            null,
            null
          );
        });
      }

      if (Object.keys(this.AcuidadeVisualData.cc.olhoDireito).length > 0) {
        var linhaAcuidade = linha;
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text( "Acuidade Visual", 105,  linhaAcuidade + 20, null, null, "center");
        doc.text(
          "CC",
          30,
          linhaAcuidade + 29,
          null,
          null
        );
        doc.text(
          "Olho Direito",
          20,
          linhaAcuidade + 34,
          null,
          null
        );
        linhaAcuidade += 8
        Object.keys(this.AcuidadeVisualData.cc.olhoDireito).forEach((item) => {

          linhaAcuidade += 13;
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(
              `${item.toUpperCase()} : ${this.AcuidadeVisualData.cc.olhoDireito[item]}` 
            ,
            12,
            linhaAcuidade + 20,
            null,
            null
          );
        });

        Object.keys(this.AcuidadeVisualData.cc.olhoEsquerto).forEach((item) => {

          linhaAcuidade = linha;
          doc.setTextColor(100);
          doc.setFontSize(10);
          doc.text(
              `${item.toUpperCase()} : ${this.AcuidadeVisualData.cc.olhoDireito[item]}` 
            ,
            100,
            linhaAcuidade + 20,
            null,
            null
          );
          
        });

       
      }



      doc.save(pdfName + ".pdf");
    },


    convertNomeColuna(coluna) {
      if (coluna === "OD_ESFERICO") return "Olho Direito Esferico";
      if (coluna === "OD_CILINDRICO") return "Olho Direito Cilindrico";
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
    alterLimpar() {
      this.Limpar = false;
    },
    mudarInicio() {
      this.inicioConsulta = false;
      this.showAlert("success", "Consulta Finalizada com Sucesso");
    },
    visual() {
      this.Visualizar = !this.Visualizar;
    },

    cancelar() {
      //this.editar = false;
      this.inicioConsulta = false;
    },

    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },

    novo() {
      this.editar = false;
      this.limpar();
      this.$store.commit("PACIENTE_SELECTED", -1);
      this.$emit("mudarEditar", false);
    },

    limpar() {
      this.inicioConsulta = false;
      this.Limpar = true;
      this.$emit("finalizado");
    },

    dataAtual() {
      return `${DateTime.local().c.year}-${DateTime.local().c.month}-${
        DateTime.local().c.day
      }`;
    },

    finalizarConsulta() {
      AgendaService.updateIdConsultAtendidoDtVencimento(this.uuidAgendamento, {
        idConsulta: this.idConsultaData,
        atendido: true,
        dataVencimento: this.dataVencimento,
      }).then((result) => {
        console.log(result + "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeu");
      });
      const dados = {
        ...this.fichaClinica,
      };
      //const fichaClinica = JSON.stringify(this.fichaClinica);
      if (ValidaObjectEmpty(dados) === true) {
        ServicoFichaClinica.save(this.dadosFicha, this.fichaClinica)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Ficha Clínica Salva com Sucesso");
              this.limpar();
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao salvar Ficha");
          });
      } else {
        this.showAlert("info", "Preencha a Ficha Clínica");
      }
    },

    updateFicha() {
      const fichaClinica = JSON.stringify(this.fichaClinica);
      ServicoFichaClinica.update(fichaClinica, this.uuidFichaProps)
        .then((result) => {
          if (result.status === 201) {
            this.showAlert("success", "Ficha Clínica Editada com Sucesso");
            this.inicioConsulta = false;
          }
        })
        .catch(() => {
          this.showAlert("error", "Erro ao Editar Ficha");
        });
    },

    iniciarConsulta() {
      if (this.idPaciente === -1) {
        this.showAlert("error", "Selecione o Paciente");
      } else {
        this.dadosConsulta.idPaciente = this.idPaciente;
        ServicoConsulta.save(this.dadosConsulta)
          .then((result) => {
            if (result.status === 201) {
              this.dadosFicha = {
                idPaciente: this.idPaciente,
                data: this.dataAtual(),
                idConsulta: result.data.result.idConsulta[0],
              };
              this.idConsultaData = result.data.result.idConsulta[0];
              this.inicioConsulta = true;
              this.showAlert("success", "Consulta Iniciada");
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Iniciar Consulta");
          });
      }
    },
  },
};
</script>

<style >
.content {
  position: absolute;
  left: 25%;
  top: 50%;
}
#sticky-footer {
  left: 35px;
  flex-shrink: none;
  position: fixed;
  margin-left: 30%;
  margin-right: 25%;
  bottom: 0;
  margin-bottom: 4px;
  width: 35%;
  background: linear-gradient(0deg, #014779 0%, #0082c8 100%);
  border-radius: 55px;
  padding: 4;
  z-index: 1000;
}

@media (max-width: 700px) {
  #sticky-footer {
    position: unset;
    display: flex;
    width: 100%;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 10px;
    align-items: center;
  }
  #sticky-footer button {
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>