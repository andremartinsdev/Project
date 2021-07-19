<template>
  <div class="col-md-12">
    <label for="input-with-list" class="mr-2">Técnica : Sheard 40 cm</label>

    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.OD"
              class="form-control"
            ></b-input>
          </td>
          <td>Nível</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.NIVEL_OD"
              class="form-control"
            ></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.OE"
              class="form-control"
            ></b-input>
          </td>
          <td>Nível</td>
          <td>
            <b-input
              type="text"
              size="sm"
              @change="enviarAmpliDeAcomodacao"
              v-model="ampliDeAcomodacao.NIVEL_OE"
              class="form-control"
            ></b-input>
          </td>
        </tr>
      </tbody>
    </table>

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
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import { mapState } from "vuex";
import rodape from "../../services/rodape";

export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    amplitudeProps: {
      type: Object,
    },
  },
  watch: {
    amplitudeProps() {
      if (Object.keys(this.amplitudeProps).length === 0) {
        this.ampliDeAcomodacao = {
          OD: "",
          NIVEL_OD: "",
          OE: "",
          NIVEL_OE: "",
        };
      } else {
        this.ampliDeAcomodacao = { ...this.amplitudeProps };
        this.enviarAmpliDeAcomodacao();
      }
    },
    Limpar() {
      this.ampliDeAcomodacao = {
        OD: "",
        NIVEL_OD: "",
        OE: "",
        NIVEL_OE: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("AMPLITUDE_ACOMODACAO", this.ampliDeAcomodacao);
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      ampliDeAcomodacao: {
        OD: "",
        NIVEL_OD: "",
        OE: "",
        NIVEL_OE: "",
      },
    };
  },

  computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica,
    }),
  },

  methods: {
    async createPDF(download) {
      let pdfName = "Amplitude de Acomodação";
      var doc = new jsPDF();
      var linha = 85;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Amplitude de Acomodação", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito : ", 25, linha, null, null);
      doc.text(this.ampliDeAcomodacao.OD, 55, linha, null, null);

      doc.text("Nivel : ", 25, linha + 8, null, null);
      doc.text(this.ampliDeAcomodacao.NIVEL_OD, 40, linha + 8, null, null);

      doc.text("Olho Esquerdo : ", 150, linha, null, null);
      doc.text(this.ampliDeAcomodacao.OE, 185, linha, null, null);

      doc.text("Nivel : ", 150, linha + 8, null, null);
      doc.text(this.ampliDeAcomodacao.NIVEL_OE, 164, linha + 8, null, null);

      doc.text("Técnica : Sheard 40 cm", 92, 150, null, null);
      await rodape(doc, this.dadosClinica, this.uuidClinica);

      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    enviarAmpliDeAcomodacao() {
      this.$store.commit("AMPLITUDE_ACOMODACAO", this.ampliDeAcomodacao);
    },
  },
};
</script>

<style>
</style>