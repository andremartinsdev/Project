<template>
  <div class="containerPrescri">
    <b-card no-body class="mb-5">
      <!-- <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-pesquisa 
          variant="transparent"
          class="shadow"
          >Pesquisar Prescrições para Óculos <b-icon-search class="ml-2"></b-icon-search></b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-pesquisa"
        accordion="my-accordion"
        role="tabpanel"
      > -->
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

              <b-button
                variant="primary"
                size="sm"
                class="mb-4 mt-2 ml-2"
                @click="novaPesquisa"
                >Nova Pesquisa</b-button
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
                  @click="
                    readPrescricaoUuid(prescri.uuid, prescri.nomePaciente)
                  "
                >
                  Visualizar
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
      <!-- </b-collapse> -->
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info"
          >Cadastro de Prescrição para Óculos</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
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
              step="0.25"
            ></b-input>
            <b-input
              size="sm"
              type="number"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="prescricaoOculos.od_cilindrico"
              placeholder="CIL"
              max="0"
              step="0.25"
            ></b-input>
            <b-input-group size="sm" prepend="°" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                size="sm"
                placeholder="EIXO"
                type="number"
                v-model="prescricaoOculos.od_eixo"
                min="0"
              ></b-input>
            </b-input-group>

            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="AV"
              v-model="prescricaoOculos.od_av"
            ></b-input>

            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="DNP"
              v-model="prescricaoOculos.od_dnp"
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
              step="0.25"
            ></b-input>
            <b-input
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="CIL"
              type="number"
              v-model="prescricaoOculos.oe_cilindrico"
              max="0"
              step="0.25"
            ></b-input>
            <b-input-group prepend="°" size="sm" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                v-model="prescricaoOculos.oe_eixo"
                size="sm"
                placeholder="EIXO"
                type="number"
                min="0"
              ></b-input>
            </b-input-group>

            <b-input
              v-model="prescricaoOculos.oe_av"
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="AV"
            ></b-input>

            <b-input
              v-model="prescricaoOculos.oe_dnp"
              size="sm"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="DNP"
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
              step="0.25"
            ></b-input>
          </b-form>

          <div class="mt-3">
            <label class="mr-3">LENTE :</label>
            <b-input
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Lente"
              type="text"
              size="sm"
              v-model="prescricaoOculos.lente"
            ></b-input>
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
          <b-row class="mt-4">
            <b-col lg="1" class="pb-2"
              ><b-button
                class="mr-3"
                pill
                size="sm"
                variant="primary"
                @click="savePrescricao"
                >Salvar</b-button
              >
            </b-col>
            <b-col lg="1" class="pb-2">
              <b-button size="sm" pill @click="cancelar">Limpar</b-button>
            </b-col>
            <b-col lg="2" class="pb-2">
              <b-button
                size="sm"
                class="mr-3"
                variant="primary"
                @click="createPDFmodelo2(false)"
                pill
              >
                Imprimir
                <b-icon-files class="ml-3"></b-icon-files></b-button
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
    <table id="modelo2" v-show="false">
      <thead>
        <tr>
          <th></th>
          <th>Esférico</th>
          <th>Cilíndrico</th>
          <th>Eixo</th>
          <th>AV</th>
          <th>DNP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OD</td>
          <td>{{ prescricaoOculos.od_esferico }}</td>
          <td>{{ prescricaoOculos.od_cilindrico }}</td>
          <td>{{ prescricaoOculos.od_eixo }}</td>
          <td>{{ prescricaoOculos.od_av }}</td>
          <td>{{ prescricaoOculos.od_dnp }}</td>
        </tr>
        <tr>
          <td>OE</td>
          <td>{{ prescricaoOculos.oe_esferico }}</td>
          <td>{{ prescricaoOculos.oe_cilindrico }}</td>
          <td>{{ prescricaoOculos.oe_eixo }}</td>
          <td>{{ prescricaoOculos.oe_av }}</td>
          <td>{{ prescricaoOculos.oe_dnp }}</td>
        </tr>
        <tr>
          <td>Adição</td>
          <td colspan="5">{{ prescricaoOculos.adicao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import logoOlho from "../../assets/LogoOlho.jpg";
import moldura from "../../assets/moldura.png";
import ConsultaService from "../../services/consulta";
import PrescricaoService from "../../services/prescricaoOculos";
import PacienteService from "../../services/paciente";
import AgendaService from "../../services/agenda";
import { mapState } from "vuex";
import { DateTime } from "luxon";
import moment from "moment";
import prescricaoOculos from "../../services/prescricaoOculos";
import rodape from "../../services/rodape";
import logoOpto from "../../assets/logoOpt.jpg";

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
      logoOpto: logoOpto,
      visiblePesquisa: false,
      visiblePrescri: false,
      dataInicial: "",
      dataFinal: "",
      pacientes: [],
      prescricoes: [],
      pacienteSelected: null,
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
        od_dnp: "",
        oe_dnp: "",
        adicao: "",
        observacao: "",
        lente: "",
      },
      nomeClientePdfModelo2: "",
    };
  },

  created() {
    this.readPaciente();
  },
  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
      uuidAgendamento: (state) => state.uuidAgendamento,
      uuidClinica: (state) => state.uuidClinica,
      dadosClinica: (state) => state.dadosClinica,
    }),
  },
  methods: {
    async excluir(uuid) {
      try {
        await PrescricaoService.delete(uuid);
        await this.readPrescricaoPesquisa();
        this.cancelar();
        this.showAlert("success", "Registro Deletado com Sucesso");
      } catch (error) {
        this.showAlert("error", "ocorreu um erro ao deletar");
      }
    },

    novaPesquisa() {
      this.dataInicial = "";
      this.dataFinal = "";
      this.pacienteSelected = null;
    },

    async imprimirPrescri(uuid) {
      await this.readPrescricaoUuid(uuid);
      this.createPDF(false);
    },

    async readPrescricaoPesquisa() {
      if (this.dataInicial === "" || this.dataFinal === "") {
        this.showAlert("info", "Por favor Informe o Período");
        return;
      }
      if (this.pacienteSelected != null) {
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

    async readPrescricaoUuid(uuid, nomeClientePdfModelo2) {
      const prescricao = await PrescricaoService.read(uuid);
      this.nomeClientePdfModelo2 = nomeClientePdfModelo2;
      Object.assign(this.prescricaoOculos, prescricao.data.prescricao);
      this.$root.$emit("bv::toggle::collapse", "accordion-1");
    },
    testePaciente() {
      // console.log(this.pacienteSelected);
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
      this.prescricaoOculos = {
        idConsulta: "",
        idPaciente: "",
        data: `${DateTime.local().c.year}-${DateTime.local().c.month}-${
          DateTime.local().c.day
        }`,
        uuid: "",
        od_esferico: "",
        od_cilindrico: "",
        od_eixo: "",
        od_av: "",
        oe_esferico: "",
        oe_cilindrico: "",
        oe_eixo: "",
        oe_av: "",
        oe_dnp: "",
        od_dnp: "",
        adicao: "",
        observacao: "",
      };
    },

    async createPDFmodelo2(download) {
      let pdfName = "Prescrição Óculos";
      var doc = new jsPDF("l", "pt");
      var linha = 85;
      doc
        .setFontSize(12)
        .text(`Paciente: ${this.nomeClientePdfModelo2}`, 5, 190, null, null);
      doc.addImage(this.logoOpto, "JPEG", 315, 20, 220, 120);
      doc.autoTable({
        html: "#modelo2",
        margin: { horizontal: 5 },
        startY: 210,
        styles: { fontSize: 12 },
        tableWidth: 831,
        theme: "grid",
        colSpan: 5,
      });

      doc
        .setFontSize(12)
        .text(
          `Lente: ${this.prescricaoOculos.lente}`,
          5,
          linha + 250,
          null,
          null
        );
      doc
        .setFontSize(11)
        .text(
          `Observação: ${this.prescricaoOculos.observacao}`,
          5,
          linha + 280,
          null,
          null
        );
      doc.setDrawColor(0).line(270, 455, 485, 455);
      doc.text(`Optometrista`, 345, 470, null, null);
      doc.text(
        `${this.dadosClinica[0].cidade}, ${moment()
          .add("day", 1)
          .format("DD/MM/YYYY")}`,
        345,
        485,
        null,
        null
      );
      doc.setFontSize(11).text(
        `O presente exame efetuado pelo optometrista, tem por finalidade a correção dos defeitos retrativos, a
avaliação sensorial e motora, através da indicação de lentes corretoras retrativas e/ou exercícios ortópticos. O
diagnósticos de doenças oculares e seu tratamento são de competência do profissional médico.`,
        125,
        535,
        null,
        null
      );
      //  await rodape(doc, this.dadosClinica, this.uuidClinica)

      if (download) {
        doc.save(pdfName + ".pdf");
        return;
      }
      window.open(doc.output("bloburl"));
    },

    async createPDF(download) {
      let pdfName = "Prescrição Óculos";
      var doc = new jsPDF();
      var linha = 85;
      var estrutura = ["Esférico", "Cilíndrico", "Eixo", "Av"];
      doc.text("Prescrição Óculos", 105, 40, null, null, "center");
      doc.setFontSize(12);
      doc.text("Nome Clinica", 105, 48, null, null, "center");
      doc.addImage(this.logoOlho, "JPEG", 70, 50, 55, 25);
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
            doc.text(this.prescricaoOculos.od_esferico, 46, linha, null, null);
            doc.text(this.prescricaoOculos.oe_esferico, 171, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Cilíndrico":
            doc.setTextColor(0, 0, 255);
            doc.text(
              this.prescricaoOculos.od_cilindrico,
              48,
              linha,
              null,
              null
            );
            doc.text(
              this.prescricaoOculos.oe_cilindrico,
              173,
              linha,
              null,
              null
            );
            doc.setTextColor(0);
            break;

          case "Eixo":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoOculos.od_eixo, 40, linha, null, null);
            doc.text(this.prescricaoOculos.oe_eixo, 164, linha, null, null);
            doc.setTextColor(0);
            break;

          case "Av":
            doc.setTextColor(0, 0, 255);
            doc.text(this.prescricaoOculos.od_av, 38, linha, null, null);
            doc.text(this.prescricaoOculos.oe_av, 162, linha, null, null);
            doc.setTextColor(0);
            break;

          default:
            break;
        }
      });
      doc.text(
        `Adição : ${this.prescricaoOculos.adicao}`,
        50,
        linha + 30,
        null,
        null
      );
      doc.text(`Lente : `, 120, linha + 30, null, null);
      doc.text(`Observação`, 70, linha + 70, null, null);
      doc.text(this.prescricaoOculos.observacao, 70, linha + 80, null, null);

      await rodape(doc, this.dadosClinica, this.uuidClinica);

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
            "Por favor inicie a consulta na aba de agendamento"
          );
          return;
        }
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