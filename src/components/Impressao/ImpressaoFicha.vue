<template>
  <div class="conteinerImpressao" >
     <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Exibir no Relatório</h3>

         <b-form-group>
              <b-form-checkbox-group
                id="checkbox2"
                :options="optionVisualizar"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
                stacked
                v-model="visualizarRelatorio"
              ></b-form-checkbox-group>
            </b-form-group>
      </div>
     
    </b-modal>
<div >
<h3 class="text-center p-3">Clínica AndréOpto <b-avatar class="ml-3" :src="logoBms"></b-avatar></h3>
    <h3 class="text-center p-3">Ficha Clinica</h3>
    <div class="anamneseImpressao">
      <div>
        <h1>{{acuidade}}</h1>
    <b-form-checkbox
      v-for="option in optionVisualizar" :key="option.value"
      :v-model=option.value
      name="checkbox-1"
      value="true"
    >
     {{option.text}}
    </b-form-checkbox>

  </div>
   <div >

        <h6 class="mt-2 ml-4">Anamnese</h6>
        <Anamnese :propsAnamnese2="this.anamnese" :impressao="true" />
      </div>
    </div>
      <b-button @click="objetoEmpty.acuidade = true">Ola</b-button>
    <div class="prescriUltExImpressao mt-4" v-if="objetoEmpty.acuidade">
      <h6 class="mt-2 ml-4 text-center" >Prescrição Ultimo Exame</h6>
      <div class="containerPrescriUlt" v-if="flag" v-show="visualizarRelatorio[0].prescriUltEx">
        <div class="w-100">
          <b-card header="Olho Direito" class="col-12" v-if="visualizarRelatorio[0].prescriUltEx">
            <label for="">ESFÉRICO: {{this.fichaClinica.prescricaoUltimoExame.OD_ESFERICO}}</label><br>
            <label for="">CILÍNDRICO: {{this.fichaClinica.prescricaoUltimoExame.OD_CILINDRICO}}</label><br>
            <label for="">EIXO: {{this.fichaClinica.prescricaoUltimoExame.OD_EIXO}}</label><br>
            <label for="">ADIÇÃO: {{this.fichaClinica.prescricaoUltimoExame.OD_ADICAO}}</label><br>
            <label for="">DNP: {{this.fichaClinica.prescricaoUltimoExame.OD_DNP}}</label><br>
            <label for="">ALT : {{this.fichaClinica.prescricaoUltimoExame.OD_ALT}}</label>
          </b-card>
        </div>
        <div class="w-100">
          <b-card header="Olho Esquerdo" class="col-12" v-if="visualizarRelatorio[0].prescriUltEx">
            <label for="">ESFÉRICO: {{this.fichaClinica.prescricaoUltimoExame.OE_ESFERICO}}</label><br>
            <label for="">CILÍNDRICO: {{this.fichaClinica.prescricaoUltimoExame.OE_CILINDRICO}}</label><br>
            <label for="">EIXO: {{this.fichaClinica.prescricaoUltimoExame.OE_EIXO}}</label><br>
            <label for="">ADIÇÃO: {{this.fichaClinica.prescricaoUltimoExame.OE_ADICAO}}</label><br>
            <label for="">DNP: {{this.fichaClinica.prescricaoUltimoExame.OE_DNP}}</label><br>
            <label for="">ALT : {{this.fichaClinica.prescricaoUltimoExame.OE_ALT}}</label>
          </b-card>
        </div>
      </div>
    </div>


    <div class="prescriUltExImpressao mt-4" v-if="objetoEmpty.acuidade === false">
      <h6 class="mt-2 ml-4 text-center">Acuidade</h6>
      <div class="containerPrescriUlt" v-if="flag" >
        <div class="w-100">
          <b-card header="S/C" class="col-12">
            <label for="">Olho Direito (VL) : {{this.fichaClinica.acuidade.sc.olhoDireito.vl }}</label><br>
            <label for="">Olho Direito (VP) : {{this.fichaClinica.acuidade.sc.olhoDireito.vp}}</label><br>
            <label for="">Olho Direito: (PH) : {{this.fichaClinica.acuidade.sc.olhoDireito.ph}}</label><br>
            <label for="">Olho Esquerdo (VL) : {{this.fichaClinica.acuidade.sc.olhoEsquerto.vl}}</label><br>
            <label for="">Olho Esquerdo (VP) : {{this.fichaClinica.acuidade.sc.olhoEsquerto.vp}}</label><br>
            <label for="">Olho Esquerdo (PH) : {{this.fichaClinica.acuidade.sc.olhoEsquerto.ph}}</label><br>
            <label for="">AO (VL) : {{this.fichaClinica.acuidade.sc.ao.vl}}</label><br>
            <label for="">AO (VP) : {{this.fichaClinica.acuidade.sc.ao.vp}}</label><br>
            <label for="">AO (PH) : {{this.fichaClinica.acuidade.sc.ao.ph}}</label><br>
          </b-card>
        </div>
        <div class="w-100">
          <b-card header="C/C" class="col-12">
           <label for="">Olho Direito (VL) : {{this.fichaClinica.acuidade.cc.olhoDireito.vl}}</label><br>
            <label for="">Olho Direito (VP) : {{this.fichaClinica.acuidade.cc.olhoDireito.vp}}</label><br>
            <label for="">Olho Direito: (PH) : {{this.fichaClinica.acuidade.cc.olhoDireito.ph}}</label><br>
            <label for="">Olho Esquerdo (VL) : {{this.fichaClinica.acuidade.cc.olhoEsquerto.vl}}</label><br>
            <label for="">Olho Esquerdo (VP) : {{this.fichaClinica.acuidade.cc.olhoEsquerto.vp}}</label><br>
            <label for="">Olho Esquerdo (PH) : {{this.fichaClinica.acuidade.cc.olhoEsquerto.ph}}</label><br>
            <label for="">AO (VL) : {{this.fichaClinica.acuidade.cc.ao.vl}}</label><br>
            <label for="">AO (VP) : {{this.fichaClinica.acuidade.cc.ao.vp}}</label><br>
            <label for="">AO (PH) : {{this.fichaClinica.acuidade.cc.ao.ph}}</label><br>
          </b-card>
        </div>
      </div>
    </div>



    <div class="prescriUltExImpressao mt-4" v-if="objetoEmpty.cerametria === false">
      <h6 class="mt-2 ml-4 text-center">Cerametria</h6>
      <div class="containerPrescriUlt" v-if="flag" >
        <div class="w-100">
          <b-card header="Cerametria || Técnica: AutoRefratômetro" class="col-12">
           <label for="">Olho Direito : {{this.fichaClinica.cerametria[0].olhoDireito}}</label><br>
            <label for="">Olho Esquerdo : {{this.fichaClinica.cerametria[0].olhoEsquerdo}}</label><br>
            <label for="">Miras : {{this.fichaClinica.cerametria[0].miras}}</label><br>
          </b-card>
        </div>
      </div>
    </div>

 <div class="prescriUltExImpressao mt-4" v-if="objetoEmpty.cerametria === false">
      <h6 class="mt-2 ml-4 text-center">Cerametria</h6>
      <div class="containerPrescriUlt" v-if="flag" >
        <div class="w-100">
          <b-card header="Cerametria || Técnica: AutoRefratômetro" class="col-12">
           <label for="">Olho Direito : {{this.fichaClinica.cerametria[0].olhoDireito}}</label><br>
            <label for="">Olho Esquerdo : {{this.fichaClinica.cerametria[0].olhoEsquerdo}}</label><br>
            <label for="">Miras : {{this.fichaClinica.cerametria[0].miras}}</label><br>
          </b-card>
        </div>
      </div>
    </div>

    <div v-if="objetoEmpty.biomicro === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3 p-4">Biomicroscopia</h6>
      <Biomicro :biomicroProps="this.fichaClinica.biomicro"/>

      </div>
    </div>

    <div v-if="objetoEmpty.oftalmo === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Oftalmoscopia</h6>

       <Oftalmoscopia :oftalmoProps="this.fichaClinica.oftalmoscopia" />
      </div>
    </div>

    <div v-if="objetoEmpty.tonometria === false" class="mb-4">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Tonometria</h6>
        <Tonometria  :tonometriaProps="this.fichaClinica.tonometria"/>
      </div>
    </div>

  

    <div>
        <hr>
      <div v-if="objetoEmpty.reflexoPulpilar === false">
      <h6 class="text-center mt-3 mb-3">Reflexos Pulpilares</h6>

        <ReflexosPulpilares  :reflexosProps="this.fichaClinica.reflexoPulpilar"/>
      </div>
    </div>

    <div v-if="objetoEmpty.ppc === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Ppc</h6>
        <Ppc :ppcProps="this.fichaClinica.ppc" />
      </div>
    </div>

    <div v-if="objetoEmpty.AvMotora === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Avaliação Motora</h6>

        <AvMotora :avMotoraProps="this.fichaClinica.avMotora"/>
      </div>
    </div>

    

    <div v-if="objetoEmpty.ReservasFusionais === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Reservas Fusionais</h6>

        <ReservasFusionais :reservasProps="this.fichaClinica.reservasFusionais"/>
      </div>
    </div>

  

    <div v-if="objetoEmpty.AmpliAcomodacao === false">
        <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Amplitude de Acomodação</h6>

        <AmpliAcomodacao :amplitudeProps="this.fichaClinica.amplitude" />
      </div>
    </div>

    
    <div v-if="objetoEmpty.flexAcomoda === false">
      <hr>
      <div>
      <h6 class="text-center mt-3 mb-3">Flexibilidade e Facilidade de Acomodação</h6>

        <FlexAcomodacao :flexProps="this.fichaClinica.flexiDeAcomodacao" />
      </div>
    </div>

   
    <div v-if="objetoEmpty.retinoscopia">
       <hr>

      <div>
        <Retinoscopia :retinoscopiaProps="this.fichaClinica.retinoscopia" />
      </div>
    </div>

    <footer id="sticky-footer" class="py-2 text-white-50 mb-4 p-3">
      <b-button
        pill
        variant="light"
        class="mr-2"
        type="submit"
        block
        @click="imprimir"
      >
        <b-icon-printer-fill submit class="mr-3"></b-icon-printer-fill>Imprimir
      </b-button>
    </footer>
  </div>
