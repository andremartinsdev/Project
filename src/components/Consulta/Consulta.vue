<template>
  <div>
    <SideNav />

    <b-container fluid class="consulta">
      <div class="mb-5">
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Consulta" active>
              <div>
                <label>Paciente</label>
                <b-form-select
                  size="sm"
                  v-model="select"
                  :options="this.ListaPaciente"
                      @change="pacienteSelect"

                ></b-form-select>
              </div>
            </b-tab>
            <b-tab title="Pesquisar">
              <div class="jumb">
                <b-jumbotron id="tabelaPac">
                  <div class="flex mb-4">
                    <div class="mr-3">
                      <label>Data Inicial</label>
                      <input
                        type="date"
                        size="sm"
                        class="form-control col-sm-12"
                        v-model="dataInicial"
                      />
                    </div>
                    <div>
                      <label>Data Final</label>
                      <input
                        type="date"
                        class="form-control col-sm-12"
                        v-model="dataFinal"
                      />
                    </div>
                    <div class="ml-2">
                      <b-button @click="listConsulta" block variant="primary">Pesquisar</b-button>
                    </div>
                  </div>

                  <div>
                    <label>Paciente</label>
                    <b-form-select
                      size="sm"
                      @change="pacienteSelect"
                      v-model="select"
                      :options="this.ListaPaciente"
                    ></b-form-select>
                  </div>
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Data Cadastro</th>
                        <th scope="col">Visualizar</th>
                        <th scope="col">Imprimir</th>
                        <th scope="col">Excluir</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="lista in ListaConsulta[0]"
                        :key="lista.IDCONSULTA"
                      >
                        <th scope="row">{{ ListaConsulta.titulo }}</th>
                        <td>19/10/2020</td>
                        <td>
                          <b-button
                            pill
                            variant="light"
                            @click="
                              visualizar(lista.IDCONSULTA, lista.titulo)
                            "
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-search class="mr-3"></b-icon-search
                            >Visualizar
                          </b-button>
                        </td>
                        <td>
                          <b-button
                            pill
                            variant="light"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-file-earmark-text
                              class="mr-3"
                            ></b-icon-file-earmark-text
                            >Imprimir
                          </b-button>
                        </td>
                        <td>
                          <b-button
                            pill
                            @click="delet(lista.IDCONSULTA)"
                            variant="light"
                            class="mr-2"
                            type="submit"
                          >
                            <b-icon-trash-fill class="mr-3"></b-icon-trash-fill
                            >Excluir
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-jumbotron>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Prescrição para Óculos" active>
              <b-card class="prescricao">
                <PrescricaoOculos />
              </b-card>
            </b-tab>
            <b-tab title="Prescrição para Lente de Contato">
              <b-card class="prescricao">
                <PrescricaoLente />
              </b-card>
            </b-tab>
            <b-tab title="Laudo">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Atestado">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Declaração">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Encaminhamento">
              <b-card class="prescricao">
                <Editor />
              </b-card>
            </b-tab>
            <b-tab title="Ficha Clínica">
              <b-card class="fichaClinica">
                <Accordion
                  :anamneseProps="this.VisualizarConsulta"
                  :Visualizar="this.VisualizarBool"
                />
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import Accordion from "./Accordion";
import PrescricaoOculos from "./PrescricaoOculos";
import PrescricaoLente from "./PrescricaoLente";
import SideNav from "../SidebarNavbar";
import Editor from "../editor_text/editor";
import axios from "axios";
import { mapActions, mapState } from "vuex";
import ServiceAnamnese from "../../services/anamnese";
//import ServicePrescricaoUltEx from "../../services/prescricaoUltEx";
import ServiceGenericList from "../../services/listGeneric";
export default {
  components: {
    Accordion,
    PrescricaoOculos,
    PrescricaoLente,
    SideNav,
    Editor,
  },
  data() {
    return {
      select: null,
      ListaPaciente: [],
      ListaConsulta: {},
      VisualizarConsulta: [],
      VisualizarBool: false,
      tabIndex: 0,
      dataInicial:"",
      dataFinal:"",
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
        { text: "Grape", value: "grape" },
      ],
    };
  },
  computed: {
    ...mapState({
      anamnese: (state) => state.anamnese,
    }),
  },
  methods: {
    ...mapActions(["pacienteSelected"]),

    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    listConsulta() {
      ServiceGenericList.list(this.select, this.dataInicial, this.dataFinal).then((resul) => {
         this.ListaConsulta.push(resul.data.retorno)
         console.log(this.ListaConsulta)
      });

     
      this.ListaConsulta.titulo = "Ficha Clinica";
      console.log(this.ListaConsulta);
    },

    pacienteSelect() {
      this.ListaConsulta = [];
      this.pacienteSelected(this.select);
      console.log(this.dataInicial, this.dataFinal);

    },

    visualizar(id) {
      ServiceGenericList.read(id).then((result) => {
       console.log(result)
      });
      this.VisualizarBool = false;
    },

    delet(id) {
      ServiceAnamnese.delet(id).then(() => {
        this.showAlert("success", "Registro Removido com Sucesso");
        this.pacienteSelect();
      });
    },

    Paciente(text, value) {
      return {
        text: text,
        value: value,
      };
    },

    list() {
      axios.get("http://localhost:3000/Paciente/List").then((response) => {
        response.data.retorno.map((paciente) => {
          this.ListaPaciente.push(
            this.Paciente(paciente.NOMEPACIENTE, paciente.IDPACIENTE)
          );

          console.log(this.ListaPaciente);
        });
      });
    },
  },
  created() {
    this.list();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.flex {
  display: flex;
  align-items: flex-end;
}
.consulta {
  margin-top: 100px;
  font-family: "Monda", sans-serif;
}
.check {
  display: flex;
  flex-wrap: wrap;
}

#tabelaPac {
  overflow: auto;
}

@media (max-width: 700px) {
  #tabelaPac button {
    height: 40px;
    font-size: 10px;
  }
}
</style>