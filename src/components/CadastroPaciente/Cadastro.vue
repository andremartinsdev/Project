<template>
  <div>
  
    <div class="formCliente">
      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" pills card>
            <b-tab title="Cadastro" active class="formClienteCard">
              <b-card class="formClienteCard">
                <b-container class="col-sm-6" fluid>
                  <h3 class="mb-2">
                    Cadastro Paciente
                    <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                  </h3>

                  <form @submit.prevent="salvar()">
                    <div class="form-group">
                      <input
                        type="text"
                        v-model="paciente.uuid"
                        hidden
                        class="form-control"
                      />
                      <label for="exampleInputEmail1">Nome Paciente</label>
                      <b-form-input
                        id="input-live"
                        v-model="paciente.nomePaciente"
                        :state="nameState"
                        aria-describedby="input-live-help input-live-feedback"
                        trim
                      ></b-form-input>

                      <!-- This will only be shown if the preceding input has an invalid state -->
                      <b-form-invalid-feedback id="input-live-feedback">
                        Nome Obrigatório
                      </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Data de Nascimento</label>
                      <input
                        type="date"
                        v-model="paciente.dataNascimento"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        v-model="paciente.email"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Telefone</label>
                      <input
                        type="text"
                        v-model="paciente.telefone"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Ocupação</label>
                      <input type="text" class="form-control"  />
                     
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">CPF</label>
                      <input
                      v-mask="'###.###.###-##'"
                        type="text"
                        v-model="paciente.cpf"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">RG</label>
                      <input
                        type="text"
                        v-model="paciente.rg"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Endereço</label>
                      <input
                        type="text"
                        v-model="paciente.endereco"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Cidade</label>
                      <input
                        type="text"
                        v-model="paciente.cidade"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group mb-5">
                      <label for="exampleInputEmail1">Estado</label>
                      <input
                        type="text"
                        v-model="paciente.estado"
                        class="form-control"
                      />
                    </div>

                    <footer id="sticky-footer" class="py-2 text-white-50 mb-4">
                      <div class="container text-center">
                        <b-button
                          pill
                          variant="light"
                          class="mr-2"
                          type="submit"
                        >
                          <b-icon-person-check-fill
                            submit
                            class="mr-3"
                          ></b-icon-person-check-fill
                          >Salvar
                        </b-button>

                        <b-button
                          pill
                          variant="light"
                          @click="limpar()"
                          class="mr-2"
                        >
                          <b-icon-arrow-clockwise
                            class="mr-3"
                          ></b-icon-arrow-clockwise
                          >Limpar
                        </b-button>

                        <b-button pill variant="light" @click="tabIndex++">
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
                <div class="flex justify-content-center p-3">
                  <div class="mr-3">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="statusPesquisa"
                      name="checkbox-1"
                      value="cpf"
                    >
                      Pesquisar por CPF
                    </b-form-checkbox>
                  </div>
                  <div>
                    <b-form-checkbox
                      id="checkbox-2"
                      v-model="statusPesquisa"
                      name="checkbox-2"
                      value="nome"
                    >
                      Pesquisar por NOME
                    </b-form-checkbox>
                  </div>
                </div>
                <b-input-group class="mt-3 mb-4">
                  <b-form-input v-model="campoPesquisa"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="primary" @click="readParams"
                      >Pesquisar</b-button
                    >
                  </b-input-group-append>
                </b-input-group>
                <div class="tablePaciente">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in ListaPaciente" :key="item.idPaciente">
                        <td>{{ item.nomePaciente }}</td>
                        <td>
                          {{
                            new Date(
                              item.dataNascimento
                            ).toLocaleDateString() === "Invalid Date"
                              ? "Data Não Informada"
                              : new Date(
                                  item.dataNascimento
                                ).toLocaleDateString()
                          }}
                        </td>
                        <td>{{ item.cpf }}</td>
                        <td>
                          <b-button
                            pill
                            variant="primary"
                            @click="MudarAcoes(item.uuid)"
                            >Ações</b-button
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <footer
                    v-if="acoes == true"
                    id="sticky-footer"
                    class="py-4 text-white-50"
                  >
                    <div class="container text-center">
                      <b-button
                        pill
                        variant="light"
                        @click="read(idPacienteAcoes)"
                        class="mr-2"
                        type="submit"
                      >
                        <b-icon-person-check-fill
                          submit
                          class="mr-3"
                        ></b-icon-person-check-fill
                        >Editar
                      </b-button>

                      <b-button
                        pill
                        variant="light"
                        @click="deletePaciente(idPacienteAcoes)"
                        class="mr-2"
                      >
                        <b-icon-arrow-clockwise
                          submit
                          class="mr-3"
                        ></b-icon-arrow-clockwise
                        >Excluir
                      </b-button>

                      <b-button pill class="mr-2" variant="light">
                        <b-icon-x class="mr-3 mb-1"></b-icon-x>Agendar
                      </b-button>
                    </div>
                  </footer>
                </div>
              </b-card>
              <footer class="card-footer">
                <div class="card-footer-item">
                  <nav
                    class="pagination is-centered"
                    role="navigation"
                    aria-label="pagination"
                  >
                    <b-button
                      v-if="page < totalPage"
                      variant="primary"
                      @click="nextPage"
                      v-show="statePesquisa"
                    >
                      Proximo
                      <b-icon-arrow-right-circle-fill>
                      </b-icon-arrow-right-circle-fill>
                    </b-button>

                    <b-button
                      variant="primary"
                      @click="previousPage"
                      class="ml-3"
                      v-show="statePesquisa"
                      v-if="page != 1"
                    >
                      <b-icon-arrow-left-circle-fill>
                      </b-icon-arrow-left-circle-fill>
                      Anterior
                    </b-button>

                    <b-button
                      variant="primary"
                      @click="limparPesquisa"
                      v-if="statePesquisa === false"
                    >
                      Limpar Pesquisa
                    </b-button>
                  </nav>
                </div>
                <div class="card-footer-item mt-3" v-show="statePesquisa">
                  <label>
                    Total de Páginas
                    <b-badge variant="primary">{{ totalPage }}</b-badge>
                  </label>
                  <label class="ml-4">
                    Página Atual <b-badge variant="primary">{{ page }}</b-badge>
                  </label>
                </div>
              </footer>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PacienteService from "../../services/paciente";
