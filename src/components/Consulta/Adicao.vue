<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <tr>
              <td>OD</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.OD" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.AV_OD" size="sm" class="form-control" /></td>
            </tr>
            <tr>
              <td>OE</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.OE" size="sm" class="form-control" /></td>
              <td>AV</td>
              <td><b-input type="text" @change="enviarAdicao" v-model="adicao.AV_OE" size="sm" class="form-control" /></td>
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
// import baseUrl from '../../../vue.config'
import rodape from '../../services/rodape';
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    adicaoProps:{
      type: Object
    }
  },
  
      computed:{
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    })
  },
  watch:{
    adicaoProps(){
      if(Object.keys(this.adicaoProps).length != 0){
        this.adicao = this.adicaoProps
        this.enviarAdicao();
      }
    },
    Limpar(){
      this.adicao = {
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("ADICAO", {})
    
    }
  },
  data(){
    return{
      logoOlho: logoOlho,
      moldura: moldura,
      adicao:{
        OD:'',
        OE:'',
        AV_OD:'',
        AV_OE:''
      }
    }
  },

  

  methods:{
    async createPDF(download) {
      let pdfName = "Adição";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Adição", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


       doc.text("Olho Direito : ", 25, linha, null, null).setTextColor(0,0,255);
      doc.text(this.adicao.OD, 52, linha, null, null).setTextColor(0);

      doc.text("AV : ", 25, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.adicao.AV_OD, 35, linha+8, null, null).setTextColor(0);

      doc.text("Olho Esquerdo : ", 145, linha, null, null).setTextColor(0,0,255);
      doc.text(this.adicao.OE, 179, linha, null, null).setTextColor(0);

      doc.text("AV : ", 145, linha+8, null, null).setTextColor(0,0,255);
      doc.text(this.adicao.AV_OE, 155, linha+8, null, null).setTextColor(0);

       await rodape(doc, this.dadosClinica, this.uuidClinica)
   
     
      if(download === true){
        doc.save(pdfName + ".pdf");
        return;
      }

      window.open(doc.output("bloburl"));
      
    },
    enviarAdicao(){
      this.$store.commit("ADICAO", this.adicao)
    }
  }
};
</script>

<style>
</style>