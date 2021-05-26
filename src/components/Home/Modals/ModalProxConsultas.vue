<template>
  <b-modal
    id="my-modal-proxConsultas"
    hide-footer
    title="Proximas Consultas"
    class="text-center"
  >
    <div class="d-block text-center">
      <div>
        <b-table striped hover :items="consultas" :fields="fields"> </b-table>
      </div>
    </div>
  </b-modal>
</template>

<script>
import AgendaService from "../../../services/agenda";
import moment from "moment";
export default {
  data() {
    return {
      consultas: [],
      fields: ['nomePaciente', 'data', 'horario']
    };
  },
  created() {
    this.readConsultas();
  },
  methods: {
    async readConsultas() {
      const consultas = await AgendaService.readDateProximasConsultas(
        moment().format("YYYY-MM-DD")
      );
      consultas.data.consultas.forEach(element => {
          element.data = moment(element.data).format("DD/MM/YYYY")
          this.consultas.push(element)
      });
    },
  },
};
</script>

<style>
</style>