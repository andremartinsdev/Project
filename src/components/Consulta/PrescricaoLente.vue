<template>
  <div class="containerPrescri">
    <b-form inline>
      <b-input v-model="prescricaoLente.uuid" hidden></b-input>
      <label for="input-with-list" class="mr-2">OD :</label>
      <b-input
        v-model="prescricaoLente.od_esferico"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
      ></b-input>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.od_cilindrico"
        placeholder="CIL"
      ></b-input>
      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          v-model="prescricaoLente.od_eixo"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.od_av"
        placeholder="AV"
      ></b-input>
    </b-form>

    <b-form inline class="mt-4">
      <label for="input-with-list" size="sm" class="mr-2">OE :</label>
      <b-input
        v-model="prescricaoLente.oe_esferico"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="ESF"
        type="number"
        size="sm"
      ></b-input>
      <label class="sr-only">Name</label>
      <b-input
        size="sm"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="prescricaoLente.oe_cilindrico"
        placeholder="CIL"
      ></b-input>
      <label class="sr-only">Name</label>

      <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          size="sm"
          v-model="prescricaoLente.oe_eixo"
          placeholder="EIXO"
        ></b-input>
      </b-input-group>

      <b-input
        size="sm"
        v-model="prescricaoLente.oe_av"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="AV"
      ></b-input>
    </b-form>

    <div class="mt-3 ml-2">
      <label class="mr-3">LENTE :</label>
      <b-form-select size="sm" class="col-sm-6"></b-form-select>
    </div>

    <div class="mt-4 mb-2">
      <label>Observação</label>
      <b-form-textarea
        v-model="prescricaoLente.observacao"
        class="mt-2"
        id="textarea-rows"
        placeholder="Favor medir DNP com pupilômetro.
Retorno com 01 Ano"
        rows="4"
      ></b-form-textarea>
    </div>

    <div class="mt-2 p-4" style="display: flex; justify-content: flex-end">
      <b-button class="mr-3" pill variant="primary" @click="savePrescricao"
        >Salvar</b-button
      >
      <b-button @click="cancelar" pill>Cancelar</b-button>
      <b-button
        size="sm"
        class="mr-3 ml-2"
        variant="primary"
        @click="createPDF(false)"
        pill
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
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescicaoLente";
import AgendaService from "../../services/agenda";
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import { mapState } from "vuex";
import moment from "moment";

export default {
  props: {
    PrescricaoLenteProps: {
      type: Object,
    },
  },
  watch: {
    PrescricaoLenteProps() {
      this.prescricaoLente = this.PrescricaoLenteProps;
    },
  },
  data() {
    return {
      logoOlho: logoOlho,
      moldura: moldura,
      idConsulta: -1,
      dadosConsulta: {
        idPaciente: this.idPaciente,
        data: moment().format("YYYY-MM-DD"),
        titulo: "Prescrição Lente",
      },
      prescricaoLente: {
        idConsulta: "",
        idPaciente: "",
        uuid: 0,
        data: moment().format("YYYY-MM-DD"),
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        observacao: "",
      },
    };
  },

  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      uuidAgendamento: (state) => state.uuidAgendamento,
    }),
  },
  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    cancelar() {
      this.prescricaoLente = {
        idConsulta: "",
        idPaciente: "",
        uuid: "",
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        observacao: "",
      };
    },

    createPDF(download) {
      let pdfName = "Prescrição Óculos";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Esférico", "Cilíndrico", "Eixo", "Av"];
      doc.text("Prescrição Óculos", 105, 40, null, null, "center");
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
          doc.text(`${elemento} : `, 150, linha, null, null);
        }
        doc.html();

        switch (elemento) {
          case "Esférico":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoLente.od_esferico, 42, linha, null, null);
            doc.text(this.prescricaoLente.oe_esferico, 175, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Cilíndrico":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoLente.od_cilindrico, 52, linha, null, null);
            doc.text(
              this.prescricaoLente.oe_cilindrico,
              175,
              linha,
              null,
              null
            );
            doc.setTextColor(0);
            break;

          case "Eixo":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoLente.od_eixo, 45, linha, null, null);
            doc.text(this.prescricaoLente.oe_eixo, 172, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });
      doc.text(`Lente : `, 100, linha + 30, null, null);
      doc.text(`Observação`, 70, linha + 70, null, null);
      doc.text(this.prescricaoLente.observacao, 70, linha + 80, null, null);

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

    async savePrescricao() {
      try {
        if (this.prescricaoLente.uuid === 0) {
          this.dadosConsulta.idPaciente = this.idPaciente;
          const resultConsulta = await ConsultaService.save(this.dadosConsulta);
          this.idConsulta = resultConsulta.data.result.idConsulta[0];
          this.uuidConsulta = resultConsulta.data.result.uuid;
          this.prescricaoLente.idConsulta =
            resultConsulta.data.result.idConsulta[0];
          this.prescricaoLente.idPaciente = this.idPaciente;

          const resultPrescricao = await PrescricaoService.save(
            this.prescricaoLente
          );
          this.prescricaoLente.uuid = resultPrescricao.data.uuid.uuid;

          await AgendaService.updateIdConsultAtendido(this.uuidAgendamento, {
            atendido: true,
            idConsulta: this.idConsulta,
          });

          this.showAlert("success", "Prescrição Salva com Sucesso");
        } else {
          await PrescricaoService.update(
            this.prescricaoLente,
            this.prescricaoLente.uuid
          );
          this.showAlert("success", "Prescrição Atualizada com Sucesso");
        }
      } catch (error) {
        this.showAlert("success", "Ops! ocorreu um erro ao Salvar Prescrição ");
      }
    },
  },
};
</script>

<style>
</style>