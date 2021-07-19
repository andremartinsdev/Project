<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">OD</th>
          <th class="text-center">OE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kappa</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarAvMotora"
                v-model="avMotora.OD.KAPPA"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarAvMotora"
                v-model="avMotora.OE.KAPPA"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Hirschberg</td>
          <td colspan="2">
            <textarea
              name="ava_mot_hir"
              size="sm"
              id="c_ava_mot_hir"
              v-model="avMotora.HIRSCHBERG"
              @change="enviarAvMotora"
              class="form-control"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>Ducções</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarAvMotora"
                v-model="avMotora.OD.DUCCOES"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarAvMotora"
                v-model="avMotora.OE.DUCCOES"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <!-- <tr>
          <td>Versões</td>
          <td>
            <div class="row">
              <div class="ml-4">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted1"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-2"
                  name="checkbox-2"
                  value="accepted2"
                ></b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="mr-5">
                <b-form-checkbox
                  id="checkbox-3"
                  name="checkbox-3"
                  value="accepted3"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-4"
                  name="checkbox-4"
                  value="accepted4"
                ></b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="ml-4">
                <b-form-checkbox
                  id="checkbox-5"
                  name="checkbox-5"
                  value="accepted5"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-6"
                  name="checkbox-6"
                  value="accepted6"
                ></b-form-checkbox>
              </div>
            </div>
          </td>
          <td>
            <div class="row">
              <div class="ml-4">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted1"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-2"
                  name="checkbox-2"
                  value="accepted2"
                ></b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="mr-5">
                <b-form-checkbox
                  id="checkbox-3"
                  name="checkbox-3"
                  value="accepted3"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-4"
                  name="checkbox-4"
                  value="accepted4"
                ></b-form-checkbox>
              </div>
            </div>
            <div class="row">
              <div class="ml-4">
                <b-form-checkbox
                  id="checkbox-5"
                  name="checkbox-5"
                  value="accepted5"
                ></b-form-checkbox>
              </div>
              <div>
                <b-form-checkbox
                  id="checkbox-6"
                  name="checkbox-6"
                  value="accepted6"
                ></b-form-checkbox>
              </div>
            </div>
          </td>
        </tr> -->
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
import { mapState } from "vuex";
import rodape from '../../services/rodape';
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    avMotoraProps: {
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
    avMotoraProps() {
      if (
        this.avMotoraProps === undefined ||
        Object.keys(this.avMotoraProps).length === 0
      ) {
        this.avMotora = {
          OD: {
            KAPPA: "",
            DUCCOES: "",
          },
          OE: {
            KAPPA: "",
            DUCCOES: "",
          },
          HIRSCHBERG: "",
        };
      } else {
        this.avMotora = this.avMotoraProps;
        this.enviarAvMotora();
      }
    },
    Limpar() {
      this.avMotora = {
        OD: {
          KAPPA: "",
          DUCCOES: "",
        },
        OE: {
          KAPPA: "",
          DUCCOES: "",
        },
        HIRSCHBERG: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("AV_MOTORA", this.avMotora);
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      avMotora: {
        OD: {
          KAPPA: "",
          DUCCOES: "",
        },
        OE: {
          KAPPA: "",
          DUCCOES: "",
        },
        HIRSCHBERG: "",
      },
    };
  },
  methods: {
   async createPDF(download) {
      let pdfName = "Reflexos Pulpilares";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Kappa", "Ducções"];
      doc.text("Avaliação Motora", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("Olho Direito", 25, linha, null, null);
      doc.text("Olho Esquerdo", 150, linha, null, null);

      estrutura.forEach((elemento) => {
        linha += 8;
        if (elemento === "Observação") {
          doc.text(`${elemento} : `, 25, linha + 8, null, null);
        } else {
          doc.text(`${elemento} : `, 25, linha, null, null);
        }
        doc.html();

        switch (elemento) {
          case "Kappa":
            doc.setTextColor(0, 0, 255);
            doc.text(this.avMotora.OD.KAPPA, 42 + 7, linha, null, null);
            doc.text(this.avMotora.OE.KAPPA, 166 + 7, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Ducções":
            doc.setTextColor(0, 0, 255);
            doc.text(this.avMotora.OD.DUCCOES, 45 + 8, linha, null, null);
            doc.text(this.avMotora.OE.DUCCOES, 172 + 8, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });

      doc.text("Hirschberg", 92, 150, null, null);
      doc.text(this.avMotora.HIRSCHBERG, 32, 160, null, null);
      doc.setTextColor(0);

      linha = 85;
      estrutura.forEach((elemento) => {
        linha += 8;
        if (elemento === "Observação") {
          doc.text(`${elemento} : `, 147, linha + 8, null, null);
        } else {
          doc.text(`${elemento} : `, 150, linha, null, null);
        }
      });
      await rodape(doc, this.dadosClinica, this.uuidClinica)
      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },
    enviarAvMotora() {
      this.$store.commit("AV_MOTORA", this.avMotora);
    },
  },
};
</script>

<style>
input[type="range"][orient="vertical"] {
  writing-mode: bt-lr; /* IE */
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 8px;
  height: 175px;
  padding: 0 5px;
}
</style>