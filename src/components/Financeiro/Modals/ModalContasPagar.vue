<template>
  <b-modal
    @ok="handleOk"
    id="modalDespesa"
    title="Cadastro de Contas a pagar"
    header-bg-variant="danger"
    header-text-variant="light"
    size="lg"
    @hidden="resetModalDespesa"
  >
    <div>
      <b-tabs content-class="mt-3" v-model="tabIndexDespesa">
        <b-tab title="Cadastro">
          <div>
            <b-input hidden v-model="despesa.idDespesa"></b-input>
            <b-form-checkbox
              id="checkbox-1"
              v-model="contaFixa"
              name="checkbox-1"
              value="true"
              unchecked-value="false"
              class="float-right"
            >
              Conta Fixa
            </b-form-checkbox>
            <label for="">Descrição da Despesa</label>

            <b-input size="sm" v-model="despesa.descricaoDespesa"></b-input>
            <b-row class="containerData mt-2">
              <div>
                <b-form-group label="Data Vencimento" class="ml-3">
                  <b-form-input
                    size="sm"
                    type="date"
                    v-model="despesa.dataVencimento"
                  ></b-form-input>
                </b-form-group>
              </div>

              <b-form-group
                label="Quantos Meses"
                class="ml-3"
                v-if="contaFixa === 'true'"
              >
                <b-form-input
                  size="sm"
                  type="number"
                  v-model="qtdMeses"
                  class="col-sm-8"
                ></b-form-input>
              </b-form-group>
            </b-row>

            <label for="" class="mt-2">Valor da Despesa</label>
            <b-form-input
              v-model.lazy="despesa.valor"
              class="form-control bg-danger text-white col-sm-3"
              v-money="money2"
            ></b-form-input>
            <div class="form-group w-50 mr-2 mt-2">
              <label class="mr-2">Forma de Pagamento </label>
              <b-icon-plus-circle
                class="iconsAgenda ml-2"
                variant="primary"
                @click="openFormaPagamento"
              ></b-icon-plus-circle>
              <b-form-select
                size="sm"
                v-model="despesa.idFormaPagamento"
                :options="formaDePagamento"
              >
                <template #first>
                  <b-form-select-option :value="null"
                    >-- Selecione --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </div>

            <div>
              <b-form-textarea
                id="textarea"
                placeholder="Observação"
                rows="3"
                max-rows="6"
                v-model="despesa.observacao"
              ></b-form-textarea>
            </div>
            <b-card
              class="mt-4 text-center"
              bg-variant="danger"
              v-if="statusPagementoDate === 'emAberto'"
            >
              <b-form-select
                class="col-sm-4"
                size="sm"
                v-model="statusPagementoDate"
                :options="statusPagamento"
                @change="mudarDataPagamento"
              >
              </b-form-select>
            </b-card>

            <b-card class="mt-4 text-center" bg-variant="success" v-else>
              <b-form-select
                class="col-sm-4"
                size="sm"
                v-model="statusPagementoDate"
                :options="statusPagamento"
              >
              </b-form-select>
            </b-card>
          </div>
        </b-tab>
        <b-tab title="Pesquisa">
          <b-card class="mt-3 cardTableDespesa">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Data Pagamento</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="despesa in despesas[0]" :key="despesa.uuid">
                  <th v-if="despesa.despesaPaga">
                    <b-icon-check2 variant="success"></b-icon-check2>
                  </th>
                  <th v-else>
                    <b-icon-x variant="danger"></b-icon-x>
                  </th>
                  <th>{{ despesa.descricaoDespesa }}</th>
                  <td>{{ despesa.data }}</td>
                  <td>
                    {{
                      despesa.valor.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    }}
                  </td>
                  <td>
                    <b-button
                      size="sm"
                      variant="danger"
                      @click="editarDespesa(despesa.uuid)"
                      >Editar</b-button
                    >
                  </td>
                  <td>
                    <b-button
                      size="sm"
                      variant="danger"
                      @click="excluirDespesa(despesa.uuid)"
                      class="ml-2"
                    >
                      Excluir
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card>
        </b-tab>
      </b-tabs>
    </div>

    <template #modal-footer="{ ok }">
      <b-button size="sm" variant="primary" @click="ok()"> Salvar </b-button>
      <b-button size="sm" variant="primary" @click="resetModalDespesa">
        Limpar
      </b-button>
    </template>
    <ModalFormaPagamento @reloadForma="reloadForma" />
  </b-modal>
</template>

