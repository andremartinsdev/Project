<template>
  <div class="panel-body">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th class="text-center"></th>
              <th class="text-center">Esférico</th>
              <th class="text-center">Cilíndrico</th>
              <th class="text-center">Eixo</th>
              <th class="text-center">AV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OD</td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  v-model="rxFinal.OD.ESFERICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  max="0"
                  v-model="rxFinal.OD.CILINDRICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control"
                  step="5"
                  min="0"
                  max="360"
                  v-model="rxFinal.OD.EIXO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="1"
                  v-model="rxFinal.OD.AV"
                  @change="enviarRxFinal"
                />
              </td>
            </tr>
            <tr>
              <td>OE</td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  v-model="rxFinal.OE.ESFERICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="0.25"
                  max="0"
                  v-model="rxFinal.OE.CILINDRICO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control"
                  step="5"
                  min="0"
                  max="360"
                  v-model="rxFinal.OE.EIXO"
                  @change="enviarRxFinal"
                />
              </td>
              <td>
                <b-input
                  type="number"
                  size="sm"
                  class="form-control num"
                  step="1"
                  v-model="rxFinal.OE.AV"
                  @change="enviarRxFinal"
                />
              </td>
            </tr>
            <tr>
              <td>Adição</td>
              <td colspan="2">
                <b-input
                  type="text"
                  v-model="rxFinal.ADICAO"
                  @change="enviarRxFinal"
                  size="sm"
                  class="form-control"
                />
              </td>
              <td>AV. Perto</td>
              <td>
                <b-input
                  type="text"
                  v-model="rxFinal.AV_PERTO"
                  @change="enviarRxFinal"
                  size="sm"
                  class="form-control"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="c_rx_fin_tip_len">Tipo lente</label>
          <textarea
            name="rx_fin_tip_len"
            id="c_rx_fin_tip_len"
            class="form-control"
            v-model="rxFinal.TIPO_LENTE"
            @change="enviarRxFinal"
          ></textarea>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="c_rx_fin_tra">Tratamento</label>
          <textarea
            name="rx_fin_tra"
            id="c_rx_fin_tra"
            class="form-control"
            v-model="rxFinal.TRATAMENTO"
            @change="enviarRxFinal"
          ></textarea>
        </div>
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
import rodape from '../../services/rodape'
import { mapState } from 'vuex'
export default {
  props: {
    Limpar: {
      type: Boolean,
    },
    rxFinalProps: {
      type: Object,
    },
  },
  watch: {
    rxFinalProps() {
      if (Object.keys(this.rxFinalProps).length != 0) {
        this.rxFinal = this.rxFinalProps;
        this.enviarRxFinal();
      }
    },
    Limpar() {
      this.rxFinal = {
        OD: {
          ESFERICO: "",
          CILINDRICO: "",
          EIXO: "",
          AV: "",
        },
        OE: {
          ESFERICO: "",
          CILINDRICO: "",
          EIXO: "",
          AV: "",
        },
        AV_PERTO: "",
        ADICAO: "",
        TIPO_LENTE: "",
        TRATAMENTO: "",
      };
      this.$emit("alteraLimpar", false);
      this.$store.commit("RX_FINAL", {});
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      rxFinal: {
        OD: {
          ESFERICO: "",
          CILINDRICO: "",
          EIXO: "",
          AV: "",
        },
        OE: {
          ESFERICO: "",
          CILINDRICO: "",
          EIXO: "",
          AV: "",
        },
        AV_PERTO: "",
        ADICAO: "",
        TIPO_LENTE: "",
        TRATAMENTO: "",
      },
    };
  },

   computed: {
    ...mapState({
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },

  methods: {
    async createPDF(download) {
      // let pdfName = "Adição";
      var doc = new jsPDF();
      var linha = 90;
      //var estrutura = ["RFN", "RFP"];
      doc.text("RxFinal", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 90, 55, 25, 15);

      doc
        .setTextColor(0, 0, 255)
        .text("Olho Direito", 52, linha, null, null)
        .setTextColor(0);
      linha += 8;
      doc.text(`Esferico : ${this.rxFinal.OD.ESFERICO}`, 52, linha, null, null);
      linha += 8;
      doc.text(
        `Cílindrico : ${this.rxFinal.OD.CILINDRICO}`,
        52,
        linha,
        null,
        null
      );
      linha += 8;
      doc.text(`Eixo : ${this.rxFinal.OD.CILINDRICO}`, 52, linha, null, null);
      linha += 8;
      doc
        .text(`AV : ${this.rxFinal.OD.CILINDRICO}`, 52, linha, null, null)
        .setTextColor(0);
      linha += 8;

      linha = 90;
      doc
        .setTextColor(0, 0, 255)
        .text("Olho Esquerdo : ", 145, linha, null, null)
        .setTextColor(0);
      linha += 8;
      doc.text(
        `Esferico : ${this.rxFinal.OE.ESFERICO}`,
        145,
        linha,
        null,
        null
      );
      linha += 8;
      doc.text(
        `Cílindrico : ${this.rxFinal.OE.CILINDRICO}`,
        145,
        linha,
        null,
        null
      );
      linha += 8;
      doc.text(`Eixo : ${this.rxFinal.OE.EIXO}`, 145, linha, null, null);
      linha += 8;
      doc.text(`AV : ${this.rxFinal.OE.AV}`, 145, linha, null, null);
      linha += 10;

      doc.text(`Adição : ${this.rxFinal.ADICAO}`, 52, linha + 20, null, null);
      doc.text(
        `Av. Perto : ${this.rxFinal.AV_PERTO}`,
        145,
        linha + 20,
        null,
        null
      );
      linha += 40;
      doc
        .setTextColor(0, 0, 255)
        .text(`Tipo Lente`, 52, linha, null, null)
        .setTextColor(0);
      doc.text(this.rxFinal.TIPO_LENTE, 52, linha + 8, null, null);
      doc
        .setTextColor(0, 0, 255)
        .text(`Tratamento `, 145, linha, null, null)
        .setTextColor(0);
      doc.text(this.rxFinal.TRATAMENTO, 145, linha + 8, null, null);

     await rodape(doc, this.dadosClinica, this.uuidClinica)
      if (download) {
        doc.save("RxFinal.pdf");
        return;
      }
      window.open(doc.output("bloburl"));
      //doc.save(pdfName + ".pdf");
    },
    enviarRxFinal() {
      this.$store.commit("RX_FINAL", this.rxFinal);
    },
  },
};
</script>

<style>
</style>