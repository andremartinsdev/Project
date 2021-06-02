<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr>
              <td>OD</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.OD" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.AV_OD" size="sm" class="form-control" /></td>
            </tr>
            <tr>
              <td>OE</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.OE" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarSubjetivo" v-model="subjetivo.AV_OE" size="sm" class="form-control" /></td>
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
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    subjetivoProps: {
      type: Object
    }
  },

  watch:{
    subjetivoProps(){
      if(Object.keys(this.subjetivoProps).length != 0){
        this.subjetivo = this.subjetivoProps
        this.enviarSubjetivo();
      }
    },
    Limpar(){
      this.subjetivo = {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("SUBJETIVO", {})
    }
  },
  data(){
    return{
      logoOlho: logoOlho,
      moldura: moldura,
      subjetivo: {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },
   computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },
  methods:{
     createPDF(download) {
      let pdfName = "Subjetivo";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Subjetivo", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


       doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.subjetivo.OD, 52, linha, null, null).setTextColor(0);

      doc.text("AV : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.subjetivo.AV_OD, 35, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.subjetivo.OE, 179, linha, null, null).setTextColor(0);

      doc.text("AV : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.subjetivo.AV_OE, 155, linha+8, null, null).setTextColor(0);

     rodape(doc, this.dadosClinica, this.uuidClinica)
      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"))
    },

    enviarSubjetivo(){
      this.$store.commit("SUBJETIVO", this.subjetivo)
    }
  }
};
</script>

<style>
</style>