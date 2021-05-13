<template>
  <div class="containerPrescri">
    <b-card no-body class="mb-5">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-pesquisa variant="info"
          >Pesquisar Prescrições para Óculos</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-pesquisa"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <div>
            <label for="">Selecione o Paciente</label>
            <b-form-select
              v-model="pacienteSelected"
              :options="pacientes"
              size="sm"
              class="mb-3"
              value-field="uuid"
              text-field="nomePaciente"
              disabled-field="notEnabled"
              @change="testePaciente"
            ></b-form-select>
            <div>
              <div style="width: 100%">
                <div style="width: 100%">
                  <label for="example-datepicker">Data Inicial</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    size="sm"
                    v-model="dataInicial"
                    class="mb-2 col-sm-3"
                     placeholder="Data não Informada"
                  ></b-form-datepicker>
                </div>

                <div>
                  <label for="example-datepicker">Data Final</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    size="sm"
                    v-model="dataFinal"
                    class="mb-2 col-sm-3"
                    placeholder="Data não Informada"
                  ></b-form-datepicker>
                </div>
                <b-button
                  variant="primary"
                  size="sm"
                  class="mb-4 mt-2"
                  @click="readPrescricaoPesquisa"
                  >Pesquisar</b-button
                >
              </div>
            </div>
          </div>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Nome Paciente</th>
                <th scope="col">Data Consulta</th>
                <th scope="col">Visualizar</th>
                <th scope="col">Imprimir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prescri in this.prescricoes" :key="prescri.uuid">
                <th>{{ prescri.nomePaciente }}</th>
                <td>{{ prescri.data }}</td>
                <td>
                  <b-button
                    variant="primary"
                    size="sm"
                    @click="readPrescricaoUuid(prescri.uuid)"
                  >
                    Visualizar
                  </b-button>
                </td>
                <td>
                  <b-button
                    variant="primary"
                    size="sm"
                    @click="imprimirPrescri(prescri.uuid)"
                  >
                    Imprimir
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >Precição para Óculos</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-form inline>
            <b-input hidden v-model="prescricaoOculos.uuid"></b-input>
            <label for="input-with-list" class="mr-2">OD :</label>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="ESF"
              type="number"
              size="sm"
              v-model="prescricaoOculos.od_esferico"
            ></b-input>
            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="prescricaoOculos.od_cilindrico"
              placeholder="CIL"
            ></b-input>
            <b-input-group size="sm" prepend="°" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                placeholder="EIXO"
                v-model="prescricaoOculos.od_eixo"
              ></b-input>
            </b-input-group>

            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="AV"
              v-model="prescricaoOculos.od_av"
            ></b-input>
          </b-form>

          <b-form inline class="mt-4">
            <label for="input-with-list" class="mr-2">OE :</label>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="ESF"
              type="number"
              size="sm"
              v-model="prescricaoOculos.oe_esferico"
            ></b-input>
            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="CIL"
              v-model="prescricaoOculos.oe_cilindrico"
            ></b-input>
            <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="prescricaoOculos.oe_eixo"
                size="sm"
                placeholder="EIXO"
              ></b-input>
            </b-input-group>

            <b-input
              v-model="prescricaoOculos.oe_av"
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="AV"
            ></b-input>
          </b-form>
          <b-form inline class="mt-5">
            <label for="input-with-list" class="mr-3">ADIÇÃO :</label>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="ADIÇÃO"
              type="number"
              size="sm"
              v-model="prescricaoOculos.adicao"
            ></b-input>
          </b-form>

          <div class="mt-3 ml-2">
            <label class="mr-3">LENTE :</label>
            <b-form-select size="sm" class="col-sm-6"></b-form-select>
          </div>

          <div class="mt-4 mb-2">
            <label>Observação</label>
            <b-form-textarea
              class="mt-2"
              id="textarea-rows"
              placeholder="Favor medir DNP com pupilômetro.
        Retorno com 01 Ano"
              rows="4"
              v-model="prescricaoOculos.observacao"
            ></b-form-textarea>
          </div>
          <div
            class="mt-2 p-4"
            style="display: flex; justify-content: flex-end"
          >
            <b-button
              class="mr-3"
              pill
              variant="primary"
              @click="savePrescricao"
              >Salvar</b-button
            >
            <b-button pill @click="cancelar">Cancelar</b-button>
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
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescricaoOculos";
import PacienteService from "../../services/paciente";
import AgendaService from "../../services/agenda";
import { mapState } from "vuex";
import { DateTime } from "luxon";
import moment from "moment";
import prescricaoOculos from "../../services/prescricaoOculos";

