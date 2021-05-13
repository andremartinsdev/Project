<template>
  <div>
    <label>Técnica: AutoRefratômetro</label>

    <b-form inline>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        id=""
        class="mb-2 mr-sm-2 mb-sm-0"
        type="number"
        size="sm"
        v-model="cerametria[0].olhoDireito"
        @change="enviarCerametria"
      ></b-input>
      <label for="input-with-list" class="mr-2">OE :</label>
      <b-input
        id=""
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="cerametria[0].olhoEsquerdo"
        @change="enviarCerametria"
      ></b-input>
      <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <label for="input-with-list" class="mr-2">Miras :</label>
        <b-input
          size="sm"
          v-model="cerametria[0].miras"
          @change="enviarCerametria"
        ></b-input>
      </b-input-group>
    </b-form>

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
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    cerametriaProps: {
      type: [Array, Object],
    },
  },

  watch: {
    cerametriaProps() {
      /*if(Object.keys(this.cerametriaProps).length != 0){
      this.cerametria = this.cerametriaProps
      this.enviarCerametria();
      }*/
      if (Object.keys(this.cerametriaProps).length === 0) {
        this.cerametria = [
          {
            olhoDireito: "",
            olhoEsquerdo: "",
            miras: "",
          },
        ];
      } else {
        this.cerametria = this.cerametriaProps;
        this.enviarCerametria();
      }
    },
    Limpar() {
      this.cerametria = [
        {
          olhoDireito: "",
          olhoEsquerdo: "",
          miras: "",
        },
      ];

      this.$emit("alteraLimpar", false);
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      cerametria: [
        {
          olhoDireito: "",
          olhoEsquerdo: "",
          miras: "",
        },
      ],
    };
  },

  methods: {
    createPDF(download) {
      let pdfName = "PrescricaoUltimoExame";
      var doc = new jsPDF();
      var linha = 85;

      doc.text("Cerametria", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.text("Técnica: AutoRefratômetro", 45, 68, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 25, linha, null, null);
      doc.text(this.cerametria[0].olhoDireito, 25, linha + 8, null, null);
      doc.text("Olho Esquerdo", 88, linha, null, null);
      doc.text(this.cerametria[0].olhoEsquerdo, 88, linha + 8, null, null);
      doc.text("Miras", 150, linha, null, null);
      doc.text(this.cerametria[0].miras, 150, linha + 8, null, null);

      doc.setFont("times", "italic");
      doc.text("Rua Geraldo Rodrigues Cunha, 162, Centro, Viçosa-MG", 80, 240);

      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },
    enviarCerametria() {
      this.$store.commit("CERAMETRIA", this.cerametria);
    },
  },
};
</script>

<style>
</style>