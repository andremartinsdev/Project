<template>
  <div class="prescriUltimoExame">
    <label>Tipo de OptoTipo: Snellen</label>
    <b-card
      border-variant="info"
      header="S/C"
      header-bg-variant="info"
      header-text-variant="white"
      align="center"
    >
      <b-form inline>
        <label for="input-with-list" class="mr-2">OD :</label>
        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].sc.olhoDireito.vl"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            v-model="acuidade[0].sc.olhoDireito.vp"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            v-model="acuidade[0].sc.olhoDireito.ph"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">OE :</label>
        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].sc.olhoEsquerto.vl"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            v-model="acuidade[0].sc.olhoEsquerto.vp"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            v-model="acuidade[0].sc.olhoEsquerto.ph"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">AO :</label>
        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].sc.ao.vl"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            v-model="acuidade[0].sc.ao.vp"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            v-model="acuidade[0].sc.ao.ph"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
      </b-form>
    </b-card>

    <b-card
      border-variant="info"
      header="C/C"
      header-bg-variant="info"
      header-text-variant="white"
      align="center"
      class="mt-3"
    >
      <b-form inline>
        <label for="input-with-list" class="mr-2">OD :</label>

        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.olhoDireito.vl"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            v-model="acuidade[0].cc.olhoDireito.vp"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            v-model="acuidade[0].cc.olhoDireito.ph"
            @change="enviarAcuidade"
          ></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">OE :</label>
        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.olhoEsquerto.ph"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            @change="enviarAcuidade"
            v-model="acuidade[0].cc.olhoEsquerto.vp"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            @change="enviarAcuidade"
            v-model="acuidade[0].cc.olhoEsquerto.ph"
          ></b-input>
        </b-input-group>
      </b-form>

      <b-form inline class="mt-3">
        <label for="input-with-list" class="mr-2">AO :</label>
        <b-input
          size="sm"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="VL"
          v-model="acuidade[0].cc.ao.vl"
          @change="enviarAcuidade"
        ></b-input>
        <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="VP"
            @change="enviarAcuidade"
            v-model="acuidade[0].cc.ao.vp"
          ></b-input>
        </b-input-group>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            size="sm"
            placeholder="PH"
            @change="enviarAcuidade"
            v-model="acuidade[0].cc.ao.ph"
          ></b-input>
        </b-input-group>
      </b-form>
    </b-card>

    <div class="mt-2 p-4" style="display: flex; justify-content: center">
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
import moldura from "../../assets/moldura.png";
import logoOlho from "../../assets/LogoOlho.png";
import jsPDF from "jspdf";
import { mapState } from 'vuex'
// import baseUrl from '../../../vue.config'
import { http } from '../../services/config';