export default {
  props: {
    PrescricaoProps: {
      type: Object,
    },
  },

  watch: {
    PrescricaoProps() {
      this.prescricaoOculos = this.PrescricaoProps;
    },
  },
  data() {
    return {
      visiblePesquisa: false,
      visiblePrescri: false,
      dataInicial: "",
      dataFinal: "",
      pacientes: [],
      prescricoes: [],
      pacienteSelected: [],
      logoOlho: logoOlho,
      moldura: moldura,
      idConsulta: -1,
      uuidConsulta: "",
      consulta: "",
      dadosConsulta: {
        idPaciente: this.idPaciente,
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        titulo: "Prescrição Óculos",
      },
      prescricaoOculos: {
        idConsulta: "",
        uuid: "",
        idPaciente: "",
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        adicao: "",
        observacao: "",
      },
    };
  },

  created() {
    this.readPaciente();
  },
  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      uuidAgendamento: (state) => state.uuidAgendamento,
    }),
  },
  methods: {
    async imprimirPrescri(uuid) {
      await this.readPrescricaoUuid(uuid);
      this.createPDF(false);
    },

    async readPrescricaoPesquisa() {
      if (this.dataInicial === "" || this.dataFinal === "") {
        this.showAlert("info", "Por favor Informe o Período");
        return;
      }
      if (this.pacienteSelected.length > 0) {
        const prescricoes = await PrescricaoService.readDatePaciente(
          this.dataInicial,
          this.dataFinal,
          this.pacienteSelected
        );
        this.prescricoes = prescricoes.data.result.result;
        this.prescricoes.forEach((element) => {
          element.data = moment(element.data).format("DD/MM/YYYY");
        });
        return;
      }

      const prescricoes = await prescricaoOculos.readDate(
        this.dataInicial,
        this.dataFinal
      );
      this.prescricoes = prescricoes.data.result.result;
      this.prescricoes.forEach((element) => {
        element.data = moment(element.data).format("DD/MM/YYYY");
      });
    },

    async readPrescricaoUuid(uuid) {
      const prescricao = await PrescricaoService.read(uuid);
      Object.assign(this.prescricaoOculos, prescricao.data.prescricao);
      this.$root.$emit("bv::toggle::collapse", "accordion-1");
      console.log(prescricao);
    },
    testePaciente() {
      console.log(this.pacienteSelected);
    },
    async readPaciente() {
      const pacientes = await PacienteService.readAll();
      this.pacientes = pacientes.data;
      console.log(this.pacientes);
    },
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
      this.prescricaoOculos = {
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
        adicao: "",
        observacao: "",
      };
    },

    createPDF(download) {
      console.log(this.propsAnamnese2);
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
            doc.text(this.prescricaoOculos.od_esferico, 42, linha, null, null);
            doc.text(this.prescricaoOculos.oe_esferico, 175, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Cilíndrico":
            doc.setTextColor(0, 0, 255);
            doc.text(
              this.prescricaoOculos.od_cilindrico,
              52,
              linha,
              null,
              null
            );
            doc.text(
              this.prescricaoOculos.oe_cilindrico,
              175,
              linha,
              null,
              null
            );
            doc.setTextColor(0);
            break;

          case "Eixo":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoOculos.od_eixo, 45, linha, null, null);
            doc.text(this.prescricaoOculos.oe_eixo, 172, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });
      doc.text(
        `Adição : ${this.prescricaoOculos.adicao}`,
        60,
        linha + 30,
        null,
        null
      );
      doc.text(`Lente : `, 100, linha + 30, null, null);
      doc.text(`Observação`, 70, linha + 70, null, null);
      doc.text(this.prescricaoOculos.observacao, 70, linha + 80, null, null);

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
        if (this.prescricaoOculos.uuid === "") {
          this.dadosConsulta.idPaciente = this.idPaciente;
          const resultConsulta = await ConsultaService.save(this.dadosConsulta);
          this.idConsulta = resultConsulta.data.result.idConsulta[0];
          this.uuidConsulta = resultConsulta.data.result.uuid;
          this.prescricaoOculos.idConsulta =
            resultConsulta.data.result.idConsulta[0];
          this.prescricaoOculos.idPaciente = this.idPaciente;

          const resultPrescricao = await PrescricaoService.save(
            this.prescricaoOculos
          );
          this.prescricaoOculos.uuid = resultPrescricao.data.uuid.uuid;

          await AgendaService.updateIdConsultAtendido(this.uuidAgendamento, {
            atendido: true,
            idConsulta: this.idConsulta,
          });

          this.showAlert("success", "Prescrição Salva com Sucesso");
        } else {
          await PrescricaoService.update(
            this.prescricaoOculos,
            this.prescricaoOculos.uuid
          );
          this.showAlert("success", "Prescrição Atualizada com Sucesso");
        }
      } catch (error) {
        this.showAlert("error", "errooo");
      }
    },
  },
};
</script>

<style>
</style>