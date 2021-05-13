<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">OD</th>
          <th scope="col">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Papila</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.papila"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.papila"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Escavação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.escavacao"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.escavacao"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Mácula</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.macula"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.macula"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Fixação</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.fixacao"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.fixacao"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Cor</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.cor"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.cor"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Relação A/V</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.relacaoAv"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.relacaoAv"
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
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoDireito.obs"
              ></b-textarea>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-textarea
                size="sm"
                @change="enviarOftalmoscopia"
                v-model="oftalmoscopia[0].olhoEsquerdo.obs"
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
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    oftalmoProps: {
      type: [Array, Object],
    },
  },
  watch: {
    Limpar() {
      this.oftalmoscopia = [
        {
          olhoDireito: {
            papila: "",
            escavacao: "",
            macula: "",
            fixacao: "",
            cor: "",
            relacaoAv: "",
            obs: "",
          },
          olhoEsquerdo: {
            papila: "",
            escavacao: "",
            macula: "",
            fixacao: "",
            cor: "",
            relacaoAv: "",
            obs: "",
          },
        },
      ];
      this.$emit("alteraLimpar", false);
      this.$store.commit("OFTALMOSCOPIA", {});
    },

    oftalmoProps() {
      if (Object.keys(this.oftalmoProps).length === 0) {
        this.oftalmoscopia = [
          {
            olhoDireito: {
              papila: "",
              escavacao: "",
              macula: "",
              fixacao: "",
              cor: "",
              relacaoAv: "",
              obs: "",
            },
            olhoEsquerdo: {
              papila: "",
              escavacao: "",
              macula: "",
              fixacao: "",
              cor: "",
              relacaoAv: "",
              obs: "",
            },
          },
        ];
      } else {
        this.oftalmoscopia = this.oftalmoProps;
        this.enviarOftalmoscopia();
      }
    },
  },

  data() {
    return {
      logoOlho:logoOlho,
      moldura:moldura,
      oftalmoscopia: [
        {
          olhoDireito: {
            papila: "",
            escavacao: "",
            macula: "",
            fixacao: "",
            cor: "",
            relacaoAv: "",
            obs: "",
          },
          olhoEsquerdo: {
            papila: "",
            escavacao: "",
            macula: "",
            fixacao: "",
            cor: "",
            relacaoAv: "",
            obs: "",
          },
        },
      ],
    };
  },
  methods: {
    createPDF(download) {
      console.log(this.propsAnamnese2);
      let pdfName = "Oftalmoscopia";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Papila","Escavação", "Mácula", "Fixação", "Cor", "Relação A/V", "Observação"];
      doc.text("Oftalmoscopia", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 25, linha, null, null);
      doc.text("Olho Esquerdo", 150, linha, null, null);
      

      estrutura.forEach(elemento =>{
        linha+=8
        if(elemento === "Observação"){
          doc.text(`${elemento} : `, 25, linha+8, null, null);
        }else{
          doc.text(`${elemento} : `, 25, linha, null, null);
        }
        doc.html()

        switch (elemento) {
          case "Papila":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.papila, 42, linha, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.papila, 166, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Escavação":
             doc.setTextColor(0,0,255)
             doc.text(this.oftalmoscopia[0].olhoDireito.escavacao, 52, linha, null, null);
             doc.text(this.oftalmoscopia[0].olhoEsquerdo.escavacao, 175, linha, null, null);
             doc.setTextColor(0)
            break;

          case "Mácula":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.macula, 45, linha, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.macula, 172, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Fixação":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.fixacao, 45, linha, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.fixacao, 172, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Cor":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.cor, 38, linha, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.cor, 168, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Relação A/V":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.relacaoAv, 53, linha, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.relacaoAv, 178, linha, null, null);
            doc.setTextColor(0)
            break;

          case "Observação":
            doc.setTextColor(0,0,255)
            doc.text(this.oftalmoscopia[0].olhoDireito.obs, 35, linha + 15, null, null);
            doc.text(this.oftalmoscopia[0].olhoEsquerdo.obs, 158, linha + 15, null, null);
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
    
    enviarOftalmoscopia() {
      this.$store.commit("OFTALMOSCOPIA", this.oftalmoscopia);
    },
  },
};
</script>

<style>
</style>