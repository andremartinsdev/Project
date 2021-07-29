<template>
  <b-card class="prescricao">
    <div>
      <b-card no-body class="mb-5">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            
            v-b-toggle.accordionPesquisaPrescriOculos
           variant="transparent"
          class="shadow" 
            >Pesquisar Laudo <b-icon-search class="ml-2"></b-icon-search></b-button
          >
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
                v-model="pacienteSelectedLaudo"
                :options="pacientes"
                size="sm"
                class="mb-3"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
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
                    @click="readDateLaudo"
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
                <tr v-for="laudo in this.laudos" :key="laudo.uuid">
                  <th>{{ laudo.nomePaciente }}</th>
                  <td>{{ laudo.data }}</td>
                  <td>
                    <b-button
                      variant="primary"
                      size="sm"
                      @click="readLaudoUuid(laudo.uuid)"
                    >
                      Visualizar
                    </b-button>
                  </td>
                  <td>
                    <b-button variant="primary" size="sm" @click="gerarLaudo">
                      Imprimir
                    </b-button>
                  </td>
                  <td>
                    <b-button
                      variant="primary"
                      size="sm"
                      @click="deleteLaudo(laudo.uuid)"
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

      <b-card-group deck class="mb-3">
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">OLHO DIREITO</h6>
          </template>
          <b-input
            type="text"
            name=""
            hidden
            v-model="laudo.uuid"
            size="sm"
          /><br />
          <label for="">LONGE: S/C = </label>
          <b-input
            type="text"
            name=""
            v-model="laudo.od_longe_sc"
            size="sm"
          /><br />
          <label for="">LONGE: C/C = </label
          ><b-input
            type="text"
            name=""
            size="sm"
            v-model="laudo.od_longe_cc"
          /><br />
          <label for="">PERTO: S/C = </label
          ><b-input
            type="text"
            name=""
            v-model="laudo.od_perto_sc"
            size="sm"
          /><br />
          <label for="">PERTO: C/C = </label
          ><b-input type="text" name="" v-model="laudo.od_perto_cc" size="sm" />
        </b-card>

        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">OLHO ESQUERDO</h6>
          </template>

          <label for="">LONGE: S/C = </label>
          <b-input
            type="text"
            name=""
            v-model="laudo.oe_longe_sc"
            size="sm"
          /><br />
          <label for="">LONGE: C/C = </label
          ><b-input
            type="text"
            name=""
            v-model="laudo.oe_longe_cc"
            size="sm"
          /><br />
          <label for="">PERTO: S/C = </label
          ><b-input
            type="text"
            name=""
            v-model="laudo.oe_perto_sc"
            size="sm"
          /><br />
          <label for="">PERTO: C/C = </label
          ><b-input type="text" name="" v-model="laudo.oe_perto_cc" size="sm" />
        </b-card>
      </b-card-group>
      <div class="mt-2 mb-3 text-center">
        <b-button pill variant="primary" @click="saveLaudo"
          >Salvar Laudo</b-button
        >
      </div>
    </div>

    <b-button variant="primary" block pill @click="gerarLaudo">
      Gerar Laudo
    </b-button>
  </b-card>
</template>

<script>
import LaudoService from "../../../services/laudo";
import ServicoConsulta from "../../../services/consulta";
import { mapState } from "vuex";
import moment from "moment";
import PacienteService from "../../../services/paciente";
// import laudo from '../../../services/laudo';