</div>
     
</template>

<script>
import { mapState } from "vuex";
import FichaClinicaService from "../../services/fichaClinica";
//import PrescricaoUltEx from "../Consulta/PrescricaoUltExame";
import Anamnese from "../Consulta/Anamnese";
import Biomicro from "../Consulta/Biomicro";
import Oftalmoscopia from "../Consulta/Oftalmoscopia";
import Tonometria from "../Consulta/Tonometria";
import ReflexosPulpilares from "../Consulta/ReflexosPulpilares";
import Ppc from "../Consulta/Ppc";
import AvMotora from "../Consulta/AvMotora";
import ReservasFusionais from "../Consulta/ReservasFusionais";
import AmpliAcomodacao from "../Consulta/AmpliDeAcomodacao";
import FlexAcomodacao from "../Consulta/FlexAcomodacao";
import Retinoscopia from "../Consulta/Retinoscopia";
import logoBms from '../../assets/LogoBms2.jpg'


export default {
  components: {
    Anamnese,
    Biomicro,
    Oftalmoscopia,
    Tonometria,
    ReflexosPulpilares,
    Ppc,
    AvMotora,
    ReservasFusionais,
    AmpliAcomodacao,
    FlexAcomodacao,
    Retinoscopia
    
    // PrescricaoUltEx,
  },
  props: {
    anamnesePropsImpressao: {
      type: Object,
    },

    teste: {
      type: String,
    },
  },

  computed: {
    ...mapState({
      afichaClinica: (state) => state.fichaClinica,
    }),
  },

  mounted(){
    this.$refs['my-modal'].show()
  },

  data() {
    return {
      logoBms:logoBms,
      flag:false,
      anamnese: {},
      fichaClinica: {},
      optionVisualizar : [
        {text: "Acuidade", value: "acuidade"},
        {text: "Prescrição Ultimo Exame", value: "prescriUltEx"},
        {text: "Cerametria", value: "cerametria"},
        {text: "Biomicroscopia", value: "biomicro"},
        {text: "Oftalmoscopia", value: "oftalmo"},
        {text: "Reflexo Pulpilar", value: "reflexoPulpilar"},
        {text: "PPC", value: "ppc"},
        {text: "Avaliação Motora", value: "avMotora"},
        {text: "Reservas Fusionais", value: "ReservasFusionais"},
        {text: "Amplitude de Acomodação", value: "AmpliAcomodacao"},
        {text: "Flexibilidade e Facilidade de Acomodação", value: "flexAcomoda"},
        {text: "Retinoscopia", value: "retinoscopia"},
        {text: "Tonometria", value: "tonometria"},

      ],
      objetoEmpty: {acuidade: false, prescriUltEx:false, cerametria:false, biomicro:false, tonometria:false, oftalmo:false,
      reflexoPulpilar:false , ppc: false, AvMotora:false, ReservasFusionais:false, AmpliAcomodacao:false, flexAcomoda:false,
      retinoscopia:false},
      visualizarRelatorio : [],
      acuidade: false,
      sintomas: [
        { text: "Prurido", value: "PRURIDO" },
        { text: "Fotofobia", value: "FOTOFOBIA" },
        { text: "Hiperemia", value: "HIPEREMIA" },
        { text: "Pterígio", value: "PTERIGIO" },
        { text: "Epífera", value: "EPIFERA" },
        { text: "Trauma", value: "TRAUMA" },
        { text: "Vermelhidão", value: "VERMELHIDAO" },
        { text: "Ardência", value: "ARDENCIA" },
        { text: "Dor Ocular", value: "DOROCULAR" },
        { text: "Lacrimejamento", value: "LACRIMEJAMENTO" },
        { text: "Força a Visão", value: "FORCAVISAO" },
        { text: "Cansaço Visual", value: "CANSACOVISUAL" },
        { text: "Sensibilidade a Luz", value: "SENSIBILIDADELUZ" },
      ],
    };
  },

  methods: {
    imprimir() {
      window.print();
    },

    read() {
      FichaClinicaService.read(this.$route.params.uuid).then((result) => {
        this.fichaClinica = result.data.ficha.json_fichaClinica;
        this.anamnese = this.fichaClinica.anamnese;
        delete this.anamnese.DATA;
        delete this.anamnese.IDPACIENTE;
        delete this.anamnese.IDCONSULTA;

        console.log(Object.keys(this.fichaClinica.avMotora).length === 0)
        if(Object.keys(this.fichaClinica.anamnese).length === 0){
          this.objetoEmpty.anamnese = true
        }
        if(Object.keys(this.fichaClinica.prescricaoUltimoExame).length === 0){
          this.objetoEmpty.prescriUltEx = true
        }
        if(Object.keys(this.fichaClinica.acuidade).length === 0){
          this.objetoEmpty.acuidade = true
        }
        if(Object.keys(this.fichaClinica.cerametria).length === 0){
          this.objetoEmpty.cerametria = true
        }
         if(Object.keys(this.fichaClinica.biomicro).length === 0){
          this.objetoEmpty.biomicro = true
        }
        if(Object.keys(this.fichaClinica.oftalmoscopia).length === 0){
          this.objetoEmpty.oftalmo = true
        }
        if(Object.keys(this.fichaClinica.tonometria).length === 0){
          this.objetoEmpty.tonometria = true
        }
        if(Object.keys(this.fichaClinica.reflexoPulpilar).length === 0){
          this.objetoEmpty.reflexoPulpilar = true
        }
        if(Object.keys(this.fichaClinica.ppc).length === 0){
          this.objetoEmpty.ppc = true
        }
         if(Object.keys(this.fichaClinica.avMotora).length === 0 || this.fichaClinica.avMotora === undefined){
          this.objetoEmpty.AvMotora = true
        }
         if(Object.keys(this.fichaClinica.reservasFusionais).length === 0){
          this.objetoEmpty.ReservasFusionais = true
        }
          if(Object.keys(this.fichaClinica.amplitude).length === 0){
          this.objetoEmpty.AmpliAcomodacao = true
        }
         if(Object.keys(this.fichaClinica.flexiDeAcomodacao).length === 0){
          this.objetoEmpty.flexAcomoda = true
        }
         if(Object.keys(this.fichaClinica.retinoscopia).length === 0){
          this.objetoEmpty.retinoscopia = true
        }
        
        this.flag = true;
        
      });
    },
  },

beforeMount(){
this.read();

},

  created() {
    //this.read();
    
  },

  watch: {
    anamnesePropsImpressao() {
      console.log(this.anamneseProps);
      this.anamnese.push(this.anamneseProps);
    },
    teste() {
      console.log("teeeste props");
    },
  },
};
</script>

<style scoped>
.conteinerImpressao {
  margin-top: 0px;
}
.anamneseImpressao {
  display: flex;
}
body * {
  background: rgb(255, 255, 255);
}
@media print {
  body * {
    visibility: hidden;
  }

  modal * {
    visibility: hidden;
  }

  footer * {
    
  }

  #sticky-footer * {
    visibility: hidden;
  }
  .conteinerImpressao * {
    visibility: visible;
  }
  input {
    padding: 30px;
  }
}

.card-footer-item {
  display: flex;
  justify-content: center;
}

#sticky-footer {
  left: 35px;
  flex-shrink: none;
  position: fixed;
  margin-left: 30%;
  margin-right: 25%;
  margin-bottom: 4px;
  width: 35%;
  background: linear-gradient(0deg, #015ea0 0%, #0082c8 100%);
  border-radius: 55px;
  padding: 4;
}

.containerPrescriUlt {
  display: flex;
  padding: 30px;
}
</style>