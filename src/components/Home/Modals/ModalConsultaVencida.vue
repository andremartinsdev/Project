<template>
  <b-modal
    id="my-modal-consultas"
    hide-footer
    title="Consultas Vencidas"
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
      fields: ["nomePaciente", "horario", "dataVencimento"],
    };
  },
  created() {
    this.readConsultas();
  },
  methods: {
    async readConsultas() {
      const consultas = await AgendaService.readDateVencimento(
        moment().format("YYYY-MM-DD")
      );
      console.log(consultas);
      consultas.data.agendamentos.forEach((element) => {
        element.dataVencimento = moment(element.dataVencimento).format(
          "DD/MM/YYYY"
        );
        this.consultas.push(element);
      });
    },
  },
};
</script>

<style>
</style>