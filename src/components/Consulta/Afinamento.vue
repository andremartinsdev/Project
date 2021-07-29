<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr>
              <td>OD</td>
              <td>
                <b-input
                  type="text"
                  v-model="afinamento.OD"
                  size="sm"
                  @change="enviarAfinamento"
                  class="form-control"
                />
              </td>
              <td>AV</td>
              <td>
                <b-input
                  type="text"
                  size="sm"
                  v-model="afinamento.AVD"
                  @change="enviarAfinamento"
                  class="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>OE</td>
              <td>
                <b-input
                  type="text"
                  size="sm"
                  v-model="afinamento.OE"
                  @change="enviarAfinamento"
                  class="form-control"
                />
              </td>
              <td>AV</td>
              <td>
                <b-input
                  type="text"
                  size="sm"
                  v-model="afinamento.AVE"
                  @change="enviarAfinamento"
                  class="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
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
import { mapState } from 'vuex'
import rodape from '../../services/rodape';
// import baseUrl from '../../../vue.config'
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    afinamentoProps: {
      type: Object
    }
  },
  watch: {
    afinamentoProps(){
      if(Object.keys(this.afinamentoProps).length != 0){
        this.afinamento = this.afinamentoProps
        this.enviarAfinamento();
      }
    },
    Limpar() {
      this.afinamento = {
        OD: "",
        AVD: "",
        OE: "",
        AVE: "",
      };
      this.$emit('alteraLimpar', false)
      this.$store.commit("AFINAMENTO", {});
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      afinamento: {
        OD: "",
        AVD: "",
        OE: "",
        AVE: "",
      },
    };
  },
      computed:{
    ...mapState({
     dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    })
  },

  methods: {
    async createPDF(download) {
      let pdfName = "Afinamento";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Afinamento", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
       doc.addImage(this.logoOlho, "JPEG", 70, 50, 55, 25);


       doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.OD, 52, linha, null, null).setTextColor(0);

      doc.text("AV : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.AVD, 35, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.OE, 179, linha, null, null).setTextColor(0);

      doc.text("AV : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.AVE, 155, linha+8, null, null).setTextColor(0);

       await rodape(doc, this.dadosClinica, this.uuidClinica)

      if(download === true){
        doc.save(pdfName + ".pdf");
        return;
      }
       window.open(doc.output("bloburl"));
    },


    enviarAfinamento() {
      this.$store.commit("AFINAMENTO", this.afinamento);
    },
  },
};
</script>

<style>
</style>