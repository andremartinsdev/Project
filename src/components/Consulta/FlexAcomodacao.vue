<template>
  <div class="col-md-12">
    <label for="input-with-list" class="mr-2">Técnica : Flipper 40 cm</label>

    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input
              type="text"
              @change="enviarFlexDeAcomodacao"
              v-model="flexDeAcomodacao.OD"
              size="sm"
              class="form-control"
            ></b-input>
          </td>
          <td>Ciclos</td>
          <td>
            <b-input
              type="text"
              @change="enviarFlexDeAcomodacao"
              v-model="flexDeAcomodacao.CICLOS_OD"
              size="sm"
              class="form-control"
            ></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input
              type="text"
              @change="enviarFlexDeAcomodacao"
              v-model="flexDeAcomodacao.OE"
              size="sm"
              class="form-control"
            ></b-input>
          </td>
          <td>Ciclos</td>
          <td>
            <b-input
              type="text"
              @change="enviarFlexDeAcomodacao"
              v-model="flexDeAcomodacao.CICLOS_OE"
              size="sm"
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
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    flexProps: {
      type: Object,
    },
  },

  watch: {
    flexProps() {
      if (
        this.flexProps === undefined ||
        Object.keys(this.flexProps).length === 0
      ) {
        this.flexDeAcomodacao = {
          OD: "",
          OE: "",
          CICLOS_OD: "",
          CICLOS_OE: "",
        };
      } else {
        this.flexDeAcomodacao = this.flexProps;
        this.enviarFlexDeAcomodacao();
      }
    },
    Limpar() {
      this.flexDeAcomodacao = {
        OD: "",
        OE: "",
        CICLOS_OD: "",
        CICLOS_OE: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("FLEXIBILIDADE_ACOMODACAO", this.flexDeAcomodacao);
    },
  },

  data() {
    return {
      moldura : moldura,
      logoOlho: logoOlho,
      flexDeAcomodacao: {
        OD: "",
        OE: "",
        CICLOS_OD: "",
        CICLOS_OE: "",
      },
    };
  },

  methods: {
    createPDF(download) {
      let pdfName = "Amplitude de Acomodação";
      var doc = new jsPDF();
      var linha = 85;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Amplitude de Acomodação", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


      doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.OD, 52, linha, null, null).setTextColor(0);

      doc.text("Ciclos : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.CICLOS_OD, 42, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.OE, 177, linha, null, null).setTextColor(0);

      doc.text("Ciclos : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.CICLOS_OE, 162, linha+8, null, null).setTextColor(0);


      doc.setFont("times", "italic");
      doc.text("Rua Geraldo Rodrigues Cunha, 162, Centro, Viçosa-MG", 80, 240);

      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },
    enviarFlexDeAcomodacao() {
      this.$store.commit("FLEXIBILIDADE_ACOMODACAO", this.flexDeAcomodacao);
    },
  },
};
</script>

<style>
</style>