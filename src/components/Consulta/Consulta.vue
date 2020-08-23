<template>
  <div>
    <SideNav />

    <b-container fluid class="consulta">
      <div class="jumb">
        <b-jumbotron id="tabelaPac">
          <div>
            <label>Paciente</label>
            <b-form-select size="sm" @change="pacienteSelect" v-model="select" :options="this.ListaPaciente"></b-form-select>
          </div>
          <table class="table table-sm text-center" >
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
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>
                  <b-button pill variant="light" class="mr-2" type="submit">
                    <b-icon-search class="mr-3"></b-icon-search>Visualizar
                  </b-button>
                </td>
                <td>
                   <b-button pill variant="light" class="mr-2" type="submit">
                    <b-icon-file-earmark-text class="mr-3"></b-icon-file-earmark-text>Imprimir
                  </b-button>
                </td>
                <td>
                  <b-button pill variant="light" class="mr-2" type="submit">
                    <b-icon-trash-fill class="mr-3"></b-icon-trash-fill>Excluir
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-jumbotron>
      </div>
      <div>
        <b-card no-body>
          <b-tabs card>
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
                <Accordion />
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
import {  mapActions } from 'vuex';

export default {
  components: {
    Accordion,
    PrescricaoOculos,
    PrescricaoLente,
    SideNav,
    Editor
  },
  data() {
    return {
     
      select: null,
      ListaPaciente: [],
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
        { text: "Grape", value: "grape" }
      ]
    };
  },

  methods: {
   ...mapActions(["pacienteSelected"]),
   
    pacienteSelect(){
      this.pacienteSelected(this.select)
      console.log("select",this.select)
    },
  
    Paciente(text, value) {
      return {
        text: text,
        value: value
      };
    },

    list() {
      axios.get("http://localhost:3000/Paciente/List").then(response => {
        response.data.retorno.map(paciente => {
          this.ListaPaciente.push(
            this.Paciente(paciente.NOMEPACIENTE, paciente.IDPACIENTE)
          );

          console.log(this.ListaPaciente);
        });
      });
    }
  },
  created() {
    this.list();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");

.consulta {
  margin-top: 100px;
  font-family: "Monda", sans-serif;
}
.check {
  display: flex;
  flex-wrap: wrap;
}

#tabelaPac{
  overflow: auto;
}


@media (max-width: 700px) {
 #tabelaPac button{
  height: 40px;
  font-size: 10px;
}
}
</style>