<template>
  <div>
    <table class="table table-sm table-borderless">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col">S/C</th>
          <th scope="col">C/C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OR</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.SC.OR"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.CC.OR"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Luz</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.SC.LUZ"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.CC.LUZ"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Filtro</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.SC.FILTRO"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarPpc"
                v-model="ppc.CC.FILTRO"
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
import logoOlho from "../../assets/LogoOlho.jpg";
import moldura from "../../assets/moldura.png";
import rodape from "../../services/rodape";
import { mapState } from "vuex";
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    ppcProps: {
      type: Object,
    },
  },

  computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica,
    }),
  },

  watch: {
    ppcProps() {
      if (Object.keys(this.ppcProps).length === 0) {
        this.ppc = {
          SC: {
            OR: "",
            LUZ: "",
            FILTRO: "",
          },
          CC: {
            OR: "",
            LUZ: "",
            FILTRO: "",
          },
        };
      } else {
        this.ppc = this.ppcProps;
        this.enviarPpc();
      }
    },
    Limpar() {
      this.ppc = {
        SC: {
          OR: "",
          LUZ: "",
          FILTRO: "",
        },
        CC: {
          OR: "",
          LUZ: "",
          FILTRO: "",
        },
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("PPC", this.ppc);
    },
  },
  data() {
    return {
      moldura: moldura,
      logoOlho: logoOlho,
      ppc: {
        SC: {
          OR: "",
          LUZ: "",
          FILTRO: "",
        },
        CC: {
          OR: "",
          LUZ: "",
          FILTRO: "",
        },
      },
    };
  },

  methods: {
    async createPDF(download) {
      let pdfName = "Reflexos Pulpilares";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["OR", "Luz", "Filtro"];
      doc.text("Reflexos Pulpilares", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
       doc.addImage(this.logoOlho, "JPEG", 70, 50, 55, 25);
      doc.text("S/C", 25, linha, null, null);
      doc.text("C/C", 150, linha, null, null);

      estrutura.forEach((elemento) => {
        linha += 8;
        if (elemento === "Observação") {
          doc.text(`${elemento} : `, 25, linha + 8, null, null);
        } else {
          doc.text(`${elemento} : `, 25, linha, null, null);
        }
        doc.html();

        switch (elemento) {
          case "OR":
            doc.setTextColor(0, 0, 255);
            doc.text(this.ppc.SC.OR, 40, linha, null, null);
            doc.text(this.ppc.CC.OR, 165, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Luz":
            doc.setTextColor(0, 0, 255);
            doc.text(this.ppc.SC.LUZ, 40, linha, null, null);
            doc.text(this.ppc.CC.LUZ, 165, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Filtro":
            doc.setTextColor(0, 0, 255);
            doc.text(this.ppc.SC.FILTRO, 40, linha, null, null);
            doc.text(this.ppc.CC.FILTRO, 165, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });
      linha = 85;
      estrutura.forEach((elemento) => {
        linha += 8;
        if (elemento === "Observação") {
          doc.text(`${elemento} : `, 147, linha + 8, null, null);
        } else {
          doc.text(`${elemento} : `, 150, linha, null, null);
        }
      });

      await rodape(doc, this.dadosClinica, this.uuidClinica);
      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    enviarPpc() {
      this.$store.commit("PPC", this.ppc);
    },
  },
};
</script>

<style>
</style>