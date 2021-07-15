<template>
  <b-modal
    @ok="handleOkReceita"
    id="modalReceita"
    title="Cadastro de Contas a Receber"
    header-bg-variant="success"
    header-text-variant="light"
    size="lg"
    @hidden="resetModalReceita"
  >
    <div>
      <b-tabs content-class="mt-3" v-model="tabIndexReceita">
        <b-tab title="Cadastro">
          <div>
            <b-input hidden></b-input>
            <label for="">Descrição da Receita</label>
            <b-input size="sm" v-model="receitaData.descricaoReceita"></b-input>
            <div class="containerData">
              <div>
                <label for="" class="mt-2">Data do Pagamento</label>
                <b-form-input
                  size="sm"
                  type="date"
                  v-model="receitaData.data"
                  class="mr-2 col-sm-4"
                ></b-form-input>
              </div>
            </div>

            <label for="" class="mt-2">Valor da Receita</label>
            <b-form-input
              v-model.lazy="receitaData.valor"
              class="form-control bg-success text-white col-sm-3"
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
                v-model="receitaData.idFormaPagamento"
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
                v-model="receitaData.observacao"
              ></b-form-textarea>
            </div>
            <b-card
              class="mt-4 text-center"
              bg-variant="success"
              v-if="receitaData.receitaPaga"
            >
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="receitaData.receitaPaga"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  :value="true"
                  >Conta Paga</b-form-radio
                >
                <b-form-radio
                  v-model="receitaData.receitaPaga"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  :value="false"
                  >Conta em Aberto</b-form-radio
                >
              </b-form-group>
            </b-card>
            <b-card class="mt-4 text-center" v-else bg-variant="danger">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio
                  v-model="receitaData.receitaPaga"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  :value="true"
                  >Conta Paga</b-form-radio
                >
                <b-form-radio
                  v-model="receitaData.receitaPaga"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  :value="false"
                  >Conta em Aberto</b-form-radio
                >
              </b-form-group>
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
                <tr v-for="receita in receitas[0]" :key="receita.uuid">
                  <th v-if="receita.receitaPaga">
                    <b-icon-check2 variant="success"></b-icon-check2>
                  </th>
                  <th v-else>
                    <b-icon-x variant="danger"></b-icon-x>
                  </th>
                  <th>{{ receita.descricaoReceita }}</th>
                  <td>{{ receita.data }}</td>
                  <td>
                    {{
                      receita.valor.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    }}
                  </td>
                  <td>
                    <b-button
                      size="sm"
                      variant="success"
                      @click="editarReceita(receita.uuid)"
                      >Editar</b-button
                    >
                  </td>
                  <td>
                    <b-button
                      size="sm"
                      variant="success"
                      @click="excluirReceita(receita.uuid)"
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
      <b-button size="sm" variant="primary" @click="resetModalReceita">
        Limpar
      </b-button>
    </template>
    <ModalFormaPagamento @reloadForma="reloadForma" />
  </b-modal>
</template>

<script>
import moment from "moment";
import ReceitaService from "../../../services/receita";
import FormaDePagamentoService from "../../../services/formaDePagamento";
import ModalFormaPagamento from "../../Agenda/ModalFormaPagamento";

export default {
  components: {
    ModalFormaPagamento,
  },

  created() {
    this.readFormaPagamento();
    this.readReceita();
  },
  data() {
    return {
      statusPagamento: [
        { text: "Pago", value: "pago" },
        { text: "Em Aberto", value: "emAberto" },
      ],
      statusPagementoDate: "emAberto",
      tabIndexReceita: 0,
      formaDePagamento: [],
      receitas: [],
      receitaData: {
        uuid: "",
        descricaoReceita: "",
        data: "",
        idFormaPagamento: null,
        receitaPaga: false,
        valor: 0,
        observacao: "",
      },
      money2: {
        prefix: "R$",
        decimal: ",",
        thousands: ".",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },
  methods: {
    mudarDataPagamento() {
      console.log(this.receitaData.receitaPaga);
      if (this.statusPagementoDate === "emAberto") {
        this.statusPagementoDate = "pago";
      } else {
        this.statusPagementoDate = "emAberto";
      }
      this.receitaData.receitaPaga = !this.receitaData.receitaPaga;
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

    handleOkReceita(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveReceita();
    },

    resetModalReceita() {
      this.receitaData = {
        uuid: "",
        descricaoReceita: "",
        data: "",
        idFormaPagamento: null,
        receitaPaga: false,
        valor: 0,
        observacao: "",
      };
    },

    readReceita() {
      this.receitas = [];
      ReceitaService.readAll()
        .then((result) => {
          if (result.status === 201) {
            this.receitas.push(result.data.receitas);
            this.receitas[0].map((el) => {
              el.data = moment(el.data).format("DD/MM/YYYY");
            });
          } else {
            this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
          }
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Listar Despesas");
        });
    },

    editarReceita(uuid) {
      ReceitaService.read(uuid)
        .then((result) => {
          this.receitaData.uuid = result.data.receita[0].uuid;
          this.receitaData.descricaoReceita =
            result.data.receita[0].descricaoReceita;
          this.receitaData.data = moment(result.data.receita[0].data).format(
            "YYYY-MM-DD"
          );
          this.receitaData.valor = result.data.receita[0].valor.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          );
          this.receitaData.idFormaPagamento =
            result.data.receita[0].uuidFormaPagamento;
          this.receitaData.observacao = result.data.receita[0].observacao;
          this.receitaData.receitaPaga =
            result.data.receita[0].receitaPaga === 1 ? true : false;
          this.tabIndexReceita = 0;
        })
        .catch(() => {
          this.showAlert("error", "Ops! ocorreu um erro ao Editar Despesa");
        });
    },

    excluirReceita(uuid) {
      if (!uuid && uuid.length === 36) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        ReceitaService.delete(uuid)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro de deletado com Sucesso");
              this.readReceita();
            } else {
              this.showAlert(
                "error",
                "Ops! ocorreu um erro ao excluir Receita"
              );
            }
          })
          .catch(() => {
            this.showAlert("error", "Ops!! ocorreu um erro ao excluir Receita");
          });
      }
    },

    saveReceita() {
      if (this.receitaData.uuid === "") {
        this.receitaData.valor = this.receitaData.valor.replace("R$", "");
        this.receitaData.valor = this.receitaData.valor.replace(".", "");
        this.receitaData.valor = this.receitaData.valor.replace(",", ".");
        console.log(this.receitaData);
        ReceitaService.save(this.receitaData)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Receita Cadastrada com Sucesso");
              this.readReceita();
              this.resetModalReceita();
            } else {
              this.showAlert(
                "error",
                "Ops! ocorreu um erro ao Cadastrar Receita"
              );
            }
          })
          .catch(() => {
            this.showAlert(
              "error",
              "Ops!! ocorreu um erro ao Cadastrar Receita"
            );
          });
      } else if (this.receitaData.uuid && this.receitaData.uuid.length === 36) {
        this.receitaData.valor = this.receitaData.valor.replace("R$", "");
        this.receitaData.valor = this.receitaData.valor.replace(".", "");
        this.receitaData.valor = this.receitaData.valor.replace(",", ".");
        ReceitaService.update(this.receitaData)
          .then((result) => {
            if (result.status === 201) {
              this.showAlert("success", "Registro Atualizado");
              this.readReceita();
              this.resetModalReceita();
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

    reloadForma() {
      this.$emit("reloadForma");
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
  },
};
</script>

<style>
</style>