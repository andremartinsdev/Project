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
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
import logoOlho from "../../assets/LogoOlho.jpg";
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

  computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
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
   async createPDF(download) {
      let pdfName = "Amplitude de Acomodação";
      var doc = new jsPDF();
      var linha = 85;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Amplitude de Acomodação", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
       doc.addImage(this.logoOlho, "JPEG", 70, 50, 55, 25);


      doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.OD, 52, linha, null, null).setTextColor(0);

      doc.text("Ciclos : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.CICLOS_OD, 42, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.OE, 177, linha, null, null).setTextColor(0);

      doc.text("Ciclos : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.flexDeAcomodacao.CICLOS_OE, 162, linha+8, null, null).setTextColor(0);

     await rodape(doc, this.dadosClinica, this.uuidClinica)
      
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