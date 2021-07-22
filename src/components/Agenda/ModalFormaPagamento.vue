<template>
  <b-modal
    @ok="saveForma"
    id="modal-lg-addFormaPagamento"
    header-bg-variant="light"
    title="Forma de Pagamento"
    @hidden="resetModal"
  >
    <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="Cadastro">
        <label class="mt-2">Descrição da Forma de Pagamento</label>
        <b-form-input
          size="sm"
          type="text"
          hidden
          v-model="formaPagamento.uuid"
        ></b-form-input>
        <b-form-input
          size="sm"
          type="text"
          v-model="formaPagamento.descricao"
        ></b-form-input>
      </b-tab>
      <b-tab title="Pesquisar">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Descrição Forma de Pagamento</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="forma in formaPagamentoArr" :key="forma.uuid">
              <td>{{ forma.descricao }}</td>
              <td>
                <b-button
                  pill
                  v-b-modal.modal-lg
                  variant="primary"
                  @click="editar(forma.descricao, forma.uuid)"
                  >Editar</b-button
                >
              </td>
              <td>
                <b-button pill v-b-modal.modal-lg variant="primary" @click="deleteFormaDePagamento(forma.uuid)"
                  >Excluir</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </b-tab>
    </b-tabs>

    <template #modal-footer="{ ok, hide }">
      <b-button size="sm" variant="primary" @click="ok()"> Salvar </b-button>

      <b-button
        size="sm"
        variant="outline-secondary"
        @click="resetModal()"
      >
        Novo
      </b-button>
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Fechar
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import ServiceFormaPagamento from "../../services/formaDePagamento";
export default {
  data() {
    return {
      tabIndex: 0,
      formaPagamentoArr: [],
      formaPagamento: {
        uuid: "",
        descricao: "",
      },
    };
  },

  created() {
    this.readFormaDePagamento();
  },

  methods: {
    showAlert(icon, title) {
      // Use sweetalert2

      this.$swal({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
      });
    },

    editar(descricao, uuid) {
      this.formaPagamento.descricao = descricao;
      this.formaPagamento.uuid = uuid;
      this.tabIndex = 0;
    },

    async saveForma(bvModalEvt) {
      bvModalEvt.preventDefault();
      try {
        if (this.formaPagamento.uuid === "") {
          await ServiceFormaPagamento.save(this.formaPagamento);
          this.showAlert("success", "Forma de Pagamento Salva com Sucesso");
          this.resetModal();
          this.readFormaDePagamento();
          this.$emit("reloadForma");

          return;
        }
        await ServiceFormaPagamento.update(
          this.formaPagamento.uuid,
          this.formaPagamento
        );
        this.showAlert("success", "Forma de Pagamento Atualizada com Sucesso");
        this.resetModal();
        this.readFormaDePagamento();
        this.$emit("reloadForma");
      } catch (error) {
        this.showAlert("error", "Erro ao Salvar Forma de Pagamento");
      }
    },

    async readFormaDePagamento() {
      try {
        const formas = await ServiceFormaPagamento.read();
        this.formaPagamentoArr = formas.data.formasPagamento;
      } catch (error) {
        this.showAlert(
          "error",
          "Ocorreu um erro ao listar Formas de Pagamento"
        );
      }
    },

    async deleteFormaDePagamento(uuid) {
      try {
        await ServiceFormaPagamento.delete(uuid);
        this.showAlert("success", "Registro Deletado");
        this.readFormaDePagamento();
        this.$emit("reloadForma");
      } catch (error) {
        if (error.response.status === 409) {
          this.showAlert("info", error.response.data.message);
        } else {
          this.showAlert("error", "erro ao deletar");
        }
      }
    },

    

    resetModal() {
      this.formaPagamento = {
        uuid: "",
        descricao: "",
      };
    },
  },
};
</script>

<style>
</style>