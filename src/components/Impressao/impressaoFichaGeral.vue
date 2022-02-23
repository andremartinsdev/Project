<template>
  <b-card>
    <b-button>gerar</b-button>

    <table class="table table-sm table-borderless" id="sintomas">
      <thead>
        <tr>
          <th scope="col">Sintomas</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sintoma in sintomas" :key="sintoma.value">
          <td>{{ sintoma.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="doenca">
      <thead>
        <tr>
          <th scope="col">Doença Ocular</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doenca in doencaOcular" :key="doenca.value">
          <td>{{ doenca.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="doencaSis">
      <thead>
        <tr>
          <th scope="col">Doença Sistêmica</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doenca in doencaSistematica" :key="doenca.value">
          <td>{{ doenca.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="medicamento">
      <thead>
        <tr>
          <th scope="col">Medicamento</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medica in medicamentos" :key="medica.value">
          <td>{{ medica.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="info">
      <thead>
        <tr>
          <th scope="col">Outras Infromações</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in options" :key="info.value">
          <td>{{ info.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="anteceFami">
      <thead>
        <tr>
          <th scope="col">Antecedente Familiar</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ateF in antecedentesFamiliar" :key="ateF.value">
          <td>{{ ateF.text }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm table-borderless" id="prescriUlt">
      <thead>
        <tr>
          <th scope="col">prescrição Último Exame</th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Esférico</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_ESFERICO || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_ESFERICO || "" }}</td>
        </tr>
        <tr>
          <td>Cilíndrico</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_CILINDRICO || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_CILINDRICO || "" }}</td>
        </tr>
        <tr>
          <td>Eixo</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_EIXO || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_EIXO || "" }}</td>
        </tr>
        <tr>
          <td>Adição</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_ADICAO || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_ADICAO || "" }}</td>
        </tr>
        <tr>
          <td>DNP</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_DNP || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_DNP || "" }}</td>
        </tr>
        <tr>
          <td>ALT</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OD_ALT || "" }}</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.OE_ALT || "" }}</td>
        </tr>
        <tr>
          <td>Lente</td>
          <td>{{ jsonTotal.prescricaoUltimoExame.TIPO_LENTE || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="acuidadeSC">
      <thead>
        <tr>
          <th colspan="4" class="text-center">SC</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Visão Lon.</th>
          <th scope="col">Visão Per.</th>
          <th scope="col">PH</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <td>OD</td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoDireito.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoDireito.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoDireito.ph || "" }}
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoEsquerto.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoEsquerto.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.olhoEsquerto.ph || "" }}
          </td>
        </tr>
        <tr>
          <td>AO</td>
          <td>
            {{ jsonTotal.acuidade.sc.ao.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.ao.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.sc.ao.ph || "" }}
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="acuidadeCC">
      <thead>
        <tr>
          <th colspan="4" class="text-center">CC</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Visão Lon.</th>
          <th scope="col">Visão Per.</th>
          <th scope="col">PH</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <td>OD</td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoDireito.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoDireito.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoDireito.ph || "" }}
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoEsquerto.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoEsquerto.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.olhoEsquerto.ph || "" }}
          </td>
        </tr>
        <tr>
          <td>AO</td>
          <td>
            {{ jsonTotal.acuidade.cc.ao.vl || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.ao.vp || "" }}
          </td>
          <td>
            {{ jsonTotal.acuidade.cc.ao.ph || "" }}
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="ceratometria">
      <thead>
        <tr>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
          <th scope="col">Miras</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ jsonTotal.cerametria[0].olhoDireito || "" }}</td>
          <td>{{ jsonTotal.cerametria[0].olhoEsquerdo || "" }}</td>
          <td>{{ jsonTotal.cerametria[0].miras || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="avMotora">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kappa</td>
          <td>{{ jsonTotal.avMotora.OD.KAPPA || "" }}</td>
          <td>{{ jsonTotal.avMotora.OE.KAPPA || "" }}</td>
        </tr>

        <tr>
          <td>Ducções</td>
          <td>{{ jsonTotal.avMotora.OD.DUCCOES || "" }}</td>
          <td>{{ jsonTotal.avMotora.OE.DUCCOES || "" }}</td>
        </tr>

        <tr>
          <td>Hirschberg</td>
          <td>{{ jsonTotal.avMotora.HIRSCHBERG || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="reflexPulpilar">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fotomotor</td>
          <td>{{ jsonTotal.reflexoPulpilar.OD.ACOMODATIVO || "" }}</td>
          <td>{{ jsonTotal.reflexoPulpilar.OE.ACOMODATIVO || "" }}</td>
        </tr>
        <tr>
          <td>Consensual</td>
          <td>{{ jsonTotal.reflexoPulpilar.OD.CONSENSUAL || "" }}</td>
          <td>{{ jsonTotal.reflexoPulpilar.OE.CONSENSUAL || "" }}</td>
        </tr>
        <tr>
          <td>Acomodativo</td>
          <td>{{ jsonTotal.reflexoPulpilar.OD.FOTOMOTOR || "" }}</td>
          <td>{{ jsonTotal.reflexoPulpilar.OE.FOTOMOTOR || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="biomicro">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cílios</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.cilios || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.cilios || "" }}</td>
        </tr>
        <tr>
          <td>Sobrancelhas</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.sombrancelha || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.sombrancelha || "" }}</td>
        </tr>
        <tr>
          <td>Pálpebras</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.palpebra || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.palpebra || "" }}</td>
        </tr>
        <tr>
          <td>Conjuntiva</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.conjuntiva || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.conjuntiva || "" }}</td>
        </tr>
        <tr>
          <td>Esclerótica</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.esclerotica || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.esclerotica || "" }}</td>
        </tr>
        <tr>
          <td>Córnea</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.cornea || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.cornea || "" }}</td>
        </tr>
        <tr>
          <td>Íris</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.iris || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.iris || "" }}</td>
        </tr>
        <tr>
          <td>Pupila</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.pupila || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.pupila || "" }}</td>
        </tr>
        <tr>
          <td>Cristalino</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.cristalina || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.cristalina || "" }}</td>
        </tr>
        <tr>
          <td>Câmara Anterior</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.camaraAnterior || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.camaraAnterior || "" }}</td>
        </tr>
        <tr>
          <td>Observação</td>
          <td>{{ jsonTotal.biomicro[0].olhoDireito.obs || "" }}</td>
          <td>{{ jsonTotal.biomicro[0].olhoEsquerdo.obs || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="oftalmo">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Papila</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.papila || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.papila || "" }}</td>
        </tr>
        <tr>
          <td>Escavação</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.escavacao || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.escavacao || "" }}</td>
        </tr>
        <tr>
          <td>Mácula</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.macula || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.macula || "" }}</td>
        </tr>
        <tr>
          <td>Fixação</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.fixacao || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.fixacao || "" }}</td>
        </tr>
        <tr>
          <td>Cor</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.cor || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.cor || "" }}</td>
        </tr>
        <tr>
          <td>Relação A/V</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.relacaoAv || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.relacaoAv || "" }}</td>
        </tr>
        <tr>
          <td>Observação</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoDireito.obs || "" }}</td>
          <td>{{ jsonTotal.oftalmoscopia[0].olhoEsquerdo.obs || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="ceratometria">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
          <th scope="col">Miras</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>

    <table class="table table-sm" id="estatica">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{{ jsonTotal.retinoscopia.OD }}</td>
          <td>{{ jsonTotal.retinoscopia.OE }}</td>
        </tr>
        <tr>
          <td>AV</td>
          <td>{{ jsonTotal.retinoscopia.AV_OD }}</td>
          <td>{{ jsonTotal.retinoscopia.AV_OE }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="subjetivo">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{{ jsonTotal.subjetivo.OD }}</td>
          <td>{{ jsonTotal.subjetivo.OE }}</td>
        </tr>
        <tr>
          <td>AV</td>
          <td>{{ jsonTotal.subjetivo.AV_OD }}</td>
          <td>{{ jsonTotal.subjetivo.AV_OE }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="afinamento">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{{ jsonTotal.afinamento.OD }}</td>
          <td>{{ jsonTotal.afinamento.OE }}</td>
        </tr>
        <tr>
          <td>AV</td>
          <td>{{ jsonTotal.afinamento.AVD }}</td>
          <td>{{ jsonTotal.afinamento.AVE }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="adicao">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Olho Direito</th>
          <th scope="col">Olho Esquerdo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>{{ jsonTotal.adicao.OD }}</td>
          <td>{{ jsonTotal.adicao.OE }}</td>
        </tr>
        <tr>
          <td>AV</td>
          <td>{{ jsonTotal.adicao.AV_OD }}</td>
          <td>{{ jsonTotal.adicao.AV_OE }}</td>
        </tr>
      </tbody>
    </table>

    <table class="table table-sm" id="forometria">
      <thead>
        <tr>
          <th></th>
          <th scope="col"></th>
          <th scope="col">Longe</th>
          <th scope="col">40 cm</th>
          <th scope="col">20 cm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SC</td>
          <td></td>
          <td>{{ jsonTotal.forometria.CC.LONGE || "" }}</td>
          <td>{{ jsonTotal.forometria.CC.CM40 || "" }}</td>
          <td>{{ jsonTotal.forometria.CC.CM20 || "" }}</td>
        </tr>
        <tr>
          <td>CC</td>
          <td></td>
          <td>{{ jsonTotal.forometria.SC.LONGE || "" }}</td>
          <td>{{ jsonTotal.forometria.SC.CM40 || "" }}</td>
          <td>{{ jsonTotal.forometria.SC.CM20 || "" }}</td>
        </tr>

        <tr>
          <td>Técnica</td>
          <td>{{ jsonTotal.forometria.TECNICA || "" }}</td>
        </tr>
      </tbody>
    </table>

    <table id="rx">
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">Esférico</th>
          <th class="text-center">Cilíndrico</th>
          <th class="text-center">Eixo</th>
          <th class="text-center">AV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OD</td>
          <td>{{ jsonTotal.rxFinal.OD.ESFERICO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OD.CILINDRICO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OD.EIXO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OD.AV || "" }}</td>
        </tr>
        <tr>
          <td>OE</td>
          <td>{{ jsonTotal.rxFinal.OE.ESFERICO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OE.CILINDRICO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OE.EIXO || "" }}</td>
          <td>{{ jsonTotal.rxFinal.OE.AV || "" }}</td>
        </tr>
        <tr>
          <td>Adição</td>
          <td colspan="2">{{ jsonTotal.rxFinal.ADICAO || "" }}</td>
          <td>AV. Perto</td>
          <td>{{ jsonTotal.rxFinal.AV_PERTO || "" }}</td>
        </tr>
        <tr>
          <td>Tipo lente:</td>
          <td colspan="2">{{ jsonTotal.rxFinal.TIPO_LENTE || "" }}</td>
          <td>Tratamento:</td>
          <td>{{ jsonTotal.rxFinal.TRATAMENTO || "" }}</td>
        </tr>
      </tbody>
    </table>
  </b-card>
</template>
	
	
	
	
	
	
	
	
	

Obs
<script>
import avMotora from "../../assets/av.png";
import biomicro from "../../assets/biomicro.png";
import oftalmo from "../../assets/oftalmo.png";
import jsPDF from "jspdf";
import "jspdf-autotable";
import serviceFichaClinica from "../../services/fichaClinica";
export default {
  async mounted() {
    await this.readConsulta();
    await this.anamneseSintomas();
    await this.anamneseDoencaOcular();
    await this.anamneseDoencaSistemica();
    await this.anamneseMedicamentos();
    await this.anamneseOutrasInformacoes();
    await this.anamneseAntecedentesFamiliar();
    this.imprimir();
  },
  data() {
    return {
      newArrayClinica: [],
      jsonTotal: {
        acuidade: {
          cc: {
            ao: {},
            olhoDireito: {},
            olhoEsquerto: {},
          },
          sc: {
            ao: {},
            olhoDireito: {},
            olhoEsquerto: {},
          },
        },
        anamnese: {},
        prescricaoUltimoExame: {},
        cerametria: [{}],
        avMotora: {
          OD: {
            DUCCOES: "",
            KAPPA: "",
          },
          OE: {
            DUCCOES: "",
            KAPPA: "",
          },
        },
        biomicro: [
          {
            olhoDireito: {},
            olhoEsquerdo: {},
          },
        ],
        oftalmoscopia: [
          {
            olhoDireito: {},
            olhoEsquerdo: {},
          },
        ],
        forometria: {
          CC: {
            CM20: "",
            CM40: "",
            LONGE: "",
          },
          SC: {
            CM20: "",
            CM40: "",
            LONGE: "",
          },
        },
        retinoscopia: { OD: "", OE: "", AV_OD: "", AV_OE: "" },
        rxFinal: {
          OD: {
            AV: "",
            CILINDRICO: "",
            EIXO: "",
            ESFERICO: "",
          },
          OE: {
            AV: "",
            CILINDRICO: "",
            EIXO: "",
            ESFERICO: "",
          },
        },
        reflexoPulpilar: {
          OD: {
            ACOMODATIVO: "",
            CONSENSUAL: "",
            FOTOMOTOR: "",
          },
          OE: {
            ACOMODATIVO: "",
            CONSENSUAL: "",
            FOTOMOTOR: "",
          },
        },
        adicao: {
          OD: "",
          OE: "",
          AV_OD: "",
          AV_OE: "",
        },
        afinamento: {
          OD: "",
          OE: "",
          AV_OD: "",
          AV_OE: "",
        },
        subjetivo: {
          OD: "",
          OE: "",
          AV_OD: "",
          AV_OE: "",
        },
        estatica: {
          OD: "",
          OE: "",
          AV_OD: "",
          AV_OE: "",
        },
      },
      acuidade: [{}],
      adicao: [{}],
      afinamento: [{}],
      amplitude: [{}],
      anamnese: [{}],
      avMotara: [{}],
      biomicro2: [{}],
      cerametria: [{}],
      dx: [{}],
      flexDeAcomodacao: [{}],
      forometria: [{}],
      oftalmoscopia: [],
      ppc: [{}],
      prescricaoUltimoExame: [{}],
      reflexoPulpilar: [{}],
      reservasFusionais: [{}],
      retinoscopia: [{}],
      rxFinal: [{}],
      subjetivo: [{}],
      testeAmbulatorial: [{}],
      tonometria: [{}],
      oftalmo: oftalmo,
      avMotora: avMotora,
      biomicro: biomicro,
      antecedentesFamiliar: [
        { text: "Diabetes", value: "DIABETES_AF" },
        { text: "Estrabismo", value: "ESTRABISMO_AF" },
        { text: "Glaucoma", value: "GLAUCOMA_AF" },
        { text: "Pressão Alta", value: "PRESSAOALTA_AF" },
        { text: "Catarata", value: "CATARATA_AF" },
      ],
      options: [
        { text: "Usa Óculos ", value: "USAOCULOS" },
        { text: "Dificuldade Longe ", value: "DIFICULDADELONGE" },
        { text: "Dificuldade Perto", value: "DIFICULDADEPERTO" },
        { text: "Cefaléia - Dor de cabeça", value: "CEFALEIA" },
      ],
      medicamentos: [
        { text: "Losartana", value: "LOSARTANA" },
        { text: "Captopril", value: "CAPTOPRIL" },
        { text: "Atenolol", value: "ATENOLOL" },
        { text: "Nifidipino", value: "NIFIDIPINO" },
        { text: "Propanolol", value: "PROPANOLOL" },
        { text: "Hidrocloratiazida", value: "HIDROCLORATIAZIDA" },
        { text: "Metiformina", value: "METIFORMINA" },
        { text: "Glibencamida", value: "GLIBENCAMIDA" },
        { text: "AAS", value: "AAS" },
        { text: "Sinvastantina", value: "SINVASTANTINA" },
        { text: "Polaramine", value: "POLARAMINE" },
        { text: "Omeprazol", value: "OMEPRAZOL" },
      ],
      doencaSistematica: [
        { text: "Asma", value: "ASMA" },
        { text: "Colesterol", value: "COLESTEROL" },
        { text: "Diabetes", value: "DIABETES" },
        { text: "Hipertensão", value: "HIPERTENSAO" },
        { text: "Renite", value: "RENITE" },
        { text: "Sinusite", value: "SINUSITE" },
        { text: "Alergias", value: "ALERGIAS" },
        { text: "Reumatismo", value: "REUMATISMO" },
      ],
      doencaOcular: [
        { text: "Glaucoma", value: "GLAUCOMA" },
        { text: "Catarata", value: "CATARATA" },
        { text: "Pterígio", value: "PTEREGIO_OD" },
        { text: "Ceratocone", value: "CERATOCONE" },
        { text: "Estrabismo", value: "ESTRABISMO" },
        { text: "Trauma Ocular", value: "TRAUMA_OCULAR" },
        { text: "Corpo Estranho", value: "CORPO_ESTRANHO" },
        { text: "Queimaduras", value: "QUEIMADURAS" },
        { text: "Inflamações", value: "INFLAMACOES" },
        { text: "Cegueira", value: "CEGUEIRA" },
        { text: "Descolamento de Retina", value: "DESCOLAMENTO_RETINA" },
        { text: "Toxoplasmose", value: "TOXOPLASMOSE" },
        { text: "Extrabismo", value: "EXTRABISMO" },
        { text: "Alérgico", value: "ALERGICO" },
        { text: "Defeitos de Refração", value: "DEFEITOS_REFRACAO" },
      ],
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
        { text: "Visão Dupla", value: " VISAO_DUPLA" },
        { text: "Fotopsias - fosfeno", value: "FOTOPSIAS" },
        { text: "Miodesopsia", value: "MIODESOPSIA" },
        { text: "Enxaqueca", value: "EXAQUECA" },
        { text: "Astenopia", value: "ASTENOPIA" },
        { text: "Halos", value: "HALOS" },
      ],
      prescricaoUltExame: [
        { text: "Esférico" },
        { text: "Cilíndrico" },
        { text: "Eixo" },
        { text: "Adição" },
        { text: "DNP" },
        { text: "ALT" },
        { text: "Lente" },
      ],
    };
  },
  methods: {
    async readConsulta() {
      const { data } = await serviceFichaClinica.read(this.$route.params.uuid);
      this.jsonTotal = data.ficha[0].json_fichaClinica;
    },

    anamneseSintomas() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.sintomas
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.sintomas = this.sintomas.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
      console.log(this.jsonTotal);
    },

    anamneseDoencaOcular() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.doencaOcular
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.doencaOcular = this.doencaOcular.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
    },

    anamneseDoencaSistemica() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.doencaSistematica
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.doencaSistematica = this.doencaSistematica.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
    },

    anamneseMedicamentos() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.medicamentos
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.medicamentos = this.medicamentos.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
    },

    anamneseOutrasInformacoes() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.options
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.options = this.options.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
    },

    anamneseAntecedentesFamiliar() {
      const keysJsonTotal = Object.keys(this.jsonTotal.anamnese);

      const aux = this.antecedentesFamiliar
        .map((item) => item.value)
        .filter((a) => keysJsonTotal.includes(a));

      this.antecedentesFamiliar = this.antecedentesFamiliar.filter(
        (a) => aux.filter((b) => b == a.value).length == 1
      );
    },

    imprimir() {
      const doc = new jsPDF();
      doc.autoTable({
        html: "#sintomas",
        margin: { horizontal: 5 },
        startY: 20,
        styles: { fontSize: 7 },
        tableWidth: 50,
        tableId: "salesTable",
      });
      doc.setFontSize(10).setTextColor(150).text("Anamnese", 99, 16);
      doc.rect(2, 10, 205, 140);

      doc.autoTable({
        html: "#doenca",
        margin: { horizontal: 60 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 50,
      });

      doc.autoTable({
        html: "#doencaSis",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#medicamento",
        margin: { horizontal: 160 },
        styles: { fontSize: 7 },
        startY: 20,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#anteceFami",
        margin: { horizontal: 160 },
        styles: { fontSize: 7 },
        startY: 110,
        tableWidth: 40,
      });

      doc.autoTable({
        html: "#info",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 90,
        tableWidth: 40,
      });
      doc.rect(2, 153, 85, 60);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Prescrição Ultimo Exame", 8, 158);

      doc.autoTable({
        html: "#prescriUlt",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 160,
        tableWidth: 78,
      });
      doc.setFontSize(10).setTextColor(150).text("Acuidade Visual", 138, 158);
      doc.rect(90, 153, 117, 48);
      doc.autoTable({
        html: "#acuidadeSC",
        margin: { horizontal: 150 },
        styles: { fontSize: 7 },
        startY: 163,
        tableWidth: 50,
      });

      doc.autoTable({
        html: "#acuidadeCC",
        margin: { horizontal: 95 },
        styles: { fontSize: 7 },
        startY: 163,
        tableWidth: 50,
      });

      doc.rect(2, 217, 85, 28);
      doc.setFontSize(10).setTextColor(150).text("Ceratometria", 30, 222);

      doc.autoTable({
        html: "#ceratometria",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 225,
        tableWidth: 80,
      });

      doc.rect(90, 205, 117, 74);
      doc.setFontSize(10).setTextColor(150).text("Avaliação Motora", 130, 210);

      doc.autoTable({
        html: "#avMotora",
        margin: { horizontal: 96 },
        styles: { fontSize: 7 },
        startY: 214,
        tableWidth: 105,
      });
      doc.addImage(this.avMotora, "JPEG", 100, 250, 33, 15);
      doc.addImage(this.avMotora, "JPEG", 167, 250, 33, 15);

      doc.rect(2, 247, 85, 44);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Reflexos Pulpilares", 30, 252);

      doc.autoTable({
        html: "#reflexPulpilar",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 255,
        tableWidth: 80,
      });
      doc.addPage("a4");

      doc.rect(2, 5, 105, 105);
      doc.setFontSize(10).setTextColor(150).text("Biomicroscopia", 30, 10);
      doc.setFontSize(8).setTextColor(150).text("Observação :", 7, 100);
      doc.addImage(this.biomicro, "JPEG", 43, 90, 53, 15);

      doc.autoTable({
        html: "#biomicro",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 13,
        tableWidth: 100,
      });

      doc.setFontSize(10).setTextColor(150).text("Oftalmoscopia", 140, 10);

      doc.setFontSize(10).setTextColor(150).text("Observação", 115, 70);

      doc.addImage(this.oftalmo, "JPEG", 155, 65, 33, 15);
      doc.rect(110, 5, 98, 80);
      doc.autoTable({
        html: "#oftalmo",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 13,
        tableWidth: 90,
      });

      doc.rect(2, 115, 105, 40);
      doc.setFontSize(10).setTextColor(150).text("Ceratometria", 45, 120);
      doc.autoTable({
        html: "#ceratometria",
        margin: { horizontal: 8 },
        styles: { fontSize: 7 },
        startY: 125,
        tableWidth: 90,
      });

      doc.rect(110, 88, 98, 160);
      doc.setFontSize(10).setTextColor(150).text("Retinoscopia", 147, 92);

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Estática", 115, 102);
      doc.autoTable({
        html: "#estatica",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 105,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Subjetivo", 115, 130);
      doc.autoTable({
        html: "#subjetivo",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 132,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Afinamento", 115, 160);
      doc.autoTable({
        html: "#afinamento",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 162,
        tableWidth: 90,
      });

      doc.setFontSize(8).setTextColor(0, 0, 255).text("Adição", 115, 188);
      doc.autoTable({
        html: "#adicao",
        margin: { horizontal: 115 },
        styles: { fontSize: 7 },
        startY: 190,
        tableWidth: 90,
      });

      doc.rect(2, 158, 105, 55);
      doc.setFontSize(10).setTextColor(150).text("Adição", 50, 165);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Técnica : ____________________________________", 5, 205);
      doc.autoTable({
        html: "#forometria",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 170,
        tableWidth: 100,
      });

      doc.rect(2, 218, 105, 55);
      doc.setFontSize(10).setTextColor(150).text("Rx Final", 50, 225);
      doc
        .setFontSize(10)
        .setTextColor(150)
        .text("Técnica : ____________________________________", 5, 205);
      doc.autoTable({
        html: "#rx",
        margin: { horizontal: 5 },
        styles: { fontSize: 7 },
        startY: 230,
        tableWidth: 100,
      });
      // Or use javascript directly:
      //      doc.autoTable({
      //   columnStyles: { europe: { halign: 'center' } }, // European countries centered
      //   body: [
      //     { europe: 'Sweden', america: 'Canada', asia: 'China' },
      //     { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
      //   ],
      //   columns: [
      //     { header: 'Europe', dataKey: 'europe' },
      //     { header: 'Asia', dataKey: 'asia' },
      //   ],
      // })

      window.open(doc.output("bloburl"));
      this.$router.push("/Consulta");
    },
  },
};
</script>

<style>
</style>