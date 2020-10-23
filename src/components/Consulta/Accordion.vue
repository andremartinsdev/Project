<template>
  <div role="tablist">
    <b-input v-model="idConsulta" hidden></b-input>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >Anamnese</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <Anamnese
          @Visualizar="visual"
          :propsAnamnese2="this.anamneseProps"
          :Visualizar="this.Visualizar"
          :LimparAnamnese="this.Limpar"
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
        <PrescricaoUltimoExame :Visualizar="this.Visualizar" />
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info"
          >Acuidade Visual</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <AcuidadeVisual />
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
          <Cerametria />
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
          <Biomicro />
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
          <Oftalmoscopia />
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
          <Tonometria />
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
          <ReflexosPulpilares />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-9 variant="info">PPC</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Ppc />
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
          <AvMotora />
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
          <ReservasFusionais />
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
          <AmpliAcomodacao />
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
          <FlexAcomodacao />
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
          <Retinoscopia />
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
          <Forometria />
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
          <Subjetivo />
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
          <Afinamento />
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
          <TesteAmbulatorial />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-19 variant="info">Adição</b-button>
      </b-card-header>
      <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Adicao />
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
          <RxFinal />
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-5">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-21 variant="info">DX</b-button>
      </b-card-header>
      <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Dx />
        </b-card-body>
      </b-collapse>
    </b-card>

    <footer class="py-2 text-white-50 mb-4" id="sticky-footer">
      <div class="container text-center">
        <b-button
          v-if="inicioConsulta == false"
          pill
          @click="salvarConsulta"
          variant="warning"
          class="mr-2"
        >
          <b-icon-play-fill class="mr-3"></b-icon-play-fill>Iniciar Consulta
        </b-button>
        <b-button
          v-else
          pill
          @click="mudarInicio"
          variant="success"
          class="mr-2"
        >
          <b-icon-check class="mr-3"></b-icon-check>Finalizar Consulta
        </b-button>
        <b-button @click="limpar" pill variant="light" class="mr-2">
          <b-icon-x class="mr-3"></b-icon-x>Limpar
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

import ServicoAnamese from "../../services/anamnese";
import ServicoConsulta from "../../services/consulta";
import { DateTime } from "luxon";

//import axios from "axios";
import { mapState } from "vuex";

export default {
  props: {
    anamneseProps: {
      type: Array,
    },
    prescricaoProps: {
      type: Array,
    },
    Visualizar: {
      type: Boolean,
    },
  },

  data() {
    return {
      Limpar: false,
      consulta: {},
      inicioConsulta: false,
    };
  },
  computed: {
    ...mapState({
      anamnese: (state) => state.anamnese,
      idConsulta: (state) => state.idConsulta,
      idPaciente: (state) => state.pacienteSelected,
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
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },
    mudarInicio() {
      this.inicioConsulta = false;
      this.showAlert("success", "Consulta Finalizada com Sucesso");
    },
    visual() {
      this.Visualizar = !this.Visualizar;
    },

    limpar() {
      this.Limpar = true;
      this.$store.commit("ANAMNESE", "");

      setTimeout(() => {
        this.Limpar = false;
      }, 3000);
    },
    salvarConsulta() {
      
      this.consulta.UUIDCLINICA = localStorage.getItem("UUIDCLINICA");
      this.consulta.IDPACIENTE = this.idPaciente;
      this.consulta.IDCLINICA = localStorage.getItem("IDCLINICA");
      this.consulta.DATA = `${DateTime.local().c.year}-${DateTime.local().c.month}-${DateTime.local().c.day}`;
      if(this.idPaciente === -1){
        this.showAlert("info", "Selecione o Paciente");
      }else{
        ServicoConsulta.save(this.consulta).then((result) => {
        this.showAlert("success", "Tudo Certo Para começar a Consulta");
        this.$store.commit("ID_CONSULTA", result.data.retorno[0]);
      });
      this.inicioConsulta = true;
      }
      
    },

    save() {
      if (Object.keys(this.anamnese).length != 0) {
        if (this.idFichaClinica === -1) {
          ServicoAnamese.save(this.anamnese).then(() => {
            console.log(this.anamnese);
            this.showAlert("success", "Salvo com Sucesso");
          });
        } else {
          ServicoAnamese.edit(this.anamnese, this.idFichaClinica)
            .then(() => {
              this.showAlert("success", "Editado");
            })
            .catch((err) => {
              this.showAlert("error", "Erro ao Editar" + err);
            });
        }
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