export default {
  data() {
    return {
      pacientes: [],
      pacienteSelectedLaudo: null,
      dataInicial: "",
      dataFinal: "",
      laudos: [],
      dadosConsulta: {
        idPaciente: 0,
        data: "",
        titulo: "Laudo",
      },
      laudo: {
        uuid: "",
        idConsulta: "",
        data: moment().format("YYYY-MM-DD"),
        idPaciente: "",
        od_perto_sc: "",
        od_perto_cc: "",
        od_longe_sc: "",
        od_longe_cc: "",
        oe_perto_sc: "",
        oe_perto_cc: "",
        oe_longe_sc: "",
        oe_longe_cc: "",
      },
    };
  },

  created() {
    this.list();
  },

  computed: {
    ...mapState({
      idPaciente: (state) => state.pacienteSelected,
    }),
  },

  methods: {
    limpar(){
this.laudo = {
        uuid: "",
        idConsulta: "",
        data: moment().format("YYYY-MM-DD"),
        idPaciente: "",
        od_perto_sc: "",
        od_perto_cc: "",
        od_longe_sc: "",
        od_longe_cc: "",
        oe_perto_sc: "",
        oe_perto_cc: "",
        oe_longe_sc: "",
        oe_longe_cc: "",
      }
    },

    async deleteLaudo(uuid) {
      try {
        await LaudoService.delete(uuid);
        await this.readDateLaudo();
        this.limpar();
        this.showAlert("success", "Registro Deletado com Sucesso");
      } catch (error) {
        this.showAlert("error", "Erro ao deletar registro");
      }
    },

    Paciente(text, uuid) {
      return {
        text: text,
        value: uuid,
      };
    },

    async list() {
      try {
        const paciente = await PacienteService.readAll();
        paciente.data.map((paciente) => {
          this.pacientes.push(
            this.Paciente(paciente.nomePaciente, paciente.uuid)
          );
        });
      } catch (error) {
        this.showAlert("error", "Ocorreu um problema ao lista pacientes");
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

    async readLaudoUuid(uuid) {
      try {
        const laudo = await LaudoService.readUuid(uuid);
        this.laudo.uuid = laudo.data.result[0].uuid;
        this.laudo.od_perto_sc = laudo.data.result[0].od_perto_sc;
        this.laudo.od_perto_cc = laudo.data.result[0].od_perto_cc;
        this.laudo.od_longe_sc = laudo.data.result[0].od_longe_sc;
        this.laudo.od_longe_cc = laudo.data.result[0].od_longe_cc;
        this.laudo.oe_perto_sc = laudo.data.result[0].oe_perto_sc;
        this.laudo.oe_perto_cc = laudo.data.result[0].oe_perto_cc;
        this.laudo.oe_longe_sc = laudo.data.result[0].oe_longe_sc;
        this.laudo.oe_longe_cc = laudo.data.result[0].oe_longe_cc;
        this.$root.$emit("bv::toggle::collapse", "accordion-1");
      } catch (error) {
        this.showAlert("error", "Ocorreu um erro ao ler o laudo");
      }
    },

    async readDateLaudo() {
      if (this.pacienteSelectedLaudo === null) {
        this.laudos = [];
        const laudos = await LaudoService.readDate(
          this.dataInicial,
          this.dataFinal
        );
        laudos.data.result.forEach((element) => {
          element.data = moment(element.data).format("DD/MM/YYYY");
        });
        this.laudos = laudos.data.result;
        return;
      }
      const laudos = await LaudoService.read(
        this.dataInicial,
        this.dataFinal,
        this.pacienteSelectedLaudo
      );

      laudos.data.result.forEach((element) => {
        element.data = moment(element.data).format("DD/MM/YYYY");
      });
      this.laudos = laudos.data.result;
    },

    async saveLaudo() {
      try {
        if (this.laudo.uuid === "") {
          this.dadosConsulta.idPaciente = this.idPaciente;
          this.dadosConsulta.data = moment().format("YYYY-MM-DD");
          this.dadosConsulta.titulo = "Laudo";

          const consulta = await ServicoConsulta.save(this.dadosConsulta);
          this.laudo.data = moment().format("YYYY-MM-DD");
          this.laudo.idPaciente = this.idPaciente;
          this.laudo.idConsulta = consulta.data.result.idConsulta[0];
          const { data } = await LaudoService.save(this.laudo);
          this.laudo.uuid = data.result.uuid
          this.showAlert("success", "Laudo Registrado com Sucesso");
          return;
        }
        await LaudoService.update(this.laudo.uuid, this.laudo);
        this.showAlert("success", "Laudo Atualizado com Sucesso");
      } catch (error) {
        this.showAlert("error", "Erro ao registrar Laudo");
      }
    },

    gerarLaudo() {
      if (this.laudo.uuid != "") {
        window.open(
          `/Impressao/laudo/${this.laudo.uuid}`,
          "_blank",
          "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=1000, height=1000"
        );
      } else {
        this.showAlert("info", "Por favor selecione o Paciente");
      }
    },
  },
};
</script>

<style>
</style>