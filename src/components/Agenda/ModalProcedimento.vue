<template>
  <b-modal
    @ok="saveProcedimento"
    id="modal-lg-addProcedimento"
    header-bg-variant="light"
    title="Novo Procedimento"
    @hidden="resetModalProcedimento"
  >
    <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="Cadastro" active>
        <label class="mt-2">Descrição do Procedimento</label>
        <b-form-input
          size="sm"
          type="text"
          hidden
          v-model="procedimento.uuid"
        ></b-form-input>
        <b-form-input
          size="sm"
          type="text"
          v-model="procedimento.text"
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
            <tr v-for="procedimento2 in optionsPro" :key="procedimento2.uuid">
              <td>{{ procedimento2.text }}</td>
              <td>
                <b-button
                  pill
                  v-b-modal.modal-lg
                  variant="primary"
                  @click="editarProcedimento(procedimento2.uuid)"
                  >Editar</b-button
                >
              </td>
              <td>
                <b-button
                  pill
                  v-b-modal.modal-lg
                  variant="primary"
                  @click="excluirProcedimento(procedimento2.uuid)"
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
        @click="limparProcedimento"
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
import ProcedimentoService from "../../services/procedimento";
import { mapState } from "vuex";
export default {
  data() {
    return {
      optionsPro: [],
      tabIndex: 0,
      procedimento: { uuid: "", text: "", value: "" },
    };
  },
  computed: {
    ...mapState({
      procedimentoSelect: (state) => state.procedimentoSelect,
    }),
  },
  created() {
    this.readAllProcedimentos();
  },
  methods: {
    limparProcedimento(){
      this.procedimento = { uuid: "", text: "", value: "" }
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

    excluirProcedimento(uuid) {
      if (!uuid) {
        this.showAlert("info", "Selecione um Registro");
      } else {
        ProcedimentoService.delete(uuid)
          .then(() => {
            this.showAlert("success", "Registro deletado com Sucesso");
            this.limparProcedimento()
            this.readAllProcedimentos();
          })
          .catch(() => {
            this.showAlert("error", "Erro ao Deletar Registro");
          });
      }
    },

    resetModalProcedimento() {
       this.procedimento = { uuid: "", text: "", value: "" }
    },

    procedimentoGenerate(text, value) {
      return {
        text: text,
        value: value,
      };
    },

    readAllProcedimentos() {
      this.optionsPro = []
      ProcedimentoService.readAll()
        .then((result) => {
          
          result.data.procedimento.forEach((element) => {
            this.optionsPro.push(
             element
            );
          });
          this.$emit("alterProcedimento")
          this.$store.commit("procedimentoSelect", this.optionsPro);
        })
        .catch(() => {
          this.showAlert("error", "Ocorreu um erro ao carregar procedimentos");
        });
    },

    editarProcedimento(uuid) {

      ProcedimentoService.read(uuid)
        .then((result) => {
          if (result.status === 201) {
            this.procedimento.text = result.data.procedimento[0].text;
            this.procedimento.uuid = result.data.procedimento[0].uuid;
            this.procedimento.value = result.data.procedimento[0].value;
            this.tabIndex = 0;
          }
        })
        .catch(() => {
          this.showAlert("error", "Erro ao carregar procedimento");
        });
    },

    hide() {
      this.$emit("closeModal");
    },
    
    saveProcedimento(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.procedimento.text === "") {
        this.showAlert("info", "Informe a Descrição do Procedimento Por favor");
        return;
      }
      if (this.procedimento.uuid === "") {
        bvModalEvt.preventDefault();
        ProcedimentoService.save(this.procedimento)
          .then((result) => {
            this.showAlert("success", "Procedimento Salvo com Sucesso");
            this.procedimento.uuid = result.data.uuid.uuid;
            this.$store.commit("procedimentoSelectPush", this.procedimento);
            this.readAllProcedimentos()
          })
          .catch(() => {
            this.showAlert("error", "Erro ao salvar Procedimento");
          });
      } else {
       
        ProcedimentoService.update(this.procedimento, this.procedimento.uuid)
          .then(() => {
            this.showAlert("success", "Procedimento Atualizado");
            this.readAllProcedimentos();
          })
          .catch(() => {
            this.showAlert("error", "Erro ao atualizar Procedimento");
          });
      }
    },
  },
};
</script>

<style>
</style>