import ValidatorPaciente from "../../services/validacoes";

export default {
  components: {
  },
  computed: {
    ...mapState({
      pacientes: (state) => state.paciente,
    }),

    nameState() {
      return this.paciente.nomePaciente.length > 0 ? true : false;
    },
  },
  data() {
    return {
      myInputModel: '',
      campoPesquisa: "",
      pages: [],
      statusPesquisa: "",
      message: false,
      acoes: false,
      ListaPaciente: {},
      tabIndex: 1,
      idPacienteAcoes: -1,
      idPaciente: -1,
      statePesquisa: true,
      page: 1,
      totalPage: 0,
      paciente: {
        uuid: -1,
        nomePaciente: "",
        dataNascimento: "",
        email: "",
        telefone: "",
        cpf: "",
        rg: "",
        endereco: "",
        cidade: "",
        estado: "",
      },
    };
  },

  beforeMount() {
  },

  mounted() {
    this.list();
  },

  methods: {
    ...mapActions([
      "savePaciente",
      "deletePaciente",
      "updatePaciente",
      "selectPaciente",
      "selectPacienteId",
    ]),

    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    MudarAcoes(idPaciente) {
      this.acoes = !this.acoes;
      this.idPacienteAcoes = idPaciente;
    },

    limpar() {
      this.paciente = {
        uuid: -1,
        nomePaciente: "",
        dataNascimento: "",
        email: "",
        telefone: "",
        cpf: "",
        rg: "",
        endereco: "",
        cidade: "",
        estado: "",
      };
    },
    limparPesquisa() {
      this.list();
      this.statePesquisa = true;
      this.campoPesquisa = "";
    },
    list() {
      PacienteService.list().then((response) => {
        this.ListaPaciente = response.data.result.result;
        const totalRows = response.data.result.total[0].count;
        this.totalPage = Math.ceil(totalRows / 10);
        this.page = 1;
      });
    },

    previousPage() {
      this.page = this.page - 1;
      PacienteService.previousPage(this.page).then((response) => {
        this.ListaPaciente = response.data.result.result;
      });
    },

    nextPage() {
      this.page = this.page + 1;
      PacienteService.nextPage(this.page).then((response) => {
        this.ListaPaciente = response.data.result.result;
      });
    },

    salvar() {
      const error = ValidatorPaciente.ValidarPaciente(this.paciente);
      if (error) {
        this.showAlert("info", "Existe algum erro de preenchimento");
      } else {
        if (this.paciente.uuid === -1) {
          PacienteService.save(this.paciente)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Paciente Salvo com Sucesso");
                this.paciente.uuid = result.data.uuid;
                this.list();
              } else {
                this.showAlert("error", "Erro ao Salvar Paciente");
              }
            })
            .catch(() => {
              this.showAlert("error", "Erro ao Salvar Paciente");
            });
        } else {
          PacienteService.edit(this.paciente, this.paciente.uuid)
            .then((result) => {
              if (result.status === 201) {
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
      }
    },

    readParams() {
      if (!this.statusPesquisa) {
        this.showAlert(
          "info",
          "Selecione uma Opção para pesquisar (Nome ou CPF)"
        );
      } else if (!this.campoPesquisa) {
        this.showAlert("info", "Campo de Pesquisa em branco");
      } else {
        PacienteService.readParams(
          this.statusPesquisa,
          this.campoPesquisa
        ).then((result) => {
          if (Object.keys(result.data.result).length === 0) {
            this.showAlert("info", "Nenhuma Informação encontrada");
          } else {
            this.statePesquisa = false;
            this.ListaPaciente = result.data.result;
          }
        }).catch(() => {
            this.showAlert("error", "Não foi possível realizar consulta");
        });
      }
    },

    deletePaciente(idPaciente) {
      PacienteService.delete(idPaciente).then(() => {
        this.showAlert("success", "Paciente Deletado com Sucesso");
        this.list();
      }).catch(error => {
        if(error.response.status === 409){
          this.showAlert("info", error.response.data.message);
        }else{
        this.showAlert("error", "Erro eo Deletar registro de Paciente");
        }
        
      });
      this.acoes = false;
    },

    read(uuid) {
      PacienteService.read(uuid).then((response) => {
        this.tabIndex -= this.tabIndex;
        this.paciente = response.data.paciente;
      }).catch(()=> {
        this.showAlert("error", "Erro consultar registro de Paciente");
      });
      this.acoes = false;
    },
  },
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
  font-size: 14px;
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
  .formClienteCard {
    width: 100%;
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
.card-footer-item {
  display: flex;
  justify-content: center;
}
.tablePaciente {
  overflow: auto;
}
</style>