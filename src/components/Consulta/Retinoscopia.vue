<template>
  <div class="col-md-12">
    <table class="table">
      <tbody>
        <tr>
          <td>OD</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.OD" class="form-control"></b-input>
          </td>
          <td>AV</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.AV_OD" class="form-control"></b-input>
          </td>
        </tr>
        <tr>
          <td>OE</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.OE" class="form-control"></b-input>
          </td>
          <td>AV</td>
          <td>
            <b-input type="text" size="sm" @change="enviarRetinoscopia" v-model="retinoscopia.AV_OE" class="form-control"></b-input>
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
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    retinoscopiaProps: {
      type: Object
    }
  },
  computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },
  watch:{
    retinoscopiaProps(){
      if(Object.keys(this.retinoscopiaProps).length === 0 || Object.keys(this.retinoscopiaProps) === null || Object.keys(this.retinoscopiaProps) === undefined){
         this.retinoscopia = {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
      }else{
        this.retinoscopia = this.retinoscopiaProps
        this.enviarRetinoscopia();
      }
    },
    Limpar(){
      this.retinoscopia = {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("RETINOSCOPIA", {})
    }
  },
  data(){
    return{
      logoOlho: logoOlho,
      moldura: moldura,
      retinoscopia:{
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },

  methods:{
     createPDF(download) {
      let pdfName = "Retinoscopia";
      var doc = new jsPDF();
      var linha = 85;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Retinoscopia Estática", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


      doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.retinoscopia.OD, 52, linha, null, null).setTextColor(0);

      doc.text("AV : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.retinoscopia.AV_OD, 35, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.retinoscopia.OE, 179, linha, null, null).setTextColor(0);

      doc.text("AV : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.retinoscopia.AV_OE, 155, linha+8, null, null).setTextColor(0);


     rodape(doc, this.dadosClinica, this.uuidClinica)

      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"))
    },
    enviarRetinoscopia(){
      this.$store.commit("RETINOSCOPIA", this.retinoscopia)
    }
  }
};
</script>

<style>
</style>