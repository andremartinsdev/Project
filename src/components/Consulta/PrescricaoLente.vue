<template>
  <div class="containerPrescri">
    <b-card no-body class="mb-5">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          block
          v-b-toggle.accordionPesquisaPrescriOculos
          variant="transparent"
          class="shadow"
          >Pesquisar Prescrição para Lente
          <b-icon-search class="ml-2"></b-icon-search
        ></b-button>
      </b-card-header>
      <b-collapse
        id="accordionPesquisaPrescriOculos"
        visible
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
                  @click="readPrescricaoLentePesquisa"
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
                <th scope="col">Excluir</th>
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
                    @click="gerarPdfPrescricao(prescri.uuid)"
                  >
                    Imprimir
                  </b-button>
                </td>
                <td>
                  <b-button
                    variant="primary"
                    size="sm"
                    @click="excluir(prescri.uuid)"
                  >
                    Excluir
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
          >Cadastro de Prescrição para Óculos</b-button
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
              type="number"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="prescricaoLente.od_cilindrico"
              placeholder="CIL"
            ></b-input>
            <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                type="number"
                v-model="prescricaoLente.od_eixo"
                placeholder="EIXO"
              ></b-input>
            </b-input-group>

            <b-input
              size="sm"
              type="number"
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
              type="number"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="prescricaoLente.oe_cilindrico"
              placeholder="CIL"
            ></b-input>
            <label class="sr-only">Name</label>

            <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                type="number"
                v-model="prescricaoLente.oe_eixo"
                placeholder="EIXO"
              ></b-input>
            </b-input-group>

            <b-input
              size="sm"
              type="number"
              v-model="prescricaoLente.oe_av"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="AV"
            ></b-input>
          </b-form>

          <div class="mt-3">
            <label class="mr-3">LENTE :</label>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Lente"
              type="text"
              size="sm"
              v-model="prescricaoLente.lente"
            ></b-input>
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
          <b-row class="mt-4">
            <b-col lg="1" class="pb-2"
              ><b-button
                class="mr-3"
                pill
                variant="primary"
                @click="savePrescricao"
                >Salvar</b-button
              >
            </b-col>
            <b-col lg="1" class="pb-2">
              <b-button pill @click="cancelar">Limpar</b-button>
            </b-col>
            <b-col lg="2" class="pb-2">
              <b-button
                size="sm"
                class="mr-3"
                variant="primary"
                @click="createPDF(false)"
                pill
              >
                Imprimir
                <b-icon-printer-fill
                  class="ml-3"
                ></b-icon-printer-fill></b-button
            ></b-col>
            <b-col lg="2">
              <b-link href="#foo" @click="createPDF(true)"
                >Download PDF <b-icon-download></b-icon-download>
              </b-link>
            </b-col>
          </b-row>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import PacienteService from "../../services/paciente";
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescicaoLente";
import AgendaService from "../../services/agenda";
import jsPDF from "jspdf";
import logoOlho from "../../assets/LogoOlho.png";
import moldura from "../../assets/moldura.png";
import { mapState } from "vuex";
import moment from "moment";
import rodape from '../../services/rodape';

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
      dataInicial: "",
      dataFinal: "",
      pacientes: [],
      prescricoes: [],
      pacienteSelected: null,
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
        uuid: "",
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
        lente: "",
      },
    };
  },

  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      uuidAgendamento: (state) => state.uuidAgendamento,
      dadosClinica: (state) => state.dadosClinica,
      uuidClinica: (state) => state.uuidClinica
    }),
  },

  created() {
    this.readPaciente();
  },

  methods: {
    testePaciente() {},

    async excluir(uuid) {
      try {
        await PrescricaoService.delete(uuid);
        await this.readPrescricaoLentePesquisa();
        this.cancelar();
        this.showAlert("success", "Registro Deletado com Sucesso");
      } catch (error) {
        this.showAlert("error", "ocorreu um erro ao deletar");
      }
    },
    async gerarPdfPrescricao(uuid) {
      await this.readPrescricaoUuid(uuid);
      this.createPDF(false);
    },

    async readPrescricaoUuid(uuid) {
      const prescricao = await PrescricaoService.read(uuid);
      this.prescricaoLente.uuid = prescricao.data.prescricao.uuid;
      this.prescricaoLente.data = prescricao.data.prescricao.data;
      this.prescricaoLente.od_esferico = prescricao.data.prescricao.od_esferico;
      this.prescricaoLente.od_cilindrico =
        prescricao.data.prescricao.od_cilindrico;
      this.prescricaoLente.od_eixo = prescricao.data.prescricao.od_eixo;
      this.prescricaoLente.od_av = prescricao.data.prescricao.od_av;
      this.prescricaoLente.oe_esferico = prescricao.data.prescricao.oe_esferico;
      this.prescricaoLente.oe_cilindrico =
        prescricao.data.prescricao.oe_cilindrico;
      this.prescricaoLente.oe_eixo = prescricao.data.prescricao.oe_eixo;
      this.prescricaoLente.oe_av = prescricao.data.prescricao.oe_av;
      this.prescricaoLente.observacao = prescricao.data.prescricao.observacao;
      this.$root.$emit("bv::toggle::collapse", "accordion-1");
    },

    async readPrescricaoLentePesquisa() {
      try {
        this.prescricoes = [];
        if (this.pacienteSelected === null) {
          const prescricao = await PrescricaoService.readDate(
            this.dataInicial,
            this.dataFinal
          );

          prescricao.data.result.result.forEach((element) => {
            element.data = moment(element.data).format("DD/MM/YYYY");
            this.prescricoes.push(element);
          });
          return;
        }
        const prescricao = await PrescricaoService.readPrescriPacienteDate(
          this.dataInicial,
          this.dataFinal,
          this.pacienteSelected
        );
        prescricao.data.result.result.forEach((element) => {
          element.data = moment(element.data).format("DD/MM/YYYY");
          this.prescricoes.push(element);
        });
      } catch (error) {
        this.showAlert("error", "ocorreu um erro ao listar prescrições");
      }
    },

    async readPaciente() {
      try {
        const pacientes = await PacienteService.readAll();
        this.pacientes = pacientes.data;
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro ao listar Pacientes");
      }
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
      this.prescricaoLente = {
        idConsulta: "",
        idPaciente: "",
        data: moment().format("YYYY-MM-DD"),
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
      let pdfName = "Prescrição Lente";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Esférico", "Cilíndrico", "Eixo", "Av"];
      doc.text("Prescrição Lente", 105, 40, null, null, "center");
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
            doc.text(this.prescricaoLente.od_esferico, 55, linha, null, null);
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

     rodape(doc, this.dadosClinica, this.uuidClinica)

      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    async savePrescricao() {
      try {
        if (this.idPaciente === -1) {
          this.showAlert(
            "info",
            "Por favor inicie a consulta na aba de Agendados para Hoje ou Pesquisar Agendamentos"
          );
          return;
        }
        if (this.prescricaoLente.uuid === "") {
          this.dadosConsulta.idPaciente = this.idPaciente;
          console.log(this.dadosConsulta);
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
          this.dadosConsulta.idPaciente = this.idPaciente;
          await PrescricaoService.update(
            this.prescricaoLente,
            this.prescricaoLente.uuid
          );
          this.showAlert("success", "Prescrição Atualizada com Sucesso");
        }
      } catch (error) {
        this.showAlert("error", "Ops! ocorreu um erro ao Salvar Prescrição ");
      }
    },
  },
};
</script>

<style>
</style>