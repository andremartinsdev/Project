<template>
  <div>
    <SidebarNavbar />
    <div class="formCliente">
      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" pills card>
            <b-tab title="Cadastro" active>
              <b-card class="formClienteCard">
                <b-container class="col-sm-6" fluid>
                  <h3 class="mb-2">
                    Cadastro Paciente
                    <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                  </h3>
                  
                  <form @submit.prevent="salvar()">
                    
                    <div class="form-group">
                      <input type="text" v-model="paciente.IDPACIENTE" hidden class="form-control" />
                      <label for="exampleInputEmail1">Nome Paciente</label>
                      <input type="text" v-model="paciente.NOMEPACIENTE" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Data de Nascimento</label>
                      <input type="date" v-model="paciente.DATANASCIMENTO" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input type="email" v-model="paciente.EMAIL" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Telefone</label>
                      <input type="text" v-model="paciente.TELEFONE" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Ocupação</label>
                      <input type="text" v-model="paciente.OCUPACAO" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">CPF</label>
                      <input type="text" v-model="paciente.CPF" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">RG</label>
                      <input type="text" v-model="paciente.RG" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Endereço</label>
                      <input type="text" v-model="paciente.ENDERECO" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Cidade</label>
                      <input type="text" v-model="paciente.CIDADE" class="form-control" />
                    </div>
                    <div class="form-group mb-5">
                      <label for="exampleInputEmail1">Estado</label>
                      <input type="text" v-model="paciente.ESTADO" class="form-control" />
                    </div>

                    <footer id="sticky-footer" class="py-2 text-white-50 mb-4">
                      <div class="container text-center">
                        <b-button pill variant="light" class="mr-2" type="submit">
                          <b-icon-person-check-fill submit class="mr-3"></b-icon-person-check-fill>Salvar
                        </b-button>

                        <b-button pill variant="light" @click="limpar()" class="mr-2">
                          <b-icon-arrow-clockwise class="mr-3"></b-icon-arrow-clockwise>Limpar
                        </b-button>


                        <b-button pill variant="light" @click="tabIndex++" >
                          <b-icon-search class="mr-3"></b-icon-search>Pesquisar
                        </b-button>
                      </div>
                    </footer>
                  </form>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Pesquisa">
              <b-card class="formClienteCard">
                <b-input-group class="mt-3">
                  <b-form-input></b-form-input>
                  <b-input-group-append>
                    <b-button variant="primary" @click="list">Pesquisar</b-button>
                  </b-input-group-append>
                </b-input-group>
                <div class="tablePaciente">
                  <table class="table table-sm text-center">
                    <thead class>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in ListaPaciente" :key="item.IDPACIENTE">
                        <td>{{item.NOMEPACIENTE}}</td>
                        <td>{{new Date(item.DATANASCIMENTO).toLocaleDateString()}}</td>
                        <td>{{item.CPF}}</td>
                        <td>
                          <b-button
                            pill
                            variant="primary"
                            @click="MudarAcoes(item.IDPACIENTE)"
                          >Ações</b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <footer v-if="acoes == true" id="sticky-footer" class="py-4 text-white-50">
                    <div class="container text-center">
                      <b-button
                        pill
                        variant="light"
                        @click="read(idPacienteAcoes)"
                        class="mr-2"
                        type="submit"
                      >
                        <b-icon-person-check-fill submit class="mr-3"></b-icon-person-check-fill>Editar
                      </b-button>

                      <b-button
                        pill
                        variant="light"
                        @click="deletePaciente(idPacienteAcoes)"
                        class="mr-2"
                      >
                        <b-icon-arrow-clockwise submit class="mr-3"></b-icon-arrow-clockwise>Excluir
                      </b-button>

                      <b-button pill class="mr-2" variant="light">
                        <b-icon-x class="mr-3 mb-1"></b-icon-x>Agendar
                      </b-button>
                    </div>
                  </footer>
                </div>
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNavbar from "../SidebarNavbar";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import PacienteService from "../../services/paciente";

