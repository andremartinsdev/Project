<template>
  <b-modal
    @ok="saveOticaParceira"
    id="modal-lg-addOticaParceira"
    header-bg-variant="light"
    title="Ótica Parceira"
    @hidden="resetModal"
  >
    <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="Cadastro">
        <label class="mt-2">Descrição da Forma de Pagamento</label>
        <b-form-input
          size="sm"
          type="text"
          hidden
          v-model="oticaParceira.uuid"
        ></b-form-input>
        <b-form-input
          size="sm"
          type="text"
          v-model="oticaParceira.descricao"
        ></b-form-input>
      </b-tab>
      <b-tab title="Pesquisar">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Descrição Procedimento</th>
              <th scope="col">Editar</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="otica in oticaParceiraArr" :key="otica.uuid">
              <td>{{ otica.descricao }}</td>
              <td>
                <b-button
                  pill
                  v-b-modal.modal-lg
                  variant="primary"
                  @click="editar(otica.descricao, otica.uuid)"
                  >Editar</b-button
                >
              </td>
              <td>
                <b-button pill v-b-modal.modal-lg variant="primary"
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
        @click="limparProcedimento()"
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
import ServiceOticasParceiras from "../../services/oticasParceiras";
export default {
  data() {
    return {
      tabIndex: 0,
      oticaParceiraArr: [],
      oticaParceira: {
        uuid: "",
        descricao: "",
      },
    };
  },

created(){
this.readOticasParceiras()
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

    readOticasParceiras() {
      ServiceOticasParceiras.read()
        .then((result) => {
          console.log(result)
          this.oticaParceiraArr = result.data.oticaParceira;
        })
        .catch(() => {
          this.showAlert(
            "error",
            "Erro ao pesquisar dados das Óticas Parceiras"
          );
        });
    },

    deleteOticaParceira(uuid) {
      ServiceOticasParceiras.delete(uuid)
        .then(() => {
          this.showAlert("success", "Registro Deletado");
          this.readOticasParceiras();
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.showAlert("info", error.response.data.message);
          } else {
            this.showAlert("error", "erro ao deletar");
          }
        });
    },

    resetModal() {},

    saveOticaParceira(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.oticaParceira.uuid === "") {
        ServiceOticasParceiras.save(this.oticaParceira).then(() => {
          this.showAlert("success", "Registro Salvo com Sucesso");
          this.readOticasParceiras();
        });
         return;
      }
      ServiceOticasParceiras.update(
        this.oticaParceira.uuid,
        this.oticaParceira
      ).then(() => {
        this.showAlert("success", "Registro Atualizado com Sucesso");
        this.readOticasParceiras();
      });
    },
  },
};
</script>

<style>
</style>