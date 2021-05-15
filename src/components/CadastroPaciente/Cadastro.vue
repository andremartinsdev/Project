<template>
  <div>
    <div class="formCliente">
      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" pills card>
            <b-tab title="Cadastro" active class="formClienteCard">
              <b-card class="formClienteCard">
                <b-container class="col-sm-12" fluid>
                  <h3 class="mb-2">
                    Cadastro Paciente
                    <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                  </h3>

                  <form class="row">
                    <div class="form-group col-sm-5">
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
                        aria-describedby="input-live-help input-live-feedback"
                        trim
                        max="50"
                      ></b-form-input>
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.nomePaciente }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-3">
                      <label for="exampleInputEmail1">Data de Nascimento</label>
                      <input
                        type="date"
                        v-model="paciente.dataNascimento"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-sm-4">
                      <label for="exampleInputEmail1">Email</label>
                      <input
                        type="email"
                        v-model="paciente.email"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.email }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-3">
                      <label for="exampleInputEmail1">Telefone</label>
                      <input
                        type="text"
                        v-model="paciente.telefone"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.telefone }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-2">
                      <label for="exampleInputEmail1">CPF</label>
                      <input
                        v-mask="'###.###.###-##'"
                        type="text"
                        v-model="paciente.cpf"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.cpf }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-2">
                      <label for="exampleInputEmail1">RG</label>
                      <input
                        type="text"
                        v-model="paciente.rg"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.rg }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-5">
                      <label for="exampleInputEmail1">Endereço</label>
                      <input
                        type="text"
                        v-model="paciente.endereco"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.endereco }}
                      </b-form-text>
                    </div>
                    <div class="form-group col-sm-5">
                      <label for="exampleInputEmail1">Cidade</label>
                      <input
                        type="text"
                        v-model="paciente.cidade"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.cidade }}
                      </b-form-text>
                    </div>
                    <div class="form-group mb-5 col-sm-2">
                      <label for="exampleInputEmail1">Estado</label>
                      <input
                        type="text"
                        v-model="paciente.estado"
                        class="form-control"
                      />
                      <b-form-text text-variant="warning" style="color: red">
                        {{ pacienteError.estado }}
                      </b-form-text>
                    </div>
                  </form>
                  <div class="btns">
                    <b-button
                      variant="success"
                      class="mr-2"
                      type="submit"
                      @click="salvar()"
                    >
                      <b-icon-person-check-fill class="mr-2">
                      </b-icon-person-check-fill>
                      Salvar
                    </b-button>
                    <b-button variant="warning" @click="limpar()" class="mr-2">
                      <b-icon-arrow-clockwise
                        class="mr-3"
                      ></b-icon-arrow-clockwise
                      >Limpar
                    </b-button>
                    <b-button variant="primary" @click="tabIndex++">
                      <b-icon-search class="mr-2"></b-icon-search>Pesquisar
                    </b-button>
                  </div>
                </b-container>
              </b-card>
            </b-tab>
            <b-tab title="Pesquisa">
              <b-card class="formClienteCard">
                <b-form-text text-variant="warning" style="color: red">
                  {{ campoPesquisaError }}
                </b-form-text>
                <b-input-group class="mt-3 mb-4">
                  <b-form-input
                    v-model="campoPesquisa"
                    size="sm"
                    class="mr-3"
                  ></b-form-input>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    size="sm"
                  ></b-form-select>
                  <b-input-group-append>
                    <b-button
                      variant="primary"
                      size="sm"
                      class="ml-3"
                      @click="list()"
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
                        <td>{{ String(item.nomePaciente).toUpperCase() }}</td>
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
                          <b-dropdown center text="Ações">
                            <b-dropdown-item @click="read(item.uuid)"
                              >Editar</b-dropdown-item
                            >
                            <b-dropdown-item @click="deletePaciente(item.uuid)"
                              >Deletar</b-dropdown-item
                            >
                            <b-dropdown-divider></b-dropdown-divider>
                          </b-dropdown>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-card>

              <b-button-group size="sm" class="mt-2">
                <b-button @click="previousPage">Anterior</b-button>
                <b-button @click="nextPage">Próximo</b-button>
              </b-button-group>
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
import ValidatorPaciente from "../../validators/paciente";

export default {
  components: {},
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
      campoPesquisa: "",
      pages: [],
      ListaPaciente: {},
      tabIndex: 1,
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
      pacienteError: {
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
      options: [
        { value: "nomePaciente", text: "Nome" },
        { value: "cpf", text: "Cpf" },
      ],
      selected: "nomePaciente",
      campoPesquisaError: "",
    };
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
      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500,
      });
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
      this.pacienteError = {
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

      this.campoPesquisaError = "";
    },
    async list() {
      try {
        if (!this.selected) {
          this.campoPesquisaError = "Selecione uma Opção para pesquisar.";
          return;
        }

        if (!this.campoPesquisa) {
          this.campoPesquisaError = "Campo de Pesquisa em branco.";
          return;
        }

        const response = await PacienteService.list(
          `${this.selected}=${this.campoPesquisa}&like=true&page=${this.page}`
        );
        this.ListaPaciente = response.data.result;
        const totalRows = response.data.total[0].count;
        this.totalPage = Math.ceil(totalRows / 10);
        this.campoPesquisaError = "";
      } catch (ex) {
        // console.log(ex);
      }
    },
    async previousPage() {
      try {
        this.page -= 1
        this.list();
      } catch (ex) {
        // console.log(ex);
      }
    },
    async nextPage() {
      try {
        this.page += 1
        this.list();
      } catch (ex) {
        // console.log(ex);
      }
    },
    async salvar() {
      const validation = ValidatorPaciente(this.paciente);

      if (validation) {
        for (const key in validation) {
          const err = validation[key];
          this.pacienteError[key] = err[0];
        }
        this.showAlert("info", "Existe algum erro de preenchimento");
        return;
      }

      if (this.paciente.uuid === -1) {
        try {
          const result = await PacienteService.save(this.paciente);
          this.showAlert("success", "Paciente Salvo com Sucesso");
          this.paciente.uuid = result.data.uuid;
          this.list();
        } catch (ex) {
          this.showAlert("error", "Erro ao Salvar Paciente");
        }
        return;
      }
      try {
        await PacienteService.edit(this.paciente, this.paciente.uuid);
        this.showAlert("success", "Paciente Editado com Sucesso");
        this.list();
      } catch (ex) {
        this.showAlert("error", "Erro ao Editar Paciente");
      }
    },
    deletePaciente(idPaciente) {
      PacienteService.delete(idPaciente)
        .then(() => {
          this.showAlert("success", "Paciente Deletado com Sucesso");
          this.list();
        })
        .catch(() => {
          this.showAlert("error", "Erro eo Deletar registro de Paciente");
        });
    },
    read(uuid) {
      PacienteService.read(uuid)
        .then((response) => {
          this.tabIndex -= this.tabIndex;
          this.paciente = response.data.paciente;
        })
        .catch(() => {
          this.showAlert("error", "Erro consultar registro de Paciente");
        });
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
  height: 699px;
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