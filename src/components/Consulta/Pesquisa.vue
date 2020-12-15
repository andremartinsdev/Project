<template>
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
                    <div class="ml-4">
                      <label>Procedimento</label>

                      <b-form-select
                  size="sm"
                  v-model="select"
                  :options="this.Options"
                 

                ></b-form-select>
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
</template>