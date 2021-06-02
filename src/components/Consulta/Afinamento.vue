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
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import { mapState } from 'vuex'
import baseUrl from '../../../vue.config'
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
      dadosClinica: (state) => state.dadosClinica
    })
  },

  methods: {
    createPDF(download) {
      let pdfName = "Afinamento";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Afinamento", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


       doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.OD, 52, linha, null, null).setTextColor(0);

      doc.text("AV : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.AVD, 35, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.OE, 179, linha, null, null).setTextColor(0);

      doc.text("AV : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.afinamento.AVE, 155, linha+8, null, null).setTextColor(0);

       doc.setFont("times", "italic");
      doc.text(`${this.dadosClinica.nomeClinica},`, 77, 270);
      doc.text(`${this.dadosClinica.endereco}, ${this.dadosClinica.numero},  ${this.dadosClinica.bairro},  ${this.dadosClinica.cidade},`, 47, 277);
      doc.text(`Telefone :  ${this.dadosClinica.telefone},`, 47, 285);
      doc.text(`CEP : ${this.dadosClinica.cep}`, 97, 285);

      doc.addImage(`${baseUrl.baseUrl}Clinica/image/logo/${this.uuidClinica}`, "JPEG", 3, 270, 40, 20);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      doc.addImage(this.moldura, "JPEG", 0, 248, 230, 70);
      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
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