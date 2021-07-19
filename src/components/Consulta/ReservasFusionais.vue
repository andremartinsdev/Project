<template>
  <div>
    <label for="input-with-list" class="mr-2">Técnica :</label>

    <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input
        @change="enviarReservasFusionais"
        v-model="reservasFusionais.TECNICA"
        size="sm"
      ></b-input>
    </b-input-group>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">VL</th>
          <th scope="col">VP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RFN</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="reservasFusionais.VL.RFN"
                size="sm"
                @change="enviarReservasFusionais"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="reservasFusionais.VP.RFN"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>RFP</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="reservasFusionais.VL.RFP"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="reservasFusionais.VP.RFP"
                @change="enviarReservasFusionais"
                size="sm"
              ></b-input>
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
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    reservasProps: {
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
    reservasProps() {
      if (Object.keys(this.reservasProps).length === 0) {
        this.reservasFusionais = {
          VL: {
            RFN: "",
            RFP: "",
          },
          VP: {
            RFN: "",
            RFP: "",
          },
          TECNICA: "",
        };
      } else {
        this.reservasFusionais = this.reservasProps;
        this.enviarReservasFusionais();
      }
    },
    Limpar() {
      this.reservasFusionais = {
        VL: {
          RFN: "",
          RFP: "",
        },
        VP: {
          RFN: "",
          RFP: "",
        },
        TECNICA: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("RESERVAS_FUSIONAIS", {});
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      reservasFusionais: {
        VL: {
          RFN: "",
          RFP: "",
        },
        VP: {
          RFN: "",
          RFP: "",
        },
        TECNICA: "",
      },
    };
  },

  methods: {
   async createPDF(download) {
      let pdfName = "Reservas Fusionais";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["RFN", "RFP"];
      doc.text("Reservas Fusionais", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);
      doc.text("VL", 25, linha, null, null);
      doc.text("VP", 150, linha, null, null);

      estrutura.forEach((elemento) => {
        linha += 8;
        if (elemento === "Observação") {
          doc.text(`${elemento} : `, 25, linha + 8, null, null);
        } else {
          doc.text(`${elemento} : `, 25, linha, null, null);
        }
        doc.html();

        switch (elemento) {
          case "RFN":
            doc.setTextColor(0, 0, 255);
            doc.text(this.reservasFusionais.VL.RFN, 38, linha, null, null);
            doc.text(this.reservasFusionais.VP.RFN, 163, linha, null, null);
            doc.setTextColor(0);
            break;

          case "RFP":
            doc.setTextColor(0, 0, 255);
            doc.text(this.reservasFusionais.VL.RFP, 38, linha, null, null);
            doc.text(this.reservasFusionais.VP.RFP, 163, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });

      doc.text("Técnica :", 92, 150, null, null);
      doc.text(this.reservasFusionais.TECNICA, 32, 160, null, null);
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

    enviarReservasFusionais() {
      this.$store.commit("RESERVAS_FUSIONAIS", this.reservasFusionais);
    },
  },
};
</script>

<style>
</style>