export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    acuidadeProps: {
      type: [Object, Array],
    },
    Visualizar: {
      type: Boolean,
    },
  },
  computed:{
    ...mapState({
      dadosClinica: (state) => state.dadosClinica
    })
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      acuidade: [
        {
          sc: {
            olhoDireito: {
              vl: "",
              vp: "",
              ph: "",
            },
            olhoEsquerto: {
              vl: "",
              vp: "",
              ph: "",
            },
            ao: {
              vl: "",
              vp: "",
              ph: "",
            },
          },

          cc: {
            olhoDireito: {
              vl: "",
              vp: "",
              ph: "",
            },
            olhoEsquerto: {
              vl: "",
              vp: "",
              ph: "",
            },
            ao: {
              vl: "",
              vp: "",
              ph: "",
            },
          },
        },
      ],
    };
  },

  watch: {
    acuidadeProps() {
      /*console.log(this.acuidadeProps)
     if(Object.keys(this.acuidadeProps).length != 0){
       this.acuidade = [this.acuidadeProps]
       this.enviarAcuidade();
       console.log(this.acuidade)
     }else{
       console.log("teeeeeeeeeeeeeeeeeeee")
     }*/

      this.acuidade = [this.acuidadeProps];
      if (Object.keys(this.acuidade[0]).length === 0) {
        this.acuidade = [
          {
            sc: {
              olhoDireito: {
                vl: "",
                vp: "",
                ph: "",
              },
              olhoEsquerto: {
                vl: "",
                vp: "",
                ph: "",
              },
              ao: {
                vl: "",
                vp: "",
                ph: "",
              },
            },

            cc: {
              olhoDireito: {
                vl: "",
                vp: "",
                ph: "",
              },
              olhoEsquerto: {
                vl: "",
                vp: "",
                ph: "",
              },
              ao: {
                vl: "",
                vp: "",
                ph: "",
              },
            },
          },
        ];
      }
      this.enviarAcuidade();
    },
    Visualizar() {
      // console.log("entrrrrou acuidade");
    },

    Limpar() {
      this.acuidade = [
        {
          sc: {
            olhoDireito: {
              vl: "",
              vp: "",
              ph: "",
            },
            olhoEsquerto: {
              vl: "",
              vp: "",
              ph: "",
            },
            ao: {
              vl: "",
              vp: "",
              ph: "",
            },
          },

          cc: {
            olhoDireito: {
              vl: "",
              vp: "",
              ph: "",
            },
            olhoEsquerto: {
              vl: "",
              vp: "",
              ph: "",
            },
            ao: {
              vl: "",
              vp: "",
              ph: "",
            },
          },
        },
      ];
      this.$emit("alteraLimpar", false);
      this.$store.commit("ACUIDADE", this.acuidade);
    },
  },
  methods: {
    enviarAcuidade() {
      this.$store.commit("ACUIDADE", this.acuidade);
    },

    createPDF(download) {
      let pdfName = "Anamnese";
      var doc = new jsPDF();
      var linha = 85;
      doc.text("Tonometria", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.setDrawColor(0, 0, 255);
      doc.rect(25, 58 + 30, 40, 35); // draw red lines
      doc.rect(25, 95 + 30, 40, 35); // draw red lines
      doc.rect(25, 132 + 30, 40, 35); // draw red lines

      doc.rect(150, 58 + 30, 40, 35); // draw red lines
      doc.rect(150, 95 + 30, 40, 35); // draw red lines
      doc.rect(150, 132 + 30, 40, 35); // draw red lines

      doc.text("S/C", 35, linha - 3, null, null);
      doc.text("C/C", 160, linha - 3, null, null);
      Object.keys(this.acuidade[0].cc.olhoDireito).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("Olho Direito", 157, linha, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 160, linha + 10, null, null);
        doc.text(
          ` : ${this.acuidade[0].cc.olhoDireito[element]} `,
          168,
          linha + 10,
          null,
          null
        );
      });

      Object.keys(this.acuidade[0].cc.olhoEsquerto).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("Olho Esquerdo", 155, linha + 13, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 160, linha + 23, null, null);
        doc.text(
          ` : ${this.acuidade[0].cc.olhoEsquerto[element]} `,
          168,
          linha + 23,
          null,
          null
        );
      });

      Object.keys(this.acuidade[0].cc.ao).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("AO", 160, linha + 27, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 160, linha + 35, null, null);
        doc.text(
          ` : ${this.acuidade[0].cc.ao[element]} `,
          168,
          linha + 35,
          null,
          null
        );
      });

      linha = 85;
      Object.keys(this.acuidade[0].sc.olhoDireito).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("Olho Direito", 35, linha, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 35, linha + 10, null, null);
        doc.text(
          ` : ${this.acuidade[0].sc.olhoDireito[element]} `,
          43,
          linha + 10,
          null,
          null
        );
      });

      Object.keys(this.acuidade[0].sc.olhoEsquerto).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("Olho Esquerdo", 33, linha + 13, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 35, linha + 23, null, null);
        doc.text(
          ` : ${this.acuidade[0].sc.olhoEsquerto[element]} `,
          43,
          linha + 23,
          null,
          null
        );
      });

      Object.keys(this.acuidade[0].sc.ao).map((element, index) => {
        linha += 8;
        if (index === 0) {
          doc.setTextColor(0, 0, 255);
          doc.text("AO", 35, linha + 27, null, null);
        }
        doc.setTextColor(0);
        doc.text(element.toUpperCase(), 35, linha + 35, null, null);
        doc.text(
          ` : ${this.acuidade[0].sc.ao[element]} `,
          43,
          linha + 35,
          null,
          null
        );
      });
      
     doc.setFont("times", "italic");
      doc.text(`${this.dadosClinica.nomeClinica},`, 77, 270);
      doc.text(`${this.dadosClinica.endereco}, ${this.dadosClinica.numero},  ${this.dadosClinica.bairro},  ${this.dadosClinica.cidade},`, 47, 277);
      doc.text(`Telefone :  ${this.dadosClinica.telefone},`, 47, 285);
      doc.text(`CEP : ${this.dadosClinica.cep}`, 97, 285);

      doc.addImage(`${http.prototype.constructor.defaults.baseURL}Clinica/image/logo/${this.uuidClinica}`, "JPEG", 3, 270, 40, 20);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      doc.addImage(this.moldura, "JPEG", 0, 248, 230, 70);
      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },
  },
};
</script>

<style>
.prescriUltimoExame {
  margin: 50px;
}
</style>