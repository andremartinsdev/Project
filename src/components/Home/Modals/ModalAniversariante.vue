<template>
  <b-modal
    id="my-modal"
    hide-footer
    title="Aniversariantes do Mês"
    class="text-center"
  >
    <div class="d-block text-center">
      <div>
        <b-table striped hover :items="pacientes" :fields="fields">
          <template #cell(telefone)="row">
            <b-button
              size="sm"
              @click="msgWhats(row.item.telefone)"
              variant="primary"
              class="mr-2"
            >
              Whatsapp
              <b-icon-telephone-fill class="ml-2"></b-icon-telephone-fill>
            </b-button>
          </template>
        </b-table>
      </div>
    </div>

    <b-modal
      id="my-modal-text"
      hide-footer
      title="Deseje um Feliz Aniversario para seu Paciente"
      class="text-center"
    >
      <div class="d-block text-center">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Feliz Aniversario..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>

        <b-button
          variant="primary"
          pill
          size="sm"
          class="mt-3"
          @click="enviarMsg"
          >Enviar . . .</b-button
        >
      </div>
    </b-modal>
  </b-modal>
</template>

<script>
import pacienteService from "../../../services/paciente";
import moment from "moment";
export default {
  data() {
    return {
      text: "",
      fields: ["nomePaciente", "dataNascimento", "telefone"],
      pacientes: [],
      telPaciente: "",
    };
  },
  created() {
    this.listaAniversariantes();
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

    enviarMsg() {
      window.open(
        `https://api.whatsapp.com/send?phone=55${this.telPaciente}&text=${this.text}`
      );
    },
    msgWhats(tel) {
      if (tel === undefined || tel === "") {
        this.showAlert("info", "O campo Telefone do Paciente deve ser valido");
        return;
      }
      this.telPaciente = tel;
      this.$bvModal.show("my-modal-text");
    },
    async listaAniversariantes() {
      var mes = parseInt(moment().format("DD/MM/YYYY").substring(3, 5));
      var dia = moment().format("DD/MM/YYYY").substring(0, 2);
      const pacientes = await pacienteService.readAniversariante(mes, dia);
      pacientes.data.forEach((element) => {
        element.dataNascimento = moment(element.dataNascimento).format(
          "DD/MM/YYYY"
        );
        this.pacientes.push(element);
      });
    },
  },
};
</script>

<style>
</style>