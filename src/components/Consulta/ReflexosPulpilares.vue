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
          <td>Fotomotor</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OD.FOTOMOTOR"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OE.FOTOMOTOR"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>

        <tr>
          <td>Consensual</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OD.CONSENSUAL"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OE.CONSENSUAL"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
        </tr>
        <tr>
          <td>Acomodativo</td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OD.ACOMODATIVO"
                size="sm"
              ></b-input>
            </b-input-group>
          </td>
          <td>
            <b-input-group size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                @change="enviarReflexosPulpilares"
                v-model="reflexosPulpilares.OE.ACOMODATIVO"
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
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import jsPDF from "jspdf";
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    reflexosProps: {
      type: Object,
    },
  },
  watch: {
    reflexosProps() {
      if (Object.keys(this.reflexosProps).length === 0) {
        this.reflexosPulpilares = {
          OD: {
            FOTOMOTOR: "",
            CONSENSUAL: "",
            ACOMODATIVO: "",
          },
          OE: {
            FOTOMOTOR: "",
            CONSENSUAL: "",
            ACOMODATIVO: "",
          },
        };
      } else {
        this.reflexosPulpilares = this.reflexosProps;
        this.enviarReflexosPulpilares();
      }
    },
    Limpar() {
      this.reflexosPulpilares = {
        OD: {
          FOTOMOTOR: "",
          CONSENSUAL: "",
          ACOMODATIVO: "",
        },
        OE: {
          FOTOMOTOR: "",
          CONSENSUAL: "",
          ACOMODATIVO: "",
        },
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("REFLEXO_PULPILAR", {});
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      reflexosPulpilares: {
        OD: {
          FOTOMOTOR: "",
          CONSENSUAL: "",
          ACOMODATIVO: "",
        },
        OE: {
          FOTOMOTOR: "",
          CONSENSUAL: "",
          ACOMODATIVO: "",
        },
      },
    };
  },
  methods: {
    createPDF(download) {
      let pdfName = "Reflexos Pulpilares";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Fotomotor", "Consensual", "Acomodativo"];
      doc.text("Reflexos Pulpilares", 105, 40, null, null, "center");
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
          case "Fotomotor":
            doc.setTextColor(0, 0, 255);
            doc.text(
              this.reflexosPulpilares.OD.FOTOMOTOR,
              42 + 7,
              linha,
              null,
              null
            );
            doc.text(
              this.reflexosPulpilares.OE.FOTOMOTOR,
              166 + 7,
              linha,
              null,
              null
            );
            doc.setTextColor(0);
            break;

          case "Consensual":
            doc.setTextColor(0, 0, 255);
            doc.text(
              this.reflexosPulpilares.OD.CONSENSUAL,
              52,
              linha,
              null,
              null
            );
            doc.text(
              this.reflexosPulpilares.OE.CONSENSUAL,
              175 + 2,
              linha,
              null,
              null
            );
            doc.setTextColor(0);
            break;

          case "Acomodativo":
            doc.setTextColor(0, 0, 255);
            doc.text(
              this.reflexosPulpilares.OD.ACOMODATIVO,
              45 + 8,
              linha,
              null,
              null
            );
            doc.text(
              this.reflexosPulpilares.OE.ACOMODATIVO,
              172 + 8,
              linha,
              null,
              null
            );
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

      doc.setFont("times", "italic");
      doc.text("Rua Geraldo Rodrigues Cunha, 162, Centro, Viçosa-MG", 80, 240);

      doc.addImage(this.moldura, "JPEG", 0, 230, 230, 70);
      doc.addImage(this.moldura, "JPEG", 220, -80, 230, 70, null, null, 180);
      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    enviarReflexosPulpilares() {
      this.$store.commit("REFLEXO_PULPILAR", this.reflexosPulpilares);
    },
  },
};
</script>

<style>
</style>