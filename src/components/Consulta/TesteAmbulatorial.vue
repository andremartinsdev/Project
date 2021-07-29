<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="c_tes_amb_tem">Tempo</label>
        <b-input
          type="text"
          @change="enviarTesteAmbulatorial"
          v-model="testeAmbulatorial.TEMPO"
          size="sm"
          class="form-control"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="c_tes_amb_res">Resultado</label>
        <b-input
          type="text"
          @change="enviarTesteAmbulatorial"
          v-model="testeAmbulatorial.RESULTADO"
          size="sm"
          class="form-control"
        />
      </div>
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
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.jpg";
import moldura from "../../assets/moldura.png";
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    testeProps: {
      type: Object,
    },
  },
  watch: {
    testeProps() {
      if (Object.keys(this.testeProps).length != 0) {
        this.testeAmbulatorial = this.testeProps;
        this.enviarTesteAmbulatorial();
      }
    },

    Limpar() {
      this.testeAmbulatorial = {
        TEMPO: "",
        RESULTADO: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("TESTE_AMBULATORIAL", {});
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      testeAmbulatorial: {
        TEMPO: "",
        RESULTADO: "",
      },
    };
  },

   computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },

  methods: {
   async createPDF() {
      let pdfName = "Teste Ambulatorial";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Teste Ambulatorial", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 70, 50, 55, 25);

      doc
        .setTextColor(0, 0, 255)
        .text(`Tempo : ${this.testeAmbulatorial.TEMPO}`, 25, linha, null, null);
      doc
        .text(
          `Resultado : ${this.testeAmbulatorial.RESULTADO}`,
          145,
          linha,
          null,
          null
        )
        .setTextColor(0);

      await rodape(doc, this.dadosClinica, this.uuidClinica)

      doc.save(pdfName + ".pdf");
    },
    enviarTesteAmbulatorial() {
      this.$store.commit("TESTE_AMBULATORIAL", this.testeAmbulatorial);
    },
  },
};
</script>

<style>
</style>