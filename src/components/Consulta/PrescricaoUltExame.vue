<template>
  <div class="prescriUltimoExame">
    <h5 class="text-center mb-3">Olho Direito</h5>
    <b-form inline>
      <label for="input-with-list" class="mr-2">ESFÉRICO :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0 mt-2"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame.OD_ESFERICO"
        @change="enviarPrescricaoUltExame"
      ></b-input>
      <label for="input-with-list" class="mr-2">CILÍNDRICO :</label>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0 mt-2"
        placeholder="CILÍNDRICO"
        @change="enviarPrescricaoUltExame"
        v-model="prescricaoUltExame.OD_CILINDRICO"
      ></b-input>

      <label for="input-with-list" class="mr-2">EIXO :</label>

      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="EIXO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_EIXO"
        ></b-input>
      </b-input-group>
    </b-form>

    <b-form inline class="mt-4 mb-4">
      <label for="input-with-list" class="mr-2">ADIÇÃO :</label>

      <b-input-group class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="ADIÇÃO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_ADICAO"
        ></b-input>
      </b-input-group>

      <label for="input-with-list" class="mr-2">DNP :</label>

      <b-input-group class="mb-2 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="DNP"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_DNP"
        ></b-input>
      </b-input-group>

      <label for="input-with-list" class="mr-2">ALT :</label>

      <b-input-group class="mb-4 mr-sm-2 mb-sm-0 mt-2">
        <b-input
          size="sm"
          placeholder="ALT"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OD_ALT"
        ></b-input>
      </b-input-group>
    </b-form>

    <hr />
    <h5 class="text-center mb-3">Olho Esquerdo</h5>
    <b-form inline class="mt-3">
      <label for="input-with-list" class="mr-2">ESFÉRICO :</label>

      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESFÉRICO"
        type="number"
        size="sm"
        v-model="prescricaoUltExame.OE_ESFERICO"
        @change="enviarPrescricaoUltExame"
      ></b-input>
      <label for="input-with-list" class="mr-2">CILÍNDRICO :</label>

      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="CILÍNDRICO"
        @change="enviarPrescricaoUltExame"
        v-model="prescricaoUltExame.OE_CILINDRICO"
      ></b-input>
      <label for="input-with-list" class="mr-2">EIXO :</label>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          placeholder="EIXO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_EIXO"
        ></b-input>
      </b-input-group>
    </b-form>

    <b-form inline class="mt-4 mb-4">
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">ADIÇÃO :</label>

        <b-input
          size="sm"
          placeholder="ADIÇÃO"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_ADICAO"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">DNP :</label>

        <b-input
          size="sm"
          placeholder="DNP"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_DNP"
        ></b-input>
      </b-input-group>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">ALT :</label>

        <b-input
          size="sm"
          placeholder="ALT"
          @change="enviarPrescricaoUltExame"
          v-model="prescricaoUltExame.OE_ALT"
        ></b-input>
      </b-input-group>
    </b-form>

    <div class="mt-4">
      <label class="mr-3">LENTE :</label>
      <b-input
        size="sm"
        placeholder="Tipo de Lente"
        @change="enviarPrescricaoUltExame"
        v-model="prescricaoUltExame.TIPO_LENTE"
        class="col-sm-5"
      ></b-input>
    </div>

    <div class="mt-2 p-4" style="display: flex; justify-content: flex-end">
      <b-button
        size="sm"
        class="mr-3"
        variant="primary"
        @click="createPDF(false)"
      >
        Imprimir <b-icon-printer-fill class="ml-3"></b-icon-printer-fill
      ></b-button>
      <b-link href="#foo" @click="createPDF(true)"
        >Download PDF <b-icon-download></b-icon-download>
      </b-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Save from "../../services/saveGeneric";
import { DateTime } from "luxon";
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import rodape from '../../services/rodape'