export default {
  components: {
    SidebarNavbar
  },
  computed: {
    ...mapState({
      pacientes: state => state.paciente
    })
  },
  data() {
    return {
      message: false,
      acoes: false,
      ListaPaciente: {},
      tabIndex: 1,
      idPacienteAcoes: -1,
      paciente: {
        IDPACIENTE: -1,
        NOMEPACIENTE: "",
        DATANASCIMENTO: "",
        EMAIL: "",
        TELEFONE: "",
        OCUPACAO: "",
        CPF: "",
        RG: "",
        ENDERECO: "",
        CIDADE: "",
        ESTADO: ""
      }
    };
  },

  beforeMount() {
    this.list();
    console.log("teste");
  },

  methods: {
    ...mapActions([
      "savePaciente",
      "deletePaciente",
      "updatePaciente",
      "selectPaciente",
      "selectPacienteId"
    ]),

    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2000
      });
    },


    list() {
      axios.get("http://localhost:3000/Paciente/List").then(response => {
        this.ListaPaciente = response.data.retorno;
        console.log(this.ListaPaciente);
      });
    },

    MudarAcoes(idPaciente) {
      this.acoes = !this.acoes;
      this.idPacienteAcoes = idPaciente;
      console.log(this.idPacienteAcoes);
    },
    limpar() {
      this.paciente = {
        IDPACIENTE: -1,
        IDEMPRESA: "",
        NOMEPACIENTE: "",
        DATANASCIMENTO: "",
        EMAIL: "",
        TELEFONE: "",
        OCUPACAO: "",
        CPF: "",
        RG: "",
        ENDERECO: "",
        CIDADE: "",
        ESTADO: ""
      };
    },
    salvar() {
      console.log(new Date().toLocaleDateString())
      if (this.paciente.IDPACIENTE < 0) {
        PacienteService.save(this.paciente)
          .then(result => {
            if (result.data.message === "success") {
              this.showAlert("success", "Paciente Salvo com Sucesso");
              this.list();
            } else {
              this.showAlert("error", "Erro ao Salvar Paciente");
            }
          })
          .catch(() => {
            this.showAlert("erro", "Erro ao Salvar Paciente");
          });
      } else {
        PacienteService.edit(this.paciente)
          .then(result => {
            if (result.data.message === "success") {
              this.showAlert("success", "Paciente Editado com Sucesso");
              this.list();
            } else {
              this.showAlert("error", "Erro ao Editar Paciente");
            }
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Editar Paciente");
          });
      }
    },

    deletePaciente(idPaciente) {
      console.log(idPaciente);
      axios
        .delete(`http://localhost:3000/Paciente/Delete/${idPaciente}`)
        .then(response => {
          console.log(response.data.message);
          this.list();
        });
    },

    read(idPaciente) {
      axios
        .get(`http://localhost:3000/Paciente/Read/${idPaciente}`)
        .then(response => {
          console.log(response);
          this.tabIndex -= this.tabIndex;
          this.paciente = response.data.retorno[0];
          console.log( response.data.retorno[0])
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.formCliente {
  margin-top: 100px;
  border-radius: 10px;
  padding: 20px;
}
.formClienteCard {
  background: rgb(241, 240, 240);
}
.formCliente label,
button,
table {
  font-family: "Monda", sans-serif;
}

.formCliente h3 {
  font-family: "Monda", sans-serif;
  text-align: center;
}
.content {
  position: absolute;
  left: 25%;
  top: 50%;
}
#sticky-footer {
  left: 35px;
  flex-shrink: none;
  position: fixed;
  margin-left: 30%;
  margin-right: 25%;
  margin-bottom: 4px;
  width: 35%;
  background: linear-gradient(0deg, #015ea0 0%, #0082c8 100%);
  border-radius: 55px;
  padding: 4;
}

@media (max-width: 700px) {
  #sticky-footer {
    position: unset;
    display: flex;
    width: 100%;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    border-radius: 10px;
    align-items: center;
  }
  #sticky-footer button {
    width: 100%;
    margin-bottom: 5px;
  }

  .formCliente {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 150px;
  }
}

.tablePaciente {
  overflow: auto;
}
</style>