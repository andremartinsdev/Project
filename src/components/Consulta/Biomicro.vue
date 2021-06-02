<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col">Estrutura</th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cílios</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.cilios"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.cilios"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Sobrancelhas</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.sombrancelha"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.sombrancelha"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Pálpebras</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.palpebra"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.palpebra"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Conjuntiva</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.conjuntiva"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.conjuntiva"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Esclerótica</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.esclerotica"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.esclerotica"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Córnea</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.cornea"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.cornea"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Íris</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.iris"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.iris"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Pupila</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.pupila"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.pupila"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Cristalino</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.cristalina"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.cristalina"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Câmara Anterior</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.camaraAnterior"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.camaraAnterior"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Obs</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoDireito.obs"
              ></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea
                size="sm"
                @change="enviarBiomicro"
                v-model="biomicro[0].olhoEsquerdo.obs"
              ></b-textarea>
            </b-input-group>
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
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import jsPDF from "jspdf";
import { mapState } from 'vuex'
import rodape from '../../services/rodape'
export default {
  props:{
    Limpar:{
      type: Boolean
    },
    biomicroProps: {
      type: [Array, Object]
    }
  },

   computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },

  watch:{
    biomicroProps(){
      if(Object.keys(this.biomicroProps).length === 0){
     this.biomicro = [
        {
          olhoDireito: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
          olhoEsquerdo: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
        },
      ]
      }else{
  this.biomicro = this.biomicroProps
      this.enviarBiomicro()
      }
      
    },
    Limpar(){
      this.$emit('alteraLimpar', false)
      this.biomicro = [
        {
          olhoDireito: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
          olhoEsquerdo: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
        },
      ]
    }
  },

  data() {
    return {
      logoOlho:logoOlho,
      moldura: moldura,
      biomicro: [
        {
          olhoDireito: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
          olhoEsquerdo: {
            cilios: '',
            sombrancelha: '',
            palpebra: '',
            conjuntiva: '',
            esclerotica: '',
            cornea: '',
            iris: '',
            pupila: '',
            cristalina: '',
            camaraAnterior: '',
            obs: ''
          },
        },
      ],
    };
  },

  methods: {
createPDF(download) {
      // console.log(this.propsAnamnese2);
      let pdfName = "Biomicro";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Cílios","Sobrancelhas", "Pálpebras", "Conjuntiva", "Esclerótica", "Córnea", "Íris", "Pulpila", "Cristalino", "Câmara Anterior", "Observação"];
      doc.text("Biomicroscopia", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 25, linha, null, null);
      doc.text("Olho Esquerdo", 150, linha, null, null);
      

      estrutura.forEach(elemento =>{
        linha+=8
        if(elemento === "Observação"){
          doc.text(`${elemento} : `, 50, linha+8, null, null);
        }else{
          doc.text(`${elemento} : `, 25, linha, null, null);
        }
        doc.html()

        switch (elemento) {
          case "Cílios":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.cilios, 40, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.cilios, 165, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Sobrancelhas":
             doc.setTextColor(0,0,255)
             doc.text(this.biomicro[0].olhoDireito.sombrancelha, 55, linha, null, null);
             doc.text(this.biomicro[0].olhoEsquerdo.sombrancelha, 180, linha, null, null);
             doc.setTextColor(0)
            break;

          case "Pálpebras":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.palpebra, 49, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.palpebra, 175, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Conjuntiva":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.conjuntiva, 49, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.conjuntiva, 175, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Esclerótica":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.esclerotica, 49, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.esclerotica, 175, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Córnea":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.cornea, 44, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.cornea, 170, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Íris":
            doc.setTextColor(0,0,255)
            doc.text(this.biomicro[0].olhoDireito.iris, 35, linha, null, null);
            doc.text(this.biomicro[0].olhoEsquerdo.iris, 162, linha, null, null);
            doc.setTextColor(0)
            break;
        
          case "Pulpila":
              doc.setTextColor(0,0,255)
              doc.text(this.biomicro[0].olhoDireito.pupila, 43, linha, null, null);
              doc.text(this.biomicro[0].olhoEsquerdo.pupila, 170, linha, null, null);
              doc.setTextColor(0)
              break;

          case "Câmara Anterior":
              doc.setTextColor(0,0,255)
              doc.text(this.biomicro[0].olhoDireito.camaraAnterior, 62, linha, null, null);
              doc.text(this.biomicro[0].olhoEsquerdo.camaraAnterior, 185, linha, null, null);
              doc.setTextColor(0)
              break;

          case "Observação":
              doc.setTextColor(0,0,255)
              doc.rect(25, linha, 80, 50);
              doc.text(this.biomicro[0].olhoDireito.obs, 30, linha+15, null, null);
              doc.rect(120, linha, 80, 50);
              doc.text(this.biomicro[0].olhoEsquerdo.obs, 125, linha+15, null, null);
              doc.setTextColor(0)
              break;

          
          default:
            break;
        }

      })
      linha = 85
      estrutura.forEach(elemento =>{
        linha+=8
        if(elemento === "Observação"){
          doc.text(`${elemento} : `, 147, linha+8, null, null);
        }else{
          doc.text(`${elemento} : `, 150, linha, null, null);
        }
      })


    rodape(doc, this.dadosClinica, this.uuidClinica)
      if(download){
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
      
    },

    enviarBiomicro(){
      this.$store.commit("BIOMICRO", this.biomicro)
    }
  }
};
</script>

<style>
</style>