export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    prescricaoUltExProps: {
      type: Object,
    },
  },
  data() {
    return {
      moldura: moldura,
      logoOlho: logoOlho,
      prescricaoUltExame: {
        OD_ESFERICO: "",
        OD_CILINDRICO: "",
        OD_EIXO: "",
        OD_ADICAO: "",
        OD_DNP: "",
        OD_ALT: "",
        OE_ESFERICO: "",
        OE_CILINDRICO: "",
        OE_EIXO: "",
        OE_ADICAO: "",
        OE_DNP: "",
        OE_ALT: "",
        TIPO_LENTE: "",
      },
    };
  },
  watch: {
    prescricaoUltExProps() {
      /*if (Object.keys(this.prescricaoUltExProps).length != 0) {
        this.prescricaoUltExame = this.prescricaoUltExProps;
        this.enviarPrescricaoUltExame();
      }else{
        this.enviarPrescricaoUltExame();
        this.prescricaoUltExame = this.prescricaoUltExProps;
      }*/
      this.prescricaoUltExame = this.prescricaoUltExProps;
      this.enviarPrescricaoUltExame();
    },
    Limpar() {
      this.prescricaoUltExame = {
        OD_ESFERICO: "",
        OD_CILINDRICO: "",
        OD_EIXO: "",
        OD_ADICAO: "",
        OD_DNP: "",
        OD_ALT: "",
        OE_ESFERICO: "",
        OE_CILINDRICO: "",
        OE_EIXO: "",
        OE_ADICAO: "",
        OE_DNP: "",
        OE_ALT: "",
        TIPO_LENTE: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("PRESCRICAO_ULTIMO_EXAME", this.prescricaoUltExame);
    },
    Visualizar() {
      this.visualizar = false;
    },
  },
  computed: {
    ...mapState({
      prescricaoUltExameState: (state) => state.prescricaoUltimoExame,
      idPacienteSelected: (state) => state.pacienteSelected,
      dadosClinica: (state) => state.dadosClinica,
      idConsulta: (state) => state.idConsulta,
      uuidClinica: (state) => state.uuidClinica
    }),
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

    enviarPrescricaoUltExame() {
      this.prescricaoUltExame.IDPACIENTE = this.idPacienteSelected;
      this.prescricaoUltExame.UUIDCLINICA = this.dadosClinica.UUIDCLINICA;
      this.prescricaoUltExame.IDCONSULTA = this.idConsulta;
      this.prescricaoUltExame.DATA = `${DateTime.local().c.year}-${
        DateTime.local().c.month
      }-${DateTime.local().c.day}`;
      this.$store.commit("PRESCRICAO_ULTIMO_EXAME", this.prescricaoUltExame);
    },

   async createPDF(download) {
      let pdfName = "PrescricaoUltimoExame";
      var doc = new jsPDF();
      var linha_oe = 85;
      var linha_od = 85;
      var linha = 85;

      doc.text("Prescrição Ultimo Exame", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 25, linha, null, null);
      doc.text("Olho Esquerdo", 150, linha, null, null);

      delete this.prescricaoUltExame.IDCONSULTA;
      delete this.prescricaoUltExame.IDPACIENTE;
      delete this.prescricaoUltExame.DATA;
      delete this.prescricaoUltExame.UUIDCLINICA;

      
      Object.keys(this.prescricaoUltExame).forEach((element) => {
        if (element.substring(0, 2) === "OD") {
          linha_od += 8;
          doc.text(this.convertNomeKey(element), 25, linha_od, null, null);
          doc.text(this.prescricaoUltExame[element], 60, linha_od, null, null);
        }

        if (element.substring(0, 2) === "OE") {
          linha_oe += 8;
          doc.text(this.convertNomeKey(element), 150, linha_oe, null, null);
          doc.text(this.prescricaoUltExame[element], 185, linha_oe, null, null);
        }
      });

      doc.text(
        `Tipo de Lente : ${this.prescricaoUltExame["TIPO_LENTE"]}`,
        70,
        180,
        null,
        null
      );
         await rodape(doc, this.dadosClinica, this.uuidClinica)

      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    convertNomeKey(key) {
      switch (key) {
        case "OD_ESFERICO":
        case "OE_ESFERICO":
          return "Esferico";

        case "OD_CILINDRICO":
        case "OE_CILINDRICO":
          return "Cilindrico";

        case "OD_EIXO":
        case "OE_EIXO":
          return "Eixo";

        case "OD_ADICAO":
        case "OE_ADICAO":
          return "Adicão";

        case "OD_DNP":
        case "OE_DNP":
          return "DNP";

        case "OE_ALT":
        case "OD_ALT":
          return "Alt";

        default:
          break;
      }
    },

    save() {
      try {
        Save.save("Prescricao", this.prescricaoUltExameState).then((result) => {
          if (result.status === 200) {
            this.showAlert("success", "Prescrição Salva com Sucesso");
          } else {
            this.showAlert("error", "Erro ao Salvar Prescrição");
          }
        });
      } catch (error) {
        this.showAlert("error", "Erro ao Salvar Prescrição " + error);
      }
    },
  },
};
</script>

<style>
.prescriUltimoExame {
}
</style>