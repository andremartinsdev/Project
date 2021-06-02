<template>
  <div>
    <label>Técnica: Transpalpebral</label>

    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
        size="sm"
        v-model="tonometria.OD"
        @change="enviarTonometria"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        v-model="tonometria.OE"
        @change="enviarTonometria"
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
      ></b-input>
      <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">Hora :</label>
        <b-input
          size="sm"
          @change="enviarTonometria"
          v-model="tonometria.HORA"
        ></b-input>
      </b-input-group>
    </b-form>
    <div class="mt-2 p-4" style="display: flex; justify-content: center">
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
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import jsPDF from "jspdf";
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {

   computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },
  props: {
    Limpar: {
      type: Boolean,
    },
    tonometriaProps: {
      type: Object,
    },
  },

  watch: {
    Limpar() {
      this.tonometria = {
        OD: "",
        OE: "",
        HORA: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("TONOMETRIA", this.tonometria);
    },

    tonometriaProps() {
      if (Object.keys(this.tonometriaProps).length === 0) {
        this.tonometria = {
          OD: "",
          OE: "",
          HORA: "",
        };
      } else {
        this.tonometria = this.tonometriaProps;
        this.enviarTonometria();
      }
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      tonometria: {
        OD: "",
        OE: "",
        HORA: "",
      },
    };
  },

  methods: {
    createPDF(download) {
      var doc = new jsPDF();
      var linha = 90;

      doc.text("Tonometria", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.text("Técnica: Transpalpebral", 45, 68, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 28, linha, null, null);
      doc.text(this.tonometria.OD, 28, linha + 8, null, null);
      doc.text("Olho Esquerdo", 91, linha, null, null);
      doc.text(this.tonometria.OE, 91, linha + 8, null, null);
      doc.text("Hora", 153, linha, null, null);
      doc.text(this.tonometria.HORA, 153, linha + 8, null, null);
      // doc.rect(10, 78, 190, 40);
      // doc.setDrawColor(0);
      // doc.setFillColor(255, 255, 255, 5);
      // doc.roundedRect(10, 78, 190, 40, 3, 3, "FD");

          rodape(doc, this.dadosClinica, this.uuidClinica)
      if (download) {
        doc.save("Tonometria.pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    enviarTonometria() {
      this.$store.commit("TONOMETRIA", this.tonometria);
    },
  },
};
</script>

<style>
</style>