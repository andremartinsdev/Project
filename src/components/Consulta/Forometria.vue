<template>
  <div class="col-md-12">
    <div class="form-group">
      <label for="c_foro_tec" class="col-md-1 control-label">Técnica</label>
      <div class="col-md-11">
        <b-input type="text" @change="enviarForometria" v-model="forometria.TECNICA" size="sm" class="form-control" />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">S/C</th>
          <th class="text-center">C/C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Longe</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.LONGE" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.LONGE" size="sm" class="form-control" /></td>
        </tr>
        <tr>
          <td>40 cm</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.CM40" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.CM40" size="sm" class="form-control" /></td>
        </tr>
        <tr>
          <td>20 cm</td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.SC.CM20" size="sm" class="form-control" /></td>
          <td><b-input type="text" @change="enviarForometria" v-model="forometria.CC.CM20" size="sm" class="form-control" /></td>
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
import { mapState } from 'vuex'
import rodape from '../../services/rodape'


export default {
  props:{
    Limpar:{
      type: Boolean
    },
    forometriaProps: {
      type: Object
    }
  },

  watch:{
    forometriaProps(){
      if(Object.keys(this.forometriaProps).length != 0){
        this.forometria = this.forometriaProps
        this.enviarForometria();
      }
    },
    Limpar(){
      this.forometria = {
        SC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        CC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        TECNICA:''
      }
      this.$emit('alteraLimpar', false)
      this.$store.commit("FOROMETRIA", {})
    }
  },

  data(){
    return{
      logoOlho: logoOlho,
      moldura: moldura,
      forometria:{
        SC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        CC:{
          LONGE:'',
          CM40:'',
          CM20:''
        },
        TECNICA:''
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
      let pdfName = "Retinoscopia";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("Retinoscopia Estática", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);


      doc.setTextColor(0,0,255).text("S/C", 55, linha-5, null, null).setTextColor(0);
      linha += 8
      doc.text(`Longe : ${this.forometria.SC.LONGE}`, 52, linha, null, null).setTextColor(0);
      linha += 8
      doc.text(`40 Cm : ${this.forometria.SC.CM40}`, 52, linha, null, null).setTextColor(0);
      linha += 8
      doc.text(`20 Cm : ${this.forometria.SC.CM20}`, 52, linha, null, null).setTextColor(0);

      linha = 90;
      doc.setTextColor(0,0,255).text("C/C", 132, linha-5, null, null).setTextColor(0);
      linha += 8
      doc.text(`Longe : ${this.forometria.CC.LONGE}`, 130, linha, null, null).setTextColor(0);
      linha += 8
      doc.text(`40 Cm : ${this.forometria.CC.CM40}`, 130, linha, null, null).setTextColor(0);
      linha += 8
      doc.text(`20 Cm : ${this.forometria.CC.CM20}`, 130, linha, null, null).setTextColor(0);

      doc.text(`Técnica : ${this.forometria.TECNICA}`, 92, 150, null, null);

     rodape(doc, this.dadosClinica, this.uuidClinica)

      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },
    enviarForometria(){
      this.$store.commit("FOROMETRIA", this.forometria)
    }
  }
  
};
</script>

<style>
</style>