<script>
import DespesaService from "../../../services/despesas";
import moment from "moment";
import FormaDePagamentoService from "../../../services/formaDePagamento";
import ModalFormaPagamento from "../../Agenda/ModalFormaPagamento";
export default {
  components: {
    ModalFormaPagamento,
  },
  data() {
    return {
      statusPagementoDate: "emAberto",
      tabIndexDespesa: 0,
      contaFixa: "false",
      qtdMeses: 0,
      despesa: {
        uuid: "",
        descricaoDespesa: "",
        dataPagamento: null,
        dataVencimento: "",
        idFormaPagamento: null,
        despesaPaga: "",
        valor: 0,
        observacao: "",
      },
      statusPagamento: [
        { text: "Pago", value: "pago" },
        { text: "Em Aberto", value: "emAberto" },
      ],
      despesas: [],
      formaDePagamento: [],
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },

  created() {
    this.readFormaPagamento();
    this.readDespesas();
  },
  methods: {
    mudarDataPagamento() {
      if (this.statusPagementoDate === "pago") {
        this.despesa.dataPagamento = moment().format("YYYY-MM-DD");
        this.despesa.despesaPaga = true;
        console.log(this.despesa.dataPagamento);
        return;
      }
      this.despesa.dataPagamento = null;
    },
    openFormaPagamento() {
      this.$bvModal.show("modal-lg-addFormaPagamento");
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

    readDespesas() {
      this.despesas = [];
      DespesaService.readAll()
        .then((result) => {
          if (result.status === 201) {
            this.despesas.push(result.data.despesas);
            this.despesas[0].map((el) => {
              el.data = moment(el.dataVencimento).format("DD/MM/YYYY");
            });
          } else {
            this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
        });
    },

    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveDespesa();
    },

    formaPagamento(descricao, idFormaPagamento) {
      return {
        text: descricao,
        value: idFormaPagamento,
      };
    },

    readFormaPagamento() {
      this.formaDePagamento = [];
      FormaDePagamentoService.read().then((result) => {
        result.data.formasPagamento.map((el) => {
          this.formaDePagamento.push(
            this.formaPagamento(el.descricao, el.uuid)
          );
        });
      });
    },

    reloadForma() {
      this.$emit("reloadForma");
    },

    resetModalDespesa() {
      this.contaFixa = "false";
      this.qtdMeses = 0;
      this.despesa = {
        uuid: "",
        descricaoDespesa: "",
        data: "",
        idFormaPagamento: null,
        despesaPaga: false,
        valor: 0,
        observacao: "",
      };
    },

    saveDespesa() {
      if (this.despesa.uuid === "") {
        if (
          this.despesa.descricao === "" ||
          this.despesa.dataVencimento === "" ||
          this.despesa.valor === 0 ||
          this.despesa.idFormaPagamento === null
        ) {
          this.showAlert("info", "Por favor preescha todos os campos");
        } else {
          this.despesa.valor = this.despesa.valor.replace("R$", "");
          this.despesa.valor = this.despesa.valor.replace(".", "");
          this.despesa.valor = this.despesa.valor.replace(",", ".");
          delete this.despesa.uuid;

          if (this.contaFixa === "true") {
            DespesaService.saveFixa(this.despesa, this.qtdMeses)
              .then(() => {
                this.showAlert(
                  "success",
                  "Contas a Pagar Cadastradas com Sucesso"
                );
                this.readDespesas();
                this.resetModalDespesa();
              })
              .catch(() => {
                this.showAlert(
                  "error",
                  "Ocorreu um erro ao Cadastrar contas a Pagar"
                );
              });
            return;
          }

          DespesaService.save(this.despesa)
            .then((result) => {
              if (result.status === 201) {
                this.showAlert("success", "Despesa Cadastrada com Sucesso");
                this.readDespesas();
                this.resetModalDespesa();
              } else {
                this.showAlert(
                  "error",
                  "Ops! ocorreu algo de errado ao salvar "
                );
              }
            })
            .catch(() => {
              this.showAlert(
                "error",
                "Ops! ocorreu algo de errado ao salvar Despesa"
              );
            });
        }
      } else if (this.despesa.uuid && this.despesa.uuid.length === 36) {
        this.despesa.valor = this.despesa.valor.replace("R$", "");
        this.despesa.valor = this.despesa.valor.replace(".", "");
        this.despesa.valor = this.despesa.valor.replace(",", ".");
        DespesaService.update(this.despesa)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Atualizado");
              this.readDespesas();
              this.resetModalDespesa();
            } else {
              this.showAlert(
                "error",
                "Ops! ocorreu um erro ao Atualizar Registro"
              );
            }
          })
          .catch(() => {
            this.showAlert(
              "error",
              "Ops!! ocorreu um erro ao Atualizar Registro"
            );
          });
      }
    },

    editarDespesa(uuid) {
      DespesaService.read(uuid)
        .then((result) => {
          if (result.status === 201) {
            this.despesa.uuid = result.data.despesa[0].uuid;
            this.despesa.descricaoDespesa =
              result.data.despesa[0].descricaoDespesa;
            this.despesa.dataVencimento = moment(
              result.data.despesa[0].dataVencimento
            ).format("YYYY-MM-DD");
            this.despesa.idFormaPagamento =
              result.data.despesa[0].uuidFormaPagamento;
            this.despesa.valor = result.data.despesa[0].valor.toLocaleString(
              "pt-br",
              { style: "currency", currency: "BRL" }
            );
            this.despesa.observacao = result.data.despesa[0].observacao;
            this.despesa.despesaPaga =
              result.data.despesa[0].despesaPaga === 1 ? true : false;

            if (result.data.despesa[0].despesaPaga === 1) {
              this.despesa.despesaPaga = true;
              this.statusPagementoDate = "pago";
            } else {
              this.despesa.despesaPaga = false;
              this.statusPagementoDate = "emAberto";
            }

            this.tabIndexDespesa = 0;
          } else {
            this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
        });
    },

    excluirDespesa(uuid) {
      if (!uuid && uuid.length === 36) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        DespesaService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro de deletado com Sucesso");
              this.readDespesas();
            } else {
              this.showAlert(
                "error",
                "Ops! ocorreu um erro ao excluir Despesa"
              );
            }
          })
          .catch(() => {
            this.showAlert("error", "Ops!! ocorreu um erro ao excluir Despesa");
          });
      }
    },
  },
};
</script>

<style